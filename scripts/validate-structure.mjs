#!/usr/bin/env node
/**
 * Validiert die Marketplace-Struktur:
 * - marketplace.json ist valides JSON mit Pflichtfeldern
 * - jeder Plugin-Eintrag zeigt auf einen existierenden Ordner mit plugin.json
 * - Namen sind kebab-case, eindeutig und konsistent (marketplace == plugin.json == Ordner)
 * - kein version-Feld (Versionierung läuft über Commit-SHA)
 * - jedes Plugin enthält mindestens einen Skill mit parsebarem Frontmatter
 * - jeder Ordner unter plugins/ ist auch im Marketplace registriert
 * - simple Heuristiken gegen gefährliche Muster (Review bleibt trotzdem Pflicht)
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(process.argv[2] ?? ".");
const errors = [];
const warnings = [];
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function fail(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }

// --- marketplace.json ---
const mpPath = join(ROOT, ".claude-plugin", "marketplace.json");
if (!existsSync(mpPath)) {
  fail(".claude-plugin/marketplace.json fehlt");
  report();
}
let mp;
try {
  mp = JSON.parse(readFileSync(mpPath, "utf8"));
} catch (e) {
  fail(`marketplace.json ist kein valides JSON: ${e.message}`);
  report();
}
if (!mp.name || !KEBAB.test(mp.name)) fail(`marketplace.name fehlt oder ist nicht kebab-case: "${mp.name}"`);
if (!mp.owner?.name) fail("marketplace.owner.name fehlt");
if (!Array.isArray(mp.plugins) || mp.plugins.length === 0) fail("marketplace.plugins fehlt oder ist leer");

const seen = new Set();
for (const p of mp.plugins ?? []) {
  const label = p.name ?? "<ohne name>";
  if (!p.name || !KEBAB.test(p.name)) fail(`Plugin "${label}": name fehlt oder ist nicht kebab-case`);
  if (seen.has(p.name)) fail(`Plugin "${label}": doppelter Name im Marketplace`);
  seen.add(p.name);
  if (!p.description) warn(`Plugin "${label}": keine description im Marketplace-Eintrag`);
  if (p.version) fail(`Plugin "${label}": version-Feld im Marketplace-Eintrag entfernen (Versionierung läuft über Git)`);

  if (typeof p.source !== "string" || !p.source.startsWith("./")) {
    fail(`Plugin "${label}": source muss ein relativer Pfad sein (./plugins/...), ist: ${JSON.stringify(p.source)}`);
    continue;
  }
  if (p.source.includes("..")) { fail(`Plugin "${label}": source darf kein ".." enthalten`); continue; }

  const dir = join(ROOT, p.source);
  if (!existsSync(dir) || !statSync(dir).isDirectory()) { fail(`Plugin "${label}": Ordner ${p.source} existiert nicht`); continue; }

  // plugin.json
  const pjPath = join(dir, ".claude-plugin", "plugin.json");
  if (!existsSync(pjPath)) { fail(`Plugin "${label}": ${p.source}/.claude-plugin/plugin.json fehlt`); continue; }
  let pj;
  try {
    pj = JSON.parse(readFileSync(pjPath, "utf8"));
  } catch (e) { fail(`Plugin "${label}": plugin.json ist kein valides JSON: ${e.message}`); continue; }
  if (pj.name !== p.name) fail(`Plugin "${label}": name in plugin.json ("${pj.name}") != Marketplace-Eintrag ("${p.name}")`);
  if (pj.version) fail(`Plugin "${label}": version-Feld in plugin.json entfernen (Versionierung läuft über Git)`);
  if (!pj.description) warn(`Plugin "${label}": keine description in plugin.json`);
  if (!pj.author?.name) warn(`Plugin "${label}": kein author.name in plugin.json`);

  // Mindestens ein Skill mit Frontmatter
  const skillsDir = join(dir, "skills");
  let skillCount = 0;
  if (existsSync(skillsDir)) {
    for (const entry of readdirSync(skillsDir)) {
      const skillMd = join(skillsDir, entry, "SKILL.md");
      if (!existsSync(skillMd)) continue;
      skillCount++;
      const content = readFileSync(skillMd, "utf8");
      const fm = content.match(/^---\n([\s\S]*?)\n---/);
      if (!fm) fail(`Plugin "${label}": skills/${entry}/SKILL.md hat kein Frontmatter (--- Block am Anfang)`);
      else if (!/^description:\s*\S/m.test(fm[1])) fail(`Plugin "${label}": skills/${entry}/SKILL.md Frontmatter hat keine description`);
    }
  }
  const hasOtherComponents = ["agents", "commands", "hooks"].some((d) => existsSync(join(dir, d)));
  if (skillCount === 0 && !hasOtherComponents) fail(`Plugin "${label}": kein Skill gefunden (skills/<name>/SKILL.md) und keine anderen Komponenten`);

  // Heuristik gegen gefährliche Muster (kein Ersatz fürs Review)
  scanDir(dir, label);
}

// Jeder Ordner unter plugins/ muss registriert sein
const pluginsRoot = join(ROOT, "plugins");
if (existsSync(pluginsRoot)) {
  for (const entry of readdirSync(pluginsRoot)) {
    if (!statSync(join(pluginsRoot, entry)).isDirectory()) continue;
    const registered = (mp.plugins ?? []).some((p) => typeof p.source === "string" && resolve(join(ROOT, p.source)) === resolve(join(pluginsRoot, entry)));
    if (!registered) fail(`Ordner plugins/${entry} ist nicht in marketplace.json registriert`);
  }
}

function scanDir(dir, label) {
  const SUSPICIOUS = [
    [/curl[^\n]*\|\s*(ba)?sh/g, "curl|bash (externes Script ausführen)"],
    [/rm\s+-rf\s+[~/$]/g, "rm -rf auf Home/Root-Pfade"],
    [/base64\s+(-d|--decode)[^\n]*\|\s*(ba)?sh/g, "base64-dekodierter Code wird ausgeführt"],
    [/eval\s*\(\s*atob/g, "eval(atob(...)) Obfuskierung"],
  ];
  for (const entry of readdirSync(dir, { recursive: true })) {
    const f = join(dir, String(entry));
    if (!statSync(f).isFile()) continue;
    if (!/\.(md|json|sh|mjs|js|ts|py|yaml|yml)$/i.test(f)) continue;
    const content = readFileSync(f, "utf8");
    for (const [re, desc] of SUSPICIOUS) {
      if (re.test(content)) fail(`Plugin "${label}": verdächtiges Muster in ${String(entry)}: ${desc}`);
    }
  }
}

report();

function report() {
  for (const w of warnings) console.log(`⚠️  ${w}`);
  if (errors.length) {
    for (const e of errors) console.error(`❌ ${e}`);
    console.error(`\n${errors.length} Fehler. Siehe CONTRIBUTING.md für die Struktur-Vorgaben.`);
    process.exit(1);
  }
  console.log(`✅ Struktur valide (${(mp?.plugins ?? []).length} Plugins, ${warnings.length} Warnungen)`);
  process.exit(0);
}
