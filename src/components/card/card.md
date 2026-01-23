---
layout: default
title: Card
short-title: Card
status: Produktionsklar
---

The card component is a container for grouping related content and actions. Cards can contain headers, body content, images, and footers with actions.

## Basic Card

A simple card with header, body, and footer sections.

```html
<div class="fk-card">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Card Title</h2>
        <p class="fk-card__subtitle">Optional subtitle text</p>
    </div>
    <div class="fk-card__body">
        <p>This is the card body content. You can put any content here including text, lists, or other components.</p>
    </div>
    <div class="fk-card__footer">
        <button class="fk-button fk-button--secondary">Cancel</button>
        <button class="fk-button fk-button--primary">Save</button>
    </div>
</div>
```

## Minimal Card

A card with only the body content.

```html
<div class="fk-card">
    <div class="fk-card__body">
        <h3>Simple Card</h3>
        <p>This card has only a body section with no header or footer.</p>
    </div>
</div>
```

## Card with Image

A card that includes an image at the top.

```html
<div class="fk-card fk-card--image-top">
    <img class="fk-card__image" src="https://picsum.photos/600/300" alt="Card image">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Nature Card</h2>
    </div>
    <div class="fk-card__body">
        <p>This card includes an image at the top. Images are automatically responsive.</p>
    </div>
    <div class="fk-card__footer">
        <button class="fk-button fk-button--primary">View Details</button>
    </div>
</div>
```

## Card Variants

### Elevated Card

Use the elevated modifier for a more prominent card with deeper shadow.

```html
<div class="fk-card fk-card--elevated">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Elevated Card</h2>
    </div>
    <div class="fk-card__body">
        <p>This card has an elevated appearance with enhanced shadow.</p>
    </div>
</div>
```

### Flat Card

Use the flat modifier for a card without border or shadow.

```html
<div class="fk-card fk-card--flat">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Flat Card</h2>
    </div>
    <div class="fk-card__body">
        <p>This card has no border or shadow for a minimal appearance.</p>
    </div>
</div>
```

### Clickable Card

Use the clickable modifier for cards that are interactive.

```html
<div class="fk-card fk-card--clickable">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Clickable Card</h2>
    </div>
    <div class="fk-card__body">
        <p>This card has hover effects and cursor pointer to indicate interactivity.</p>
    </div>
</div>
```

## Size Variants

Cards come in three sizes: small, default, and large.

```html
<div class="fk-card fk-card--sm">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Small Card</h2>
    </div>
    <div class="fk-card__body">
        <p>This card has reduced padding.</p>
    </div>
</div>

<div class="fk-card">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Default Card</h2>
    </div>
    <div class="fk-card__body">
        <p>This card has default padding.</p>
    </div>
</div>

<div class="fk-card fk-card--lg">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Large Card</h2>
    </div>
    <div class="fk-card__body">
        <p>This card has increased padding.</p>
    </div>
</div>
```

## Content Examples

### Text Content

```html
<div class="fk-card">
    <div class="fk-card__header">
        <h2 class="fk-card__title">Article Preview</h2>
    </div>
    <div class="fk-card__body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <ul>
            <li>First list item</li>
            <li>Second list item</li>
            <li>Third list item</li>
        </ul>
    </div>
</div>
```

### Profile Card

```html
<div class="fk-card">
    <div class="fk-card__body" style="text-align: center;">
        <svg style="width: 80px; height: 80px; margin: 0 auto 1rem; background: #e0e4e4; border-radius: 50%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        <h2 class="fk-card__title">Jane Doe</h2>
        <p class="fk-card__subtitle">Product Designer</p>
        <p style="margin-top: 1rem; color: #6b7280;">Creating beautiful user experiences since 2018.</p>
    </div>
    <div class="fk-card__footer" style="justify-content: center;">
        <button class="fk-button fk-button--primary">Follow</button>
        <button class="fk-button fk-button--outline">Message</button>
    </div>
</div>
```

## Component API

### CSS Classes

| Class | Description |
|-------|-------------|
| `fk-card` | Base card class (required) |
| `fk-card__header` | Card header container |
| `fk-card__title` | Card title (typically `<h2>`) |
| `fk-card__subtitle` | Card subtitle |
| `fk-card__body` | Card body content |
| `fk-card__footer` | Card footer for actions |
| `fk-card__image` | Card image element |
| `fk-card--elevated` | Enhanced shadow variant |
| `fk-card--flat` | No border/shadow variant |
| `fk-card--clickable` | Interactive variant with hover effects |
| `fk-card--sm` | Small size |
| `fk-card--lg` | Large size |
| `fk-card--image-top` | Position image at top |
| `fk-card--image-bottom` | Position image at bottom |

### Accessibility

- Ensure proper heading hierarchy within cards
- Use semantic HTML elements (`<h2>` for card titles, `<button>` for actions)
- Provide meaningful alt text for card images
- Maintain sufficient color contrast for text
- For clickable cards, ensure keyboard users can activate the card (add `tabindex="0"` and keyboard handler)

## Best Practices

1. **Use cards to group related content** - Cards work well for organizing information into logical groups
2. **Keep card content focused** - Each card should have a single, clear purpose
3. **Use consistent sizing** - Maintain uniform card sizes within a grid layout
4. **Provide clear actions** - Place primary actions in the card footer
5. **Consider responsive layouts** - Cards can stack on mobile and form grids on larger screens
