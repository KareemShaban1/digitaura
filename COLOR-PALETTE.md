# Digitaura color palette

Dark theme. Tokens are defined in `src/index.css` and mapped to Tailwind classes in `tailwind.config.ts`.

Use the CSS variable or Tailwind class in the app. Hex values are the resolved colors of those tokens.

## Brand

| Name | Hex | HSL | CSS variable | Tailwind |
| --- | --- | --- | --- | --- |
| Primary | `#E94B3A` | `6 80% 57%` | `--primary` | `bg-primary` / `text-primary` |
| Primary text | `#FFFFFF` | `0 0% 100%` | `--primary-foreground` | `text-primary-foreground` |
| Accent | `#E94B3A` | `6 80% 57%` | `--accent` | `bg-accent` / `text-accent` |
| Accent text | `#FFFFFF` | `0 0% 100%` | `--accent-foreground` | `text-accent-foreground` |
| Gradient warm | `#EE6C2B` | `20 85% 55%` | used in `--gradient-primary` | — |

Primary and accent are the same coral red. The warm orange appears only as the end stop of the primary gradient.

## Logo generation (website theme)

Suggested colors for a **new** logo, taken from the website theme in `src/index.css`. Do not match the current `logo.png` file; match the app UI.

### Core colors to feed a logo generator

| Use in logo | Hex | HSL | Theme source |
| --- | --- | --- | --- |
| Brand / icon fill | `#E94B3A` | `6 80% 57%` | `--primary` |
| Icon detail / cutout | `#FFFFFF` | `0 0% 100%` | `--primary-foreground` |
| Brand name text | `#FAFAFA` | `0 0% 98%` | `--foreground` |
| Background (dark) | `#121212` | `0 0% 7%` | `--background` |
| Background (deep) | `#0A0A0A` | `0 0% 4%` | `--gradient-dark` end |
| Accent / gradient end | `#EE6C2B` | `20 85% 55%` | `--gradient-primary` end |
| Background (light / print) | `#FFFFFF` | `0 0% 100%` | `--primary-foreground` |
| Brand name on light | `#121212` | `0 0% 7%` | `--background` |

**Recommended default for AI / designer tools:**  
`#E94B3A`, `#EE6C2B`, `#FAFAFA`, `#121212`

### Prompt-ready color list

```
primary: #E94B3A
gradient: #E94B3A → #EE6C2B (135deg)
text: #FAFAFA
background: #121212
```

### Suggested logo versions

| Version | Icon | Text | Background |
| --- | --- | --- | --- |
| Primary (website match) | `#E94B3A` | `#FAFAFA` | `#121212` |
| Gradient icon | `#E94B3A` → `#EE6C2B` | `#FAFAFA` | `#121212` |
| Deep dark | `#E94B3A` | `#FAFAFA` | `#0A0A0A` |
| Light / print | `#E94B3A` | `#121212` | `#FFFFFF` |
| Mono dark | `#FAFAFA` | `#FAFAFA` | `#121212` |
| Mono light | `#121212` | `#121212` | `#FFFFFF` |

### Do not use in the logo

| Hex | Why |
| --- | --- |
| `#A6A6A6` | muted text — too weak for a mark |
| `#333333` / `#2E2E2E` / `#242424` | borders and surfaces — interface only |
| `#EF4444` | destructive / error — not brand |

Keep the logo to **2–3 colors** from the core list above so it matches the website.

### Logo generation prompt (Digitaura)

Copy into Midjourney, Ideogram, DALL·E, or similar:

```
Create a modern logo for "Digitaura", a technology and digital solutions company.

Style: clean, minimal, premium tech brand. Flat vector look, sharp geometric shapes, no 3D, no glossy effects, no clutter.

Composition: icon mark on the left + wordmark "Digitaura" on the right. Icon should suggest digital energy or aura (abstract geometric shape, not a literal letter mashup unless elegant). Wordmark in a bold modern sans-serif, all one word, lowercase or title case "Digitaura".

Colors (exact hex, match website theme):
- Icon / brand accent: #E94B3A coral red, optional 135° gradient to #EE6C2B warm orange
- Wordmark: #FAFAFA soft white
- Background: solid #121212 near-black

Constraints:
- Use only these colors
- High contrast, readable at small sizes
- Transparent feel is fine but keep background #121212 for this version
- No purple, no neon glow overload, no gradients on text
- No stock icons (no generic globe, code brackets, or robot)

Output: centered logo on a square dark canvas, professional brand identity quality.
```

**Light / print variant** — same prompt, swap colors to:

```
- Icon: #E94B3A
- Wordmark: #121212
- Background: #FFFFFF
```

**Icon-only variant** — append:

```
Also deliver a standalone icon mark without text, same colors, suitable for app favicon and social avatar.
```

## Neutrals

| Name | Hex | HSL | CSS variable | Tailwind |
| --- | --- | --- | --- | --- |
| Background | `#121212` | `0 0% 7%` | `--background` | `bg-background` |
| Foreground | `#FAFAFA` | `0 0% 98%` | `--foreground` | `text-foreground` |
| Card | `#1A1A1A` | `0 0% 10%` | `--card` | `bg-card` |
| Card text | `#FAFAFA` | `0 0% 98%` | `--card-foreground` | `text-card-foreground` |
| Popover | `#1A1A1A` | `0 0% 10%` | `--popover` | `bg-popover` |
| Popover text | `#FAFAFA` | `0 0% 98%` | `--popover-foreground` | `text-popover-foreground` |
| Secondary | `#242424` | `0 0% 14%` | `--secondary` | `bg-secondary` |
| Secondary text | `#FAFAFA` | `0 0% 98%` | `--secondary-foreground` | `text-secondary-foreground` |
| Muted | `#2E2E2E` | `0 0% 18%` | `--muted` | `bg-muted` |
| Muted text | `#A6A6A6` | `0 0% 65%` | `--muted-foreground` | `text-muted-foreground` |
| Border | `#333333` | `0 0% 20%` | `--border` | `border-border` |
| Input | `#333333` | `0 0% 20%` | `--input` | `border-input` |
| Near black | `#0A0A0A` | `0 0% 4%` | used in `--gradient-dark` | — |
| Card gradient start | `#1F1F1F` | `0 0% 12%` | used in `--gradient-card` | — |
| Card gradient end | `#141414` | `0 0% 8%` | used in `--gradient-card` | — |

## Semantic

| Name | Hex | HSL | CSS variable | Tailwind |
| --- | --- | --- | --- | --- |
| Destructive | `#EF4444` | `0 84.2% 60.2%` | `--destructive` | `bg-destructive` |
| Destructive text | `#FAFAFA` | `0 0% 98%` | `--destructive-foreground` | `text-destructive-foreground` |
| Focus ring | `#E94B3A` | `6 80% 57%` | `--ring` | `ring-ring` |

## Sidebar

| Name | Hex | HSL | CSS variable | Tailwind |
| --- | --- | --- | --- | --- |
| Sidebar | `#1A1A1A` | `0 0% 10%` | `--sidebar-background` | `bg-sidebar` |
| Sidebar text | `#FAFAFA` | `0 0% 98%` | `--sidebar-foreground` | `text-sidebar-foreground` |
| Sidebar primary | `#E94B3A` | `6 80% 57%` | `--sidebar-primary` | `bg-sidebar-primary` |
| Sidebar primary text | `#FFFFFF` | `0 0% 100%` | `--sidebar-primary-foreground` | `text-sidebar-primary-foreground` |
| Sidebar accent | `#2E2E2E` | `0 0% 18%` | `--sidebar-accent` | `bg-sidebar-accent` |
| Sidebar accent text | `#FAFAFA` | `0 0% 98%` | `--sidebar-accent-foreground` | `text-sidebar-accent-foreground` |
| Sidebar border | `#333333` | `0 0% 20%` | `--sidebar-border` | `border-sidebar-border` |
| Sidebar ring | `#E94B3A` | `6 80% 57%` | `--sidebar-ring` | `ring-sidebar-ring` |

## Gradients and glow

| Token | Value | Utility class |
| --- | --- | --- |
| `--gradient-primary` | `135deg` from `#E94B3A` to `#EE6C2B` | `.bg-gradient-primary`, `.text-gradient` |
| `--gradient-dark` | `180deg` from `#121212` to `#0A0A0A` | `.bg-gradient-dark` |
| `--gradient-card` | `145deg` from `#1F1F1F` to `#141414` | `.bg-gradient-card` |
| `--glow-primary` | `0 0 40px` primary at 40% opacity | `.glow-primary` |

Related effects in `src/index.css`:

- `.glow-text` — primary text shadow at 50% opacity
- `.animate-pulse-glow` — primary glow between 30% and 60% opacity
- Scrollbar track `#1A1A1A`, thumb primary at 50% (70% on hover)

## Radius

| Token | Value |
| --- | --- |
| `--radius` | `0.75rem` (`rounded-lg`) |

## Type

Body text uses **Outfit**, falling back to `system-ui` and `sans-serif`.
