---
layout: component
title: Varningsmodal
short-title: Varningsmodal
status: Produktionsklar
---

Varningsmodalen används för att varna användaren om potentiella risker eller konsekvenser av en åtgärd. Den används när en åtgärd kan ha negativa konsekvenser, men inte är oåterkallelig.

## När den ska användas

Använd varningsmodal för:
- Varna för potentiell dataförlust
- Varna för begränsade resurser
- Varna för olämpliga åtgärder
- Varna för potentiella säkerhetsrisker

## Grundläggande varningsmodal

```html
<div class="fk-modal fk-modal--warning">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="warning-title" aria-describedby="warning-desc">
        <div class="fk-modal__header">
            <h2 id="warning-title" class="fk-modal__title">Lågt diskutrymme</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p id="warning-desc">Ditt lagringsutrymme är nästan fullt. Överväg att ta bort onödiga filer eller uppgradera ditt lagringsutrymme för att undvika problem med att spara nya filer.</p>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Ignorera</button>
            <button class="fk-button fk-button--primary">Hantera lagring</button>
        </div>
    </div>
</div>
```

## Varning för irreversibel åtgärd (ej destruktiv)

```html
<div class="fk-modal fk-modal--warning">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="warning-title-2">
        <div class="fk-modal__header">
            <h2 id="warning-title-2" class="fk-modal__title">Lämna sida?</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p>Du har osparade ändringar. Om du lämnar sidan kommer dina ändringar att gå förlorade.</p>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Stanna på sidan</button>
            <button class="fk-button fk-button--primary">Lämna ändå</button>
        </div>
    </div>
</div>
```

## Varning med detaljerad information

```html
<div class="fk-modal fk-modal--warning">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="warning-title-3">
        <div class="fk-modal__header">
            <h2 id="warning-title-3" class="fk-modal__title">Ändra behörighet?</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <div style="display: flex; gap: 1rem;">
                <svg style="flex-shrink: 0; width: 24px; height: 24px; color: #d97706;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <div>
                    <p style="margin: 0;">Genom att ändra behörigheten för denna användare kommer de att förlora åtkomst till följande resurser:</p>
                    <ul style="margin: 0.5rem 0 0 1.5rem;">
                        <li>Alla delade mappar</li>
                        <li>Projekt A, B och C</li>
                        <li>Gemensamma kalendrar</li>
                    </ul>
                    <p style="margin: 0.5rem 0 0;">Är du säker på att du vill fortsätta?</p>
                </div>
            </div>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Avbryt</button>
            <button class="fk-button fk-button--primary">Ändra behörighet</button>
        </div>
    </div>
</div>
```

## CSS-klasser

| Klass | Beskrivning |
|-------|-------------|
| `fk-modal--warning` | Varningsmodal-variant |
| `fk-warning-modal` | Alternativ klass för varningsmodal |

## Tillgänglighet

- Använd `role="alertdialog"` för varningsmodaler
- Använd `aria-describedby` för att koppla beskrivningstext till dialogen
- Var tydlig med varningens konsekvenser
- Använd lämpliga färger (vanligtvis gult/orange) för att indikera varning

## Bästa praxis

1. **Var specifik** - Förklara exakt vad varningen gäller
2. **Erbjud alternativ** - Ge användaren möjlighet att avbryta eller åtgärda problemet
3. **Använd inte för ofta** - Överanvändning minskar varningars effektivitet
4. **Skillnad från felmodal** - Varning gäller potentiella problem, fel gäller redan inträffade problem
