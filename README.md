# FauxKUI: A Design System with a Documentation Generator

## What is FauxKUI?

**FauxKUI** (pronounced "fox-koo-eye") is a **design system** - think of it like a LEGO set for building websites, but instead of plastic bricks, you use ready-made pieces called **components**.

It's inspired by **FKUI** (Försäkringskassan's Design System) - the design system used by the Swedish social insurance agency.

## The Big Picture: What This Project Does

```
┌─────────────────────────────────────────────────────────────────┐
│                     YOU WRITE                                   │
│  Markdown files (.md) + SCSS styles (.scss)                     │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│              docs-generator does its magic                      │
│   (reads your files → generates HTML documentation pages)       │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│              OUTPUT: Beautiful documentation website            │
│         Shows all your components with live examples!           │
└─────────────────────────────────────────────────────────────────┘
```

---

## Part 1: Understanding Design Systems

### What is a Design System?

Imagine you're building a house. You could:

- Make every door, window, and handle from scratch OR
- Use pre-made parts that all match and work together

A **design system** is like using pre-made parts for websites. It includes:

- **Components**: Ready-made UI pieces (buttons, cards, forms)
- **Styles**: Colors, fonts, spacing rules
- **Documentation**: Instructions on how to use everything

### Why Use a Design System?

| Without Design System | With Design System |
|-----------------------|-------------------|
| Every button looks different | All buttons match perfectly |
| Colors are random | Colors follow a palette |
| Hard to maintain | Easy to update everything at once |
| Inconsistent user experience | Professional, cohesive look |

---

## Part 2: The FauxKUI Components

FauxKUI currently has two main components:

### 1. Button Component

The button is used to make things happen when users click them.

**Button Variants** (different looks):

- **Primary**: The main action button (blue) - "Save", "Submit"
- **Secondary**: Less important actions (gray) - "Cancel", "Go back"
- **Outline**: See-through with border - "Learn more"
- **Danger**: For destructive actions (red) - "Delete", "Remove"

**Button Sizes**:

- Small (sm) - for tight spaces
- Default - normal size
- Large (lg) - for emphasis

**Example**:

```html
<button class="fk-button fk-button--primary">
    Save Changes
</button>
```

### 2. Card Component

A card is like a container - it groups related content together.

**Card Parts**:

- **Header**: Title and optional subtitle
- **Body**: The main content (text, images, lists)
- **Footer**: Action buttons at the bottom
- **Image**: Optional image at top or bottom

**Card Variants**:

- **Elevated**: Has a shadow, looks like it's floating
- **Flat**: No border or shadow
- **Clickable**: Hover effects for interactive cards

**Example**:

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

## Part 3: Understanding the Docs Generator

### What is a Docs Generator?

A **documentation generator** is like a robot that reads your files and automatically creates a nice website showing how to use your components.

**Without docs generator**: You manually write HTML for every example page
**With docs generator**: Write once in Markdown, it generates everything automatically!

### How the @forsakringskassan/docs-generator Works

```
┌───────────────────────────────────────────────────────────────────┐
│                      INPUT FILES                                  │
├───────────────────────────────────────────────────────────────────┤
│  src/components/button/button.md    ← Documentation in Markdown   │
│  src/components/button/button.scss  ← Styles in SCSS              │
│  src/components/card/card.md        ← Documentation in Markdown   │
│  src/components/card/card.scss      ← Styles in SCSS              │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│                    generate-docs.ts                               │
│  (The script that runs the docs generator)                        │
│                                                                   │
│  1. Creates a Generator instance                                  │
│  2. Tells it where to find files (.md in src/components)          │
│  3. Compiles styles (SCSS → CSS)                                  │
│  4. Builds the documentation site                                 │
└───────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌───────────────────────────────────────────────────────────────────┐
│                      OUTPUT                                       │
├───────────────────────────────────────────────────────────────────┤
│  docs/build/                                                      │
│  ├── button/index.html    ← Generated documentation page          │
│  ├── card/index.html      ← Generated documentation page          │
│  └── assets/               ← CSS and JS files                     │
└───────────────────────────────────────────────────────────────────┘
```

### The Key Files Explained

#### `generate-docs.ts` - The Main Script

```typescript
// This is where everything starts!

// 1. Create the generator
const docs = new Generator(import.meta.url, {
    site: {
        name: "FauxKUI Design System",  // Your site name
        lang: "en",
    },
    outputFolder: "docs/build",  // Where to put the generated files
    templateFolders: ["./templates"],  // Where your HTML templates are
});

// 2. Compile the styles
docs.compileStyle("docs", "./docs/src/style.scss", {
    appendTo: "head",  // Put CSS in the <head> of the HTML
});

// 3. Define what files to read
const sources = defineSources([
    {
        include: ["src/components/**/*.md"],  // All .md files in components
        basePath: "./",
        fileReader: frontMatterFileReader,  // Reads markdown with front matter
    },
]);

// 4. Build!
docs.build(sources);
```

#### Component Markdown Files (like `button.md`)

The **front matter** at the top (between `---`) is special metadata:

```yaml
---
layout: default     # Which HTML template to use
title: Button       # Page title
short-title: Button # Short title for navigation
status: Produktionsklar  # Component status badge
---
```

After the front matter, you write regular Markdown:

- `#` for headings
- ` ```html ` for code examples
- Tables for API documentation

#### The HTML Template (`default.template.html`)

This is the skeleton for every documentation page. It uses **Nunjucks** templating:

```html
<h1>{{ doc.attributes.title }}</h1>  <!-- Gets the title from front matter -->
{{ doc.body | marked }}               <!-- Converts markdown to HTML -->
```

---

## Part 4: File Structure (The Map)

```
FauxKUI/
├── generate-docs.ts        # The main script that builds the docs
├── server.js               # Development server for previewing docs
├── package.json            # Project info and dependencies
├── tsconfig.json           # TypeScript configuration
│
├── src/                    # Source files (your components)
│   └── components/
│       ├── button/
│       │   ├── button.md   # Documentation
│       │   └── button.scss # Styles
│       └── card/
│           ├── card.md     # Documentation
│           └── card.scss   # Styles
│
├── docs/                   # Documentation files
│   ├── src/
│   │   ├── docs-theme.scss # Custom CSS overrides
│   │   ├── fkui-theme.scss # FKUI theme for code previews
│   │   ├── style.scss      # Main SCSS entry point
│   │   └── setup.ts        # Vue 3 setup for live examples
│   ├── gettingstarted.md   # Getting started page
│   ├── components.md       # Components overview
│   ├── guides.md           # Guides page
│   ├── functions.md        # Functions page
│   ├── styles.md           # Visual styles page
│   └── build/              # Generated website (DON'T edit manually!)
│       ├── index.html
│       ├── gettingstarted.html
│       └── src/components/
│           ├── button/index.html
│           └── card/index.html
│
└── templates/              # HTML templates for pages
    ├── default.template.html
    └── pattern.template.html
```

---

## Part 5: Main Documentation Pages

The documentation site includes several main pages in the `docs/` folder:

| Page | File | Description |
|------|------|-------------|
| Home | `index.md` | Landing page with overview |
| Getting Started | `gettingstarted.md` | Installation and quick start |
| Components | `components.md` | Overview of all components |
| Guides | `guides.md` | How-to guides |
| Functions | `functions.md` | Utility functions reference |
| Styles | `styles.md` | Visual design guidelines |

Each page uses front matter for metadata (title, layout, status) and contains regular Markdown content.

---

## Part 6: How to Use This Project

### Building the Documentation

```bash
npm run docs:build
```

This runs `generate-docs.ts` which:

1. Reads all `.md` files in `src/components/`
2. Compiles SCSS to CSS
3. Generates HTML files in `docs/build/`

### Previewing the Documentation

```bash
npm run docs:serve
```

This:

1. Builds the docs
2. Starts a local web server
3. Watches for file changes (auto-rebuilds when you edit)
4. Opens the site in your browser

---

## Part 7: Adding a New Component

Want to add something new? Here's how:

1. **Create a new folder** in `src/components/` (e.g., `alert/`)

2. **Create `alert.md`** with front matter:

   ```yaml
   ---
   layout: default
   title: Alert
   short-title: Alert
   status: Produktionsklar
   ---

   The alert component displays important messages...

   ```html
   <div class="fk-alert">Hello!</div>
   ```

   ```

   > **Note**: Don't add an H1 heading (`# Alert`) in your markdown content. The page title is already rendered by the template from the `title` field in front matter.

3. **Create `alert.scss`** with styles:

   ```scss
   .fk-alert {
       padding: 1rem;
       border: 1px solid #ccc;
       border-radius: 0.25rem;
   }
   ```

4. **Rebuild**: `npm run docs:build`

5. **Done!** Your new component page is generated automatically

---

## Part 8: Key Concepts Summary

### Markdown (.md files)

A simple way to write text that converts to HTML. Uses `#` for headings, `*` for lists, etc.

### SCSS (.scss files)

A fancy version of CSS with features like nesting and variables.

### Front Matter

Metadata at the top of markdown files (between `---` lines) that tells the generator about the page.

### Templates (.template.html)

HTML skeletons with placeholders that get filled in with your content.

### Build Process

Converting source files (Markdown, SCSS) into final files (HTML, CSS) that browsers can read.

### Live Reload

Automatically refreshing the browser when you save a file - super handy for development!

---

## Summary: The Whole System in One Sentence

**FauxKUI is a collection of reusable website components (buttons, cards) written in SCSS and documented in Markdown, which the docs-generator automatically turns into a beautiful documentation website that shows examples and usage instructions.**

---

## Quick Reference: NPM Commands

| Command | What it does |
|---------|--------------|
| `npm run docs:build` | Generate the documentation website |
| `npm run docs:serve` | Build and start a live preview server |

---

## Need to Learn More?

- **Markdown**: Search "Markdown tutorial" - it's super simple!
- **SCSS**: Search "SCSS guide" - it's like CSS but better
- **Nunjucks**: The templating language used in HTML templates

---

Hope you'll find FauxKUI useful!
