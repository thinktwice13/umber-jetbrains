# Umber — Social Media Drafts

## Reddit (r/IntelliJIDEA)

**Title:** Umber — a warm theme family with 7 variants, Islands UI support, and a focus on eye comfort

**Body:**

I've been working on Umber, a theme built around warm, earthy tones instead of the typical cool greys. It ships 7 variants — three dark (Espresso, Charcoal, Olive) and four light (Light, Ivory, Parchment, Cream) — so you can pick the warmth and brightness level that works for your setup.

The light variants do something a bit different: instead of coloring syntax text, they use subtle background highlights to mark strings, functions, and constants. It's inspired by Alabaster's approach and keeps the editor looking calm while still making structure visible.

v0.3.0 adds native Islands UI support for 2025.3+ — the window background, island borders, and toolbar separators all adapt to the new layout. The same plugin still works on 2024.3+ with no visual regression. The palette is colorblind-safe (blue vs warm/amber axis, no red-green reliance) and errors use underlines, not just color. There's also a matching Ghostty terminal theme if you want consistency outside the IDE.

<!-- Attach: 2-3 screenshots showing Charcoal, Light, and one more variant -->

---

## Twitter/X

Umber v0.3.0 — warm, earthy themes for JetBrains IDEs. 7 variants (3 dark, 4 light), native Islands UI on 2025.3+, colorblind-safe. Background-highlight syntax on light themes.

<!-- Attach: single screenshot, Charcoal or Light variant -->

---

## dev.to Article Outline

**Title:** Building a warm IDE theme: design decisions behind Umber

### Sections

1. **Why warm tones** — Blue light, cool grey fatigue, the case for earthy backgrounds
2. **Design philosophy** — Muted keywords, soft accent, background-highlight syntax for light themes
3. **The seven variants** — How Espresso, Charcoal, and Olive differ; why four light variants instead of one
4. **Accessibility by design** — Concrete contrast ratios, colorblind-safe palette choices, underline-based errors
5. **Islands UI support** — What `parentTheme` does, how additive keys maintain backward compatibility
6. **Variant showcase** — Side-by-side screenshots of all 7 variants with the same code file
7. **Install & links** — JetBrains Marketplace, GitHub, Ghostty companion theme
