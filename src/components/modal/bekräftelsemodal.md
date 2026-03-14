---
layout: component
title: Bekräftelsemodal
short-title: Bekräftelsemodal
status: Produktionsklar
---

Bekräftelsemodalen används för att bekräfta destruktiva eller irreversibla åtgärder innan de utförs. Detta ger användaren en sista chans att avbryta åtgärden.

## När den ska användas

Använd bekräftelsemodal för:
- Ta bort objekt (filer, mappar, konton, etc.)
- Avbryta pågående processer
- Arkivera eller makulera innehåll
- Andra irreversibla åtgärder

## Grundläggande bekräftelsemodal

```html
<div class="fk-modal fk-modal--confirmation">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title" aria-describedby="confirm-desc">
        <div class="fk-modal__header">
            <h2 id="confirm-title" class="fk-modal__title">Ta bort objekt?</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p id="confirm-desc">Är du säker på att du vill ta bort "Projekt X"? Åtgärden kan inte ångras.</p>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Avbryt</button>
            <button class="fk-button fk-button--danger">Ta bort</button>
        </div>
    </div>
</div>
```

## Med detaljerad information

För mer komplexa bekräftelser kan du inkludera ytterligare information:

```html
<div class="fk-modal fk-modal--confirmation">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title-2">
        <div class="fk-modal__header">
            <h2 id="confirm-title-2" class="fk-modal__title">Avbryt export?</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p>Om du avbryter exporten kommer följande att hända:</p>
            <ul>
                <li>Alla framsteg kommer att förloras</li>
                <li>Temporära filer kommer att raderas</li>
                <li>Du måste starta om exporten från början</li>
            </ul>
            <p style="margin-top: 1rem;"><strong>Är du säker på att du vill avbryta?</strong></p>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Fortsätt exportera</button>
            <button class="fk-button fk-button--danger">Avbryt export</button>
        </div>
    </div>
</div>
```

## Bekräftelsemed input

För säkerhetskritiska åtgärder kan du kräva att användaren bekräftar genom att skriva:

```html
<div class="fk-modal fk-modal--confirmation">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title-3">
        <div class="fk-modal__header">
            <h2 id="confirm-title-3" class="fk-modal__title">Ta bort konto?</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p>Detta kommer att permanent ta bort ditt konto och all data.</p>
            <p style="margin-top: 1rem;">Skriv <strong>TABORT</strong> för att bekräfta:</p>
            <input type="text" class="fk-input" placeholder="TABORT" style="width: 100%; margin-top: 0.5rem;">
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Avbryt</button>
            <button class="fk-button fk-button--danger" disabled>Ta bort konto</button>
        </div>
    </div>
</div>
```

## CSS-klasser

| Klass | Beskrivning |
|-------|-------------|
| `fk-modal--confirmation` | Bekräftelsemodal-variant |
| `fk-confirmation-modal` | Alternativ klass för bekräftelsemodal |

## Tillgänglighet

- Använd `role="alertdialog"` för bekräftelsemodaler
- Använd `aria-describedby` för att koppla beskrivningstext till dialogen
- Fokusera den primära åtgärdsknappen för att minska risken för oavsiktlig bekräftelse
- Använd `fk-button--danger` för den destruktiva åtgärden

## Bästa praxis

1. **Var tydlig med konsekvenserna** - Förklara vad som kommer att hända
2. **Använd tydlig knappetikettering** - "Ta bort" är bättre än "OK"
3. **Placera den farliga åtgärden till höger** - Sekundärknapp (avbryt) först, farlig knapp sist
4. **Överväg extra bekräftelse** - För kritiska åtgärder, kräv textinmatning
