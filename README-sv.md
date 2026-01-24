# FauxKUI: Ett designsystem med dokumentationsgenerator

## Vad är FauxKUI?

**FauxKUI** (uttalas "fox-koo-eye") är ett **designsystem** - tänk på det som ett LEGO-set för att bygga webbplatser, men istället för plastbitar använder du färdiga delar som kallas **komponenter**.

Det är inspirerat av **FKUI** (Försäkringskassans designsystem) - designsystemet som används av Försäkringskassan.

## Övergripande: Vad det här projektet gör

```
┌─────────────────────────────────────────────────────────────────┐
│                     DU SKRIVER                                  │
│  Markdown-filer (.md) + SCSS-stilar (.scss)                     │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│              docs-generator gör sin magi                        │
│   (läser dina filer → genererar HTML-dokumentationssidor)       │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│              UTDATA: Vacker dokumentationswebbplats             │
│         Visar alla dina komponenter med live-exempel!           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Del 1: Förstå Designsystem

### Vad är ett Designsystem?

Föreställ dig att du bygger ett hus. Du kunna:

- Göra varje dörr, fönster och handtag från grunden ELLER
- Använda färdiga delar som alla matchar och fungerar tillsammans

Ett **designsystem** är som att använda färdiga delar för webbplatser. Det inkluderar:

- **Komponenter**: Färdiga UI-delar (knappar, kort, formulär)
- **Stilar**: Färger, typsnitt, avståndsregler
- **Dokumentation**: Instruktioner för hur man använder allt

### Varför använda ett designsystem?

| Utan designsystem | Med designsystem |
|-------------------|------------------|
| Varje knapp ser olika ut | Alla knappar matchar perfekt |
| Färger är slumpmässiga | Färger följer en palett |
| Svårt att underhålla | Lätt att uppdatera allt på en gång |
| Inkonsekvent användarupplevelse | Professionellt, sammanhängande utseende |

---

## Del 2: FauxKUI-komponenterna

FauxKUI har för närvarande två huvudkomponenter:

### 1. Button-komponent

Knappen används för att få saker att hända när användare klickar på dem.

**Button-varianter** (olika utseenden):

- **Primary**: Huvudaktionsknappen (blå) - "Spara", "Skicka"
- **Secondary**: Mindre viktiga åtgärder (grå) - "Avbryt", "Gå tillbaka"
- **Outline**: Genomskinlig med kant - "Läs mer"
- **Danger**: För destruktiva åtgärder (röd) - "Ta bort", "Radera"

**Button-storlekar**:

- Small (sm) - för trånga utrymmen
- Default - normal storlek
- Large (lg) - för betoning

**Exempel**:

```html
<button class="fk-button fk-button--primary">
    Save Changes
</button>
```

### 2. Card-komponent

Ett kort är som en behållare - den grupperar relaterat innehåll tillsammans.

**Card-delar**:

- **Header**: Titel och valfri undertitel
- **Body**: Huvudinnehållet (text, bilder, listor)
- **Footer**: Åtgärdsknappar längst ner
- **Image**: Valfri bild överst eller nederst

**Card-varianter**:

- **Elevated**: Har en skugga, ser ut som att den svävar
- **Flat**: Ingen kant eller skugga
- **Clickable**: Hover-effekter för interaktiva kort

**Exempel**:

```html
<div class="fk-card">
    <div class="fk-card__header">
        <h2 class="fk-card__title">My Card</h2>
    </div>
    <div class="fk-card__body">
        <p>This is the content inside the card.</p>
    </div>
    <div class="fk-card__footer">
        <button class="fk-button fk-button--primary">Action</button>
    </div>
</div>
```

---

## Del 3: Förstå Dokumentgeneratorn

### Vad är en Dokumentgenerator?

En **dokumentgenerator** är som en robot som läser dina filer och automatiskt skapar en fin webbplats som visar hur man använder dina komponenter.

**Utan dokumentgenerator**: Du skriver manuellt HTML för varje exempelsida
**Med dokumentgenerator**: Skriv en gång i Markdown, den genererar allt automatiskt!

### Hur @forsakringskassan/docs-generator fungerar

```
┌───────────────────────────────────────────────────────────────────┐
│                      INPUTFILER                                   │
├───────────────────────────────────────────────────────────────────┤
│  src/components/button/button.md    ← Dokumentation i Markdown    │
│  src/components/button/button.scss  ← Stilar i SCSS               │
│  src/components/card/card.md        ← Dokumentation i Markdown    │
│  src/components/card/card.scss      ← Stilar i SCSS               │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│                    generate-docs.ts                               │
│  (Skriptet som kör dokumentgeneratorn)                            │
│                                                                   │
│  1. Skapar en Generator-instans                                   │
│  2. Berättar var den hittar filer (.md i src/components)          │
│  3. Kompilerar stilar (SCSS → CSS)                                │
│  4. Bygger dokumentationswebbplatsen                              │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│                      UTDATA                                       │
├───────────────────────────────────────────────────────────────────┤
│  docs/build/                                                      │
│  ├── button/index.html    ← Genererad dokumentationssida          │
│  ├── card/index.html      ← Genererad dokumentationssida          │
│  └── assets/               ← CSS- och JS-filer                    │
└───────────────────────────────────────────────────────────────────┘
```

### De viktiga filerna förklarade

#### `generate-docs.ts` - Huvudskriptet

```typescript
// Här börjar allt!

// 1. Skapa generatorn
const docs = new Generator(import.meta.url, {
    site: {
        name: "FauxKUI Design System",  // Din webbplats namn
        lang: "en",
    },
    outputFolder: "docs/build",  // Var genererade filer ska placeras
    templateFolders: ["./templates"],  // Var dina HTML-mallar finns
});

// 2. Kompilera stilarna
docs.compileStyle("docs", "./docs/src/style.scss", {
    appendTo: "head",  // Lägg CSS i <head> i HTML
});

// 3. Definiera vilka filer som ska läsas
const sources = defineSources([
    {
        include: ["src/components/**/*.md"],  // Alla .md-filer i components
        basePath: "./",
        fileReader: frontMatterFileReader,  // Läser Markdown med front matter
    },
]);

// 4. Bygg!
docs.build(sources);
```

#### Komponent-markdown-filer (som `button.md`)

**Front matter** överst (mellan `---`) är speciell metadata:

```yaml
---
layout: default     # Vilken HTML-mall som ska användas
title: Button       # Sidtitel
short-title: Button # Kort titel för navigering
status: Produktionsklar  # Komponentstatusbadge
---
```

Efter front matter skriver du vanlig Markdown:

- `#` för rubriker
- ` ```html ` för kodeexempel
- Tabeller för API-dokumentation

#### HTML-mallen (`default.template.html`)

Detta är skelettet för varje dokumentationssida. Den använder **Nunjucks**-templating:

```html
<h1>{{ doc.attributes.title }}</h1>  <!-- Hämtar titeln från front matter -->
{{ doc.body | marked }}               <!-- Konverterar Markdown till HTML -->
```

---

## Del 4: Filstruktur (kartan)

```
FauxKUI/
├── generate-docs.ts        # Huvudskriptet som bygger dokumentationen
├── server.js               # Utvecklingsserver för förhandsgranskning
├── package.json            # Projektinformation och beroenden
├── tsconfig.json           # TypeScript-konfiguration
│
├── src/                    # Källfiler (dina komponenter)
│   └── components/
│       ├── button/
│       │   ├── button.md   # Dokumentation
│       │   └── button.scss # Stilar
│       └── card/
│           ├── card.md     # Dokumentation
│           └── card.scss   # Stilar
│
├── docs/                   # Dokumentationsfiler
│   ├── src/
│   │   ├── docs-theme.scss # Anpassad CSS-överskridningar
│   │   ├── fkui-theme.scss # FKUI-tema för kodförhandsgranskningar
│   │   ├── style.scss      # Huvudsaklig SCSS-ingångspunkt
│   │   └── setup.ts        # Vue 3-setup för live-exempel
│   ├── gettingstarted.md   # Kom igång-sida
│   ├── components.md       # Komponentöversikt
│   ├── guides.md           # Guider-sida
│   ├── functions.md        # Funktioner-sida
│   ├── styles.md           # Visuella stilar-sida
│   └── build/              # Genererad webbplats (REDIGERA INTE manuellt!)
│       ├── index.html
│       ├── gettingstarted.html
│       └── src/components/
│           ├── button/index.html
│           └── card/index.html
│
└── templates/              # HTML-mallar för sidor
    ├── default.template.html
    └── pattern.template.html
```

---

## Del 5: Huvuddokumentationssidor

Dokumentationswebbplatsen inkluderar flera huvudsidor i mappen `docs/`:

| Sida | Fil | Beskrivning |
|------|-----|-------------|
| Hem | `index.md` | Landningssida med översikt |
| Kom igång | `gettingstarted.md` | Installation och snabbstart |
| Komponenter | `components.md` | Översikt av alla komponenter |
| Guider | `guides.md` | How-to-guider |
| Funktioner | `functions.md` | Referens för verktygsfunktioner |
| Stilar | `styles.md` | Riktlinjer för visuell design |

Varje sida använder front matter för metadata (titel, layout, status) och innehåller vanligt Markdown-innehåll.

---

## Del 6: Hur man använder det här projektet

### Bygga dokumentationen

```bash
npm run docs:build
```

Detta kör `generate-docs.ts` som:

1. Läser alla `.md`-filer i `src/components/`
2. Kompilerar SCSS till CSS
3. Genererar HTML-filer i `docs/build/`

### Förhandsgranska dokumentationen

```bash
npm run docs:serve
```

Detta:

1. Bygger dokumentationen
2. Startar en lokal webbserver
3. Bevakar filändringar (återbygger automatiskt när du redigerar)
4. Öppnar webbplatsen i din webbläsare

---

## Del 7: Lägg till en ny komponent

Vill du lägga till något nytt? Så här gör du:

1. **Skapa en ny mapp** i `src/components/` (t.ex. `alert/`)

2. **Skapa `alert.md`** med front matter:

   ```yaml
   ---
   layout: default
   title: Alert
   short-title: Alert
   status: Produktionsklar
   ---

   Alert-komponenten visar viktiga meddelanden...

   ```html
   <div class="fk-alert">Hello!</div>
   ```

   ```

   > **Obs**: Lägg inte till en H1-rubrik (`# Alert`) i ditt Markdown-innehåll. Sidtiteln renderas redan av mallen från `title`-fältet i front matter.

3. **Skapa `alert.scss`** med stilar:

   ```scss
   .fk-alert {
       padding: 1rem;
       border: 1px solid #ccc;
       border-radius: 0.25rem;
   }
   ```

4. **Bygg om**: `npm run docs:build`

5. **Klar!** Din nya komponentsida genereras automatiskt

---

## Del 8: Sammanfattning av viktiga koncept

### Markdown (.md-filer)

Ett enkelt sätt att skriva text som konverteras till HTML. Använder `#` för rubriker, `*` för listor, etc.

### SCSS (.scss-filer)

En avancerad version av CSS med funktioner som nästling och variabler.

### Front matter

Metadata överst i Markdown-filer (mellan `---`-rader) som berättar för generatorn om sidan.

### Mallar (.template.html)

HTML-skelett med platshållare som fylls i med ditt innehåll.

### Byggprocess

Att konvertera källfiler (Markdown, SCSS) till slutliga filer (HTML, CSS) som webbläsare kan läsa.

### Live reload

Automatiskt uppdatera webbläsaren när du sparar en fil - superpraktiskt för utveckling!

---

## Sammanfattning: Hela systemet i en mening

**FauxKUI är en samling av återanvändbara webbplatskomponenter (knappar, kort) skrivna i SCSS och dokumenterade i Markdown, som dokumentgeneratorn automatiskt förvandlar till en vacker dokumentationswebbplats som visar exempel och användningsinstruktioner.**

---

## Snabbreferens: NPM-kommandon

| Kommando | Vad det gör |
|----------|-------------|
| `npm run docs:build` | Generera dokumentationswebbplatsen |
| `npm run docs:serve` | Bygg och starta en live-preview-server |

---

## Behöver du lära dig mer?

- **Markdown**: Sök "Markdown tutorial" - det är superenkelt!
- **SCSS**: Sök "SCSS guide" - det är som CSS men bättre
- **Nunjucks**: Det templating-språk som används i HTML-mallar

---

Hoppas att du kan använda FauxKUI till något bra!
