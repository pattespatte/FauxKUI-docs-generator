---
layout: default
title: Button
short-title: Button
status: Produktionsklar
---

# Button

The button component is used to trigger actions or navigate to other pages. It supports multiple variants, sizes, and states.

## Basic Usage

### Primary Button

The primary button is used for the main action in a view.

```html
<button class="fk-button fk-button--primary">
    Save Changes
</button>
```

### Secondary Button

Use secondary buttons for alternative actions.

```html
<button class="fk-button fk-button--secondary">
    Cancel
</button>
```

### Outline Button

Outline buttons are used for less prominent actions.

```html
<button class="fk-button fk-button--outline">
    Learn More
</button>
```

### Danger Button

Danger buttons are used for destructive actions.

```html
<button class="fk-button fk-button--danger">
    Delete
</button>
```

## Sizes

Buttons come in three sizes: small (default), medium, and large.

```html
<button class="fk-button fk-button--primary fk-button--sm">
    Small Button
</button>

<button class="fk-button fk-button--primary">
    Default Button
</button>

<button class="fk-button fk-button--primary fk-button--lg">
    Large Button
</button>
```

## States

### Disabled State

```html
<button class="fk-button fk-button--primary" disabled>
    Disabled Primary
</button>

<button class="fk-button fk-button--secondary" disabled>
    Disabled Secondary
</button>
```

## Block Button

For mobile-first layouts, use the block modifier for full-width buttons.

```html
<button class="fk-button fk-button--primary fk-button--block">
    Full Width Button
</button>
```

## With Icons

Buttons can include icons alongside text.

```html
<button class="fk-button fk-button--primary">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
    Continue
</button>

<button class="fk-button fk-button--secondary">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
    Go Back
</button>
```

## Component API

### CSS Classes

| Class | Description |
|-------|-------------|
| `fk-button` | Base button class (required) |
| `fk-button--primary` | Primary variant (blue background) |
| `fk-button--secondary` | Secondary variant (gray background) |
| `fk-button--outline` | Outline variant (transparent with border) |
| `fk-button--danger` | Danger variant (red background) |
| `fk-button--sm` | Small size |
| `fk-button--lg` | Large size |
| `fk-button--block` | Full width (for mobile) |

### Accessibility

- Buttons automatically include focus-visible styles for keyboard navigation
- Always provide meaningful text content for screen readers
- Use `<button>` elements for actions and `<a>` elements styled as buttons for navigation
- Disabled buttons have `disabled` attribute and reduced opacity

## Best Practices

1. **Use primary buttons sparingly** - Only one primary button per view
2. **Provide clear labels** - Button text should clearly indicate the action
3. **Consider touch targets** - Minimum touch target size is 44x44px
4. **Avoid generic labels** - Use specific labels like "Save Changes" instead of "OK"
