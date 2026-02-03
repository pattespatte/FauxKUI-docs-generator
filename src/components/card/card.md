---
layout: default
title: Card
short-title: Card
status: Produktionsklar
---

Kortkomponenten är en behållare för att gruppera relaterat innehåll och åtgärder. Kort kan innehålla sidhuvuden, brödtext, bilder och sidfötter med åtgärder.

## Grundläggande kort

Ett enkelt kort med sidhuvud, brödtext och sidfotssektioner.

```html
<div class="fk-card">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Kortrubrik</h2>
        <p class="fk-card__subtitle">Valfri underrubriktext</p>
    </div>
    <div class="fk-card__body">
        <p>Det här är kortets brödtext. Du kan lägga valfritt innehåll här inklusive text, listor eller andra komponenter.</p>
    </div>
    <div class="fk-card__footer">
        <button class="fk-button fk-button--secondary">Avbryt</button>
        <button class="fk-button fk-button--primary">Spara</button>
    </div>
</div>
```

## Minimalt kort

Ett kort med endast brödtext.

```html
<div class="fk-card">
    <div class="fk-card__body">
        <h3>Enkelt kort</h3>
        <p>Det här kortet har endast en brödtextsektion utan sidhuvud eller sidfot.</p>
    </div>
</div>
```

## Kort med bild

Ett kort som inkluderar en bild högst upp.

```html
<div class="fk-card fk-card--image-top">
    <img class="fk-card__image" src="https://picsum.photos/600/300" alt="Kortbild">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Naturkort</h2>
    </div>
    <div class="fk-card__body">
        <p>Det här kortet inkluderar en bild högst upp. Bilder är automatiskt responsiva.</p>
    </div>
    <div class="fk-card__footer">
        <button class="fk-button fk-button--primary">Visa detaljer</button>
    </div>
</div>
```

## Kortvarianter

### Förhöjt kort

Använd den förhöjda modifieraren för ett mer framträdande kort med djupare skugga.

```html
<div class="fk-card fk-card--elevated">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Förhöjt kort</h2>
    </div>
    <div class="fk-card__body">
        <p>Det här kortet har ett förhöjt utseende med förstärkt skugga.</p>
    </div>
</div>
```

### Platt kort

Använd den platta modifieraren för ett kort utan kant eller skugga.

```html
<div class="fk-card fk-card--flat">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Platt kort</h2>
    </div>
    <div class="fk-card__body">
        <p>Det här kortet har ingen kant eller skugga för ett minimalt utseende.</p>
    </div>
</div>
```

### Klickbart kort

Använd den klickbara modifieraren för kort som är interaktiva.

```html
<div class="fk-card fk-card--clickable">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Klickbart kort</h2>
    </div>
    <div class="fk-card__body">
        <p>Det här kortet har svämningseffekter och pekmarkör för att indikera interaktivitet.</p>
    </div>
</div>
```

## Storleksvarianter

Kort finns i tre storlekar: liten, standard och stor.

```html
<div class="fk-card fk-card--sm">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Litet kort</h2>
    </div>
    <div class="fk-card__body">
        <p>Det här kortet har reducerad utfyllnad.</p>
    </div>
</div>

<div class="fk-card">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Standardkort</h2>
    </div>
    <div class="fk-card__body">
        <p>Det här kortet har standardutfyllnad.</p>
    </div>
</div>

<div class="fk-card fk-card--lg">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Stort kort</h2>
    </div>
    <div class="fk-card__body">
        <p>Det här kortet har ökad utfyllnad.</p>
    </div>
</div>
```

## Innehållsexempel

### Textinnehåll

```html
<div class="fk-card">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Artikelförhandsgranskning</h2>
    </div>
    <div class="fk-card__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul>
            <li>Första listobjektet</li>
            <li>Andra listobjektet</li>
            <li>Tredje listobjektet</li>
        </ul>
    </div>
</div>
```

### Profilkort

```html
<div class="fk-card">
    <div class="fk-card__body" style="text-align: center;">
        <svg style="width: 80px; height: 80px; margin: 0 auto 1rem; background: #e0e4e4; border-radius: 50%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <h2 class="fk-card__title">Anna Andersson</h2>
        <p class="fk-card__subtitle">Produktdesigner</p>
        <p style="margin-top: 1rem; color: #6b7280;">Skapar vackra användarupplevelser sedan 2018.</p>
    </div>
    <div class="fk-card__footer" style="justify-content: center;">
        <button class="fk-button fk-button--primary">Följ</button>
        <button class="fk-button fk-button--outline">Meddela</button>
    </div>
</div>
```

## Komponent-API

### CSS-klasser

| Klass | Beskrivning |
|-------|-------------|
| `fk-card` | Bas-klass för kort (obligatorisk) |
| `fk-card__header` | Behållare för kortets sidhuvud |
| `fk-card__title` | Kortets rubrik (vanligtvis `<h2>`) |
| `fk-card__subtitle` | Kortets underrubrik |
| `fk-card__body` | Kortets brödtext |
| `fk-card__footer` | Kortets sidfot för åtgärder |
| `fk-card__image` | Kortets bildelement |
| `fk-card--elevated` | Variant med förstärkt skugga |
| `fk-card--flat` | Variant utan kant/skugga |
| `fk-card--clickable` | Interaktiv variant med svämningseffekter |
| `fk-card--sm` | Liten storlek |
| `fk-card--lg` | Stor storlek |
| `fk-card--image-top` | Placera bild högst upp |
| `fk-card--image-bottom` | Placera bild längst ner |

### Tillgänglighet

- Säkerställ rätt rubrikhierarki inom kort
- Använd semantiska HTML-element (`<h2>` för kortrubriker, `<button>` för åtgärder)
- Ange meningsfull alt-text för kortbilder
- Upprätthåll tillräckligt färgkontrast för text
- För klickbara kort, säkerställ att tangentbordsanvändare kan aktivera kortet (lägg till `tabindex="0"` och tangentbordshanterare)

## Bästa praxis

1. **Använd kort för att gruppera relaterat innehåll** - Kort fungerar bra för att organisera information i logiska grupper
2. **Håll kortinnehåll fokuserat** - Varje kort ska ha ett ensamt, tydligt syfte
3. **Använd konsekvent storlek** - Upprätthåll enhetlig kortstorlek inom ett rutnätslayout
4. **Ange tydliga åtgärder** - Placera primära åtgärder i kortets sidfot
5. **Överväg responsiva layouter** - Kort kan staplas på mobil och bilda rutor på större skärmar
