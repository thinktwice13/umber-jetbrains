# Changelog

All notable changes to Umber will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.3.0] - 2026-03-03

### Added

- **Islands UI support** — native look on JetBrains 2025.3+ with rounded islands, transparent borders, and contrast `MainWindow` backgrounds
- `parentTheme` set to `Islands Dark` / `Islands Light` per variant (silently ignored on pre-2025.3)
- `bgWindow` color alias per variant for window-level contrast behind tool window islands
- Marketing materials: code snippets (`showcase.go`, `showcase.tsx`), color palettes, social media drafts

### Changed

- `StatusBar.borderColor` changed from `border` to `transparent` across all variants — warm surfaces provide enough visual separation
- Enhanced marketplace description with concrete contrast ratios and Islands UI mention
- Plugin description updated from "four variants" to "seven variants"

## [0.2.0] - 2026-03-03

### Added

- **Umber Ivory** — bright, gentle yellow light theme (`#faf8f3`)
- **Umber Parchment** — book paper, neutral warm light theme (`#f7f5f0`)
- **Umber Cream** — yellow-leaning warm light theme (`#f8f7f2`)

### Changed

- **Espresso** background rebalanced from `#302b26` to `#332c25` (ΔE 1.8 → 3.5 from Charcoal) — now noticeably warmer
- **Olive** background rebalanced from `#263020` to `#282f22` (ΔE 10.9 → 8.5 from Charcoal) — better visual balance
- All surface colors (panels, tabs, borders, etc.) re-derived for both Espresso and Olive

### Fixed

- Light theme: replaced blue-tinted syntax backgrounds with warm alternatives
  - `d8d0ec` (lavender) → `e4d6b4` (honey) for numbers, constants, entities
  - `dbd8e2` (purple) → `ddd6c8` (sand) for TODO, bookmarks
  - `d8e0f0` (blue) → `e0d8c8` (beige) for diff modified

## [1.0.0] - 2026-03-01

### Added

- **Umber Espresso** — rich brown dark theme (`#302b26`)
- **Umber Charcoal** — warm grey dark theme (`#2d2a27`)
- **Umber Olive** — olive green dark theme (`#263020`)
- **Umber Light** — warm beige light theme (`#f5f0e8`) with background-highlight syntax
- Full UI theming: editor, sidebar, tabs, tool windows, status bar, popups, dialogs, buttons, inputs, scrollbars
- WCAG AA contrast (4.5:1) on all syntax tokens
- Colorblind-safe palette — blue vs warm/amber axis, no red-vs-green reliance
- Errors indicated by underlines, not color alone
- Language-specific tuning for TypeScript and Go
- Solid defaults for JSON, YAML, CSS, HTML, and Markdown
- Diff viewer colors (added, modified, deleted, conflict)
- Terminal ANSI color mapping (16 colors)
