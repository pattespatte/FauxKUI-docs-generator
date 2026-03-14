---
layout: component
title: Felmodal
short-title: Felmodal
status: Produktionsklar
---

Felmodalen används för att visa felmeddelanden när ett fel har inträffat. Den används när ett fel kräver användarens uppmärksamhet och inte kan visas på annat sätt.

## När den ska användas

Använd felmodal för:
- Visa kritiska fel som hindrar användaren från att fortsätta
- Visa fel som kräver användarens åtgärd
- Visa timeout- eller nätverksfel
- Visa valideringsfel för komplexa formulär

## Grundläggande felmodal

```html
<div class="fk-modal fk-modal--error">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="error-title" aria-describedby="error-desc">
        <div class="fk-modal__header">
            <h2 id="error-title" class="fk-modal__title">Ett fel uppstod</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p id="error-desc">Kunde inte spara dina ändringar. Kontrollera din internetuppkoppling och försök igen.</p>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Avbryt</button>
            <button class="fk-button fk-button--primary">Försök igen</button>
        </div>
    </div>
</div>
```

## Felmodal med teknisk information

```html
<div class="fk-modal fk-modal--error">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="error-title-2">
        <div class="fk-modal__header">
            <h2 id="error-title-2" class="fk-modal__title">Kunde inte ladda dokument</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p>Dokumentet kunde inte laddas. Det kan bero på att dokumentet har flyttats, tagits bort eller så saknar du behörighet.</p>
            <details style="margin-top: 1rem;">
                <summary style="cursor: pointer; color: #00585d; font-weight: 500;">Visa teknisk information</summary>
                <div style="margin-top: 0.5rem; padding: 0.75rem; background: #f9fafb; border-radius: 0.25rem; font-family: monospace; font-size: 0.875rem;">
                    Error: DocumentNotFoundException<br>
                    Code: DOC_NOT_FOUND<br>
                    Timestamp: 2025-01-15T10:30:45Z
                </div>
            </details>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Stäng</button>
            <button class="fk-button fk-button--primary">Försök igen</button>
        </div>
    </div>
</div>
```

## Nätverksfel

```html
<div class="fk-modal fk-modal--error">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="error-title-3">
        <div class="fk-modal__header">
            <h2 id="error-title-3" class="fk-modal__title">Ingen internetuppkoppling</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <div style="display: flex; gap: 1rem;">
                <svg style="flex-shrink: 0; width: 24px; height: 24px; color: #d9453f;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 1l22 22"/>
                    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
                    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
                    <path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>
                    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                    <line x1="12" y1="20" x2="12.01" y2="20"/>
                </svg>
                <div>
                    <p style="margin: 0;">Kunde inte ansluta till servern. Kontrollera din internetuppkoppling och försök igen.</p>
                </div>
            </div>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--primary">Försök igen</button>
        </div>
    </div>
</div>
```

## Valideringsfel för formulär

```html
<div class="fk-modal fk-modal--error">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="alertdialog" aria-modal="true" aria-labelledby="error-title-4">
        <div class="fk-modal__header">
            <h2 id="error-title-4" class="fk-modal__title">Kunde inte skicka formulär</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p>Formuläret innehåller fel som måste åtgärdas innan det kan skickas:</p>
            <ul style="margin: 0.5rem 0 0 1.5rem;">
                <li>E-postadressen är inte giltig</li>
                <li>Telefonnumret saknas</li>
                <li>Datumet måste vara i framtiden</li>
            </ul>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--primary">Åtgärda fel</button>
        </div>
    </div>
</div>
```

## CSS-klasser

| Klass | Beskrivning |
|-------|-------------|
| `fk-modal--error` | Felmodal-variant |
| `fk-error-modal` | Alternativ klass för felmodal |

## Tillgänglighet

- Använd `role="alertdialog"` för felmodaler
- Använd `aria-describedby` för att koppla felmeddelandet till dialogen
- Använd tydliga felmeddelanden som förklarar problemet
- För tekniska fel, överväg att dölja detaljerad information bakom en "visas mer"-sektion
- Erbjud en tydlig väg framåt (försök igen, återgå, etc.)

## Bästa praxis

1. **Var specifik** - Förklara vad som gick fel och varför
2. **Erbjud en lösning** - Ge användaren en tydlig väg framåt
3. **Använd människovänligt språk** - Undvik teknisk jargong när det är möjligt
4. **Logga fel** - Se till att fel loggas för felsökning, även om det inte visas för användaren
5. **Överväg alternativ** - Ibland är en toast-notis eller inline-felmeddelande bättre än en modal
