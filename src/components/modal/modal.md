---
layout: component
title: Modal
short-title: Modal
status: Produktionsklar
---

Modalkomponenten används för att visa dialogrutor och meddelanden som kräver användarens uppmärksamhet. Modal-gruppen inkluderar flera varianter för olika syften.

## Modaltyper

Modal-komponenten har fyra huvudvarianter:

- **Bekräftelsemodal** – För att bekräfta destruktiva eller irreversibla åtgärder
- **Informationsmodal** – För att visa viktig information
- **Varningsmodal** – För att varna om potentiella risker
- **Felmodal** – För att visa felmeddelanden

Välj rätt modaltyp baserat på din användning:

- Använd bekräftelsemodal för åtgärder som "Ta bort", "Avbryt" eller "Arkivera"
- Använd informationsmodal för att visa meddelanden som inte kräver omedelbar åtgärd
- Använd varningsmodal för att varna om potentiella konsekvenser
- Använd felmodal när ett fel har inträffat

## Grundläggande struktur

Alla modaler delar samma grundstruktur:

```html
<div class="fk-modal">
    <div class="fk-modal__overlay"></div>
    <div class="fk-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="fk-modal__header">
            <h2 id="modal-title" class="fk-modal__title">Modalrubrik</h2>
            <button class="fk-modal__close" aria-label="Stäng modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="fk-modal__body">
            <p>Modalens innehåll.</p>
        </div>
        <div class="fk-modal__footer">
            <button class="fk-button fk-button--secondary">Avbryt</button>
            <button class="fk-button fk-button--primary">Bekräfta</button>
        </div>
    </div>
</div>
```

## Komponent-API

### CSS-klasser

| Klass | Beskrivning |
|-------|-------------|
| `fk-modal` | Bas-klass för modal (obligatorisk) |
| `fk-modal__overlay` | Bakgrundsöverlagring |
| `fk-modal__dialog` | Modalens dialogcontainer |
| `fk-modal__header` | Modalens sidhuvud |
| `fk-modal__title` | Modalens rubrik |
| `fk-modal__close` | Stängningsknapp |
| `fk-modal__body` | Modalens brödtext |
| `fk-modal__footer` | Modalens sidfot för åtgärder |

### Tillgänglighet

- Modaler använder `role="dialog"` och `aria-modal="true"` för skärmläsare
- Modalens rubrik måste vara kopplad med `aria-labelledby`
- Fokus fångas inuti modalen när den öppnas
- Tryck på ESC-tangenten stänger modalen
- Klick på överlagringen stänger modalen

## Bästa praxis

1. **Använd modaler sparsamt** - Överanvändning kan leda till "modaltrötthet"
2. **Ange tydliga åtgärder** - Primärknappen ska vara den föredragna åtgärden
3. **Tillåt avbrott** - Användare ska alltid kunna avbryta/avvisa modalen
4. **Fånga fokus korrekt** - Fokus ska flyttas till modalen när den öppnas
5. **Undvik kapslade modaler** - Använd aldrig mer än en modal åt gången
