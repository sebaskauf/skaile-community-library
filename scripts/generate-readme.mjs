#!/usr/bin/env node
/**
 * Generiert die Skill-Übersichtstabelle im README zwischen den
 * PLUGINS:START / PLUGINS:END Markern aus marketplace.json.
 * Läuft automatisch via GitHub Action bei jedem Push auf main.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(process.argv[2] ?? ".");
const mp = JSON.parse(readFileSync(join(ROOT, ".claude-plugin", "marketplace.json"), "utf8"));

const rows = (mp.plugins ?? [])
  .slice()
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((p) => {
    const author = p.author?.name ?? "—";
    const desc = (p.description ?? "—").replace(/\|/g, "\\|");
    const install = `\`/plugin install ${p.name}@${mp.name}\``;
    return `| [\`${p.name}\`](${p.source}) | ${desc} | ${author} | ${install} |`;
  });

const table = [
  "| Skill | Beschreibung | Autor | Installieren |",
  "| :---- | :----------- | :---- | :----------- |",
  ...rows,
].join("\n");

const readmePath = join(ROOT, "README.md");
const readme = readFileSync(readmePath, "utf8");
const START = "<!-- PLUGINS:START — wird automatisch generiert, nicht von Hand bearbeiten -->";
const END = "<!-- PLUGINS:END -->";
const startIdx = readme.indexOf(START);
const endIdx = readme.indexOf(END);
if (startIdx === -1 || endIdx === -1) {
  console.error("❌ PLUGINS:START/END Marker im README nicht gefunden");
  process.exit(1);
}
const updated = readme.slice(0, startIdx + START.length) + "\n" + table + "\n" + readme.slice(endIdx);
if (updated !== readme) {
  writeFileSync(readmePath, updated);
  console.log(`✅ README aktualisiert (${rows.length} Skills)`);
} else {
  console.log("✅ README bereits aktuell");
}
