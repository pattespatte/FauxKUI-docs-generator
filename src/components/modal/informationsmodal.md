---
layout: component
title: Informationsmodal
short-title: Informationsmodal
status: Produktionsklar
---

Informationsmodalen används för att visa viktig information till användaren. Den används när informationen är viktig nog att kräva särskild uppmärksamhet, men inte kräver omedelbar åtgärd.

## När den ska användas

Använd informationsmodal för:
- Visa viktig information om systemändringar
- Meddela om nya funktioner
- Visa detaljerad information om ett objekt
- Visa policyinformation eller villkor

## Grundläggande informationsmodal

```html
<div class="fk-modal fk-modal--information">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="info-title">
        <div class="fk-modal__header">
            <h2 id="info-title" class="fk-modal__title">Ny funktion tillgänglig</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p>Vi har lanserat en ny funktion som gör det möjligt att exportera dina rapporter som PDF. Du hittar den nya exportknappen i rapportsidan.</p>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--primary">Jag förstår</button>
        </div>
    </div>
</div>
```

## Med ikon och detaljerad information

```html
<div class="fk-modal fk-modal--information">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="info-title-2">
        <div class="fk-modal__header">
            <h2 id="info-title-2" class="fk-modal__title">Om underhåll</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                <svg style="flex-shrink: 0; width: 24px; height: 24px; color: #00585d;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                <div>
                    <p style="margin: 0;">Systemet kommer att underhållas den <strong>15 mars mellan 02:00 och 04:00</strong>.</p>
                    <p style="margin: 0.5rem 0 0;">Under underhållet kommer tjänsten att vara otillgänglig. Vi ber om ursäkt för eventuella besvär.</p>
                </div>
            </div>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--primary">Stäng</button>
        </div>
    </div>
</div>
```

## Informationsmodal med flera åtgärder

```html
<div class="fk-modal fk-modal--information">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="info-title-3">
        <div class="fk-modal__header">
            <h2 id="info-title-3" class="fk-modal__title">Uppdatera tillgänglig</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p>En ny version av applikationen är tillgänglig. Vi rekommenderar att du uppdaterar för att få de senaste funktionerna och säkerhetsfixarna.</p>
            <ul style="margin-top: 1rem;">
                <li>Buggfixar och prestandaförbättringar</li>
                <li>Ny mörkt tema</li>
                <li>Förbättrad tillgänglighet</li>
            </ul>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Påminn mig senare</button>
            <button class="fk-button fk-button--primary">Uppdatera nu</button>
        </div>
    </div>
</div>
```

## CSS-klasser

| Klass | Beskrivning |
|-------|-------------|
| `fk-modal--information` | Informationsmodal-variant |
| `fk-information-modal` | Alternativ klass för informationsmodal |

## Tillgänglighet

- Använd `role="dialog"` för informationsmodaler
- Använd tydliga rubriker som beskriver informationen
- För enkla meddelanden kan en ensam knapp ("Jag förstår" eller "Stäng") vara tillräckligt
- För modaler med åtgärder, se till att knappen har en tydlig etikett

## Bästa praxis

1. **Var concis** - Håll texten kort och fokuserad
2. **Använd tydlig rubrik** - Användaren ska direkt förstå modalens syfte
3. **Undvik onödiga modaler** - Överväg om informationen kan visas på annat sätt
4. **Tillåt avvisande** - Användaren ska alltid kunna stänga modalen
