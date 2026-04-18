# maxidenn

![Screenshot](public/screenshot.jpeg)

Landing Page für **maxidenn** – Webdesign für lokale Betriebe. Gebaut mit Astro und Tailwind CSS.

## Tech Stack

- **Astro 6** – Static Site Generation
- **Tailwind CSS 4** – CSS-first Konfiguration
- **@fontsource-variable/geist** – Schrift lokal eingebunden (kein Google Fonts CDN)
- **astro-icon** – Heroicons & Simple Icons

## Seitenstruktur

**Hauptseite (`/`)**
Navigation → Hero → TrustBar → Probleme → Leistungen → So läuft es ab → Referenzen → Pakete → FAQ → Kontakt → Footer

**Rechtliche Seiten**
- `/impressum` – Pflichtangaben gem. § 5 DDG
- `/datenschutz` – Datenschutzerklärung gem. DSGVO Art. 13

## Lokale Entwicklung

```bash
npm install
npm run dev
npm run build
```

## Konfiguration

Alle Inhalte zentral in:

- `src/config.ts` – Texte, Kontaktdaten, Navigation, Footer
- `src/content/*.ts` – Features, Testimonials, FAQ, How-It-Works
- `src/styles/globals.css` – Farben, Fonts, Animationen

### Platzhalter ersetzen

In `src/config.ts` alle Einträge mit `// TODO` befüllen:

- Telefonnummer & WhatsApp-Link
- E-Mail-Adresse
- Google Business Profile URL
- Instagram / LinkedIn URLs

In `src/pages/impressum.astro` und `src/pages/datenschutz.astro`:

- Name, Adresse, USt-IdNr.
- Hosting-Anbieter
- Zuständige Datenschutz-Aufsichtsbehörde (nach Bundesland)

## Deploy

Kompatibel mit Vercel, Netlify und GitHub Pages.
