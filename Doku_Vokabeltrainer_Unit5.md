# Vokabeltrainer – Doku: Unit 5 ergänzt

**Datum:** 14. Juni 2026
**Projekt:** Vokabel-Lern-PWA für Luis (Französisch + Englisch)
**Repo:** https://github.com/UliBer1508/Vokabeltrainer
**Live-URL:** https://uliber1508.github.io/Vokabeltrainer/

---

## Was gemacht wurde

Aus 12 Fotos der Wortliste **"Gateway to the World B2+", Unit 5 (Crime & law)**
wurden alle Vokabeln erfasst und in die App eingespielt.

- **93 neue Vokabeln** erfasst und übersetzt (Englisch → Deutsch)
- Aufgeteilt in **2 neue Lektionen**, damit keine überlange Liste entsteht:
  - *Unit 5 — Crime & law (A)*: 30 Wörter (sustainable … designated)
  - *Unit 5 — Crime & law (B)*: 63 Wörter (deter … vulnerability)
- Gesamtbestand der App jetzt: **165 Vokabeln** in 8 Lektionen

---

## Technische Umsetzung

- Alle Vokabeln liegen in der Datei **`data.js`** im Repo.
- Es handelt sich um eine einzige strukturierte Liste (`SEED_BOOKS`).
- Die neue `data.js` enthält die **komplette** Liste (alte 72 + neue 93),
  nicht nur die Ergänzungen.
- Datei wurde syntaktisch geprüft (gültiges JavaScript, korrekte Wortzahlen).

---

## Upload-Weg (manuell durchgeführt)

Der GitHub-Connector hatte nur Lesezugriff, daher wurde die Datei manuell ersetzt:

1. Datei `data.js` im Repo geöffnet
2. Alten Inhalt durch die neue (vollständige) Version ersetzt
3. "Commit changes" → GitHub Pages baut automatisch neu

**Wichtig:** "Ersetzen" ≠ "Löschen" – die alten Vokabeln waren in der neuen
Datei bereits enthalten, nur erweitert.

---

## Hinweise / Troubleshooting

- Nach dem Upload baut GitHub Pages 1–2 Minuten.
- Falls neue Lektionen auf dem Handy nicht erscheinen → **Cache**:
  App komplett schließen und neu öffnen, notfalls Strg+F5 (PC) oder
  App neu installieren.
- Weitere Vokabeln können jederzeit über die "＋ Hinzufügen"-Funktion in der
  App ergänzt werden, oder durch erneutes Bearbeiten von `data.js`.

---

## Offene Punkte / Ideen für später

- GitHub-Connector wieder auf Schreibzugriff stellen, dann können
  Updates direkt aus Claude committet werden (ohne manuellen Upload).
- Restliche Units (4, 6 …) bei Bedarf ergänzen.
