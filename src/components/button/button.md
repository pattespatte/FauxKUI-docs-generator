---
layout: component
title: Button
short-title: Button
status: Produktionsklar
---

Knappkomponenten används för att utlösa åtgärder eller navigera till andra sidor. Den stöder flera varianter, storlekar och tillstånd.

## Grundläggande användning

### Primär knapp

Den primära knappen används för huvudåtgärden i en vy.

```html
<button class="fk-button fk-button--primary">
    Spara ändringar
</button>
```

### Sekundär knapp

Använd sekundära knappar för alternativa åtgärder.

```html
<button class="fk-button fk-button--secondary">
    Avbryt
</button>
```

### Outline-knapp

Outline-knappar används för mindre framträdande åtgärder.

```html
<button class="fk-button fk-button--outline">
    Läs mer
</button>
```

### Fara-knapp

Fara-knappar används för destruktiva åtgärder.

```html
<button class="fk-button fk-button--danger">
    Ta bort
</button>
```

## Storlekar

Knappar finns i tre storlekar: liten (standard), medium och stor.

```html
<button class="fk-button fk-button--primary fk-button--sm">
    Liten knapp
</button>

<button class="fk-button fk-button--primary">
    Standardknapp
</button>

<button class="fk-button fk-button--primary fk-button--lg">
    Stor knapp
</button>
```

## Tillstånd

### Inaktiverat tillstånd

```html
<button class="fk-button fk-button--primary" disabled>
    Inaktiverad primär
</button>

<button class="fk-button fk-button--secondary" disabled>
    Inaktiverad sekundär
</button>
```

## Block-knapp

För mobil-först-layouter, använd block-modifieraren för fullbreddsknappar.

```html
<button class="fk-button fk-button--primary fk-button--block">
    Knapp i fullbredd
</button>
```

## Med ikoner

Knappar kan inkludera ikoner bredvid text.

```html
<button class="fk-button fk-button--primary">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
    Fortsätt
</button>

<button class="fk-button fk-button--secondary">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    Gå tillbaka
</button>
```

## Komponent-API

### CSS-klasser

| Klass | Beskrivning |
|-------|-------------|
| `fk-button` | Bas-klass för knapp (obligatorisk) |
| `fk-button--primary` | Primär variant (blå bakgrund) |
| `fk-button--secondary` | Sekundär variant (grå bakgrund) |
| `fk-button--outline` | Outline-variant (transparent med kant) |
| `fk-button--danger` | Fara-variant (röd bakgrund) |
| `fk-button--sm` | Liten storlek |
| `fk-button--lg` | Stor storlek |
| `fk-button--block` | Full bredd (för mobil) |

### Tillgänglighet

- Knappar inkluderar automatiskt focus-visible-stilar för tangentbordsnavigering
- Ange alltid meningsfullt textinnehåll för skärmläsare
- Använd `<button>`-element för åtgärder och `<a>`-element formaterade som knappar för navigering
- Inaktiverade knappar har attributet `disabled` och reducerad opacitet

## Bästa praxis

1. **Använd primära knappar sparsamt** - Endast en primär knapp per vy
2. **Ange tydliga etiketter** - Knapptexten bör tydligt indikera åtgärden
3. **Överväg tryckytor** - Minsta tryckyta är 44x44px
4. **Undvik generiska etiketter** - Använd specifika etiketter som "Spara ändringar" istället för "OK"
