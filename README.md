# Umber

A warm, minimalistic theme family for JetBrains IDEs.

<!-- ![JetBrains Plugin](https://img.shields.io/jetbrains/plugin/v/PLUGIN_ID?label=JetBrains%20Marketplace) -->
![License](https://img.shields.io/badge/license-MIT-blue)

## Variants

| Variant   | Type  | Background | Description                              |
|-----------|-------|------------|------------------------------------------|
| Espresso  | Dark  | `#302b26`  | Rich brown — coffee and mahogany         |
| Charcoal  | Dark  | `#2d2a27`  | Warm grey — stone and driftwood          |
| Olive     | Dark  | `#263020`  | Forest green — moss and pine             |
| Light     | Light | `#f5f0e8`  | Warm beige — parchment and linen         |

## Screenshots

<!-- Screenshots coming soon. To contribute, open an issue with a screenshot of your setup! -->
<!--
### Espresso
![Espresso](screenshots/espresso.png)

### Charcoal
![Charcoal](screenshots/charcoal.png)

### Olive
![Olive](screenshots/olive.png)

### Light
![Light](screenshots/light.png)
-->

## Design Philosophy

Umber is built around warm, earthy tones that reduce eye fatigue during long coding sessions.

- **Muted keywords** — keywords are desaturated so they don't compete with identifiers and values
- **Soft accent** — functions and links use a calm steel blue (`#6699CC`) as the primary accent
- **Warm surfaces** — every UI surface (sidebar, tabs, popups, status bar) uses tinted backgrounds instead of neutral greys
- **Light variant** — uses background highlighting to mark syntax regions rather than coloring text, inspired by the Alabaster approach

## Accessibility

- **WCAG AA contrast**: all syntax tokens maintain a minimum 4.5:1 contrast ratio against their background, per [WCAG 2.1 SC 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- **Colorblind-safe**: the palette relies on a blue vs warm/amber axis rather than red vs green, and errors are indicated by underlines (not color alone), per [WCAG 2.1 SC 1.4.1](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html)

## Language Support

Specifically tuned for **TypeScript** and **Go** with dedicated token colors for language-specific constructs.

Solid defaults for: JSON, YAML, CSS, HTML, Markdown.

## Installation

### From release ZIP

1. Download the latest `.zip` from [Releases](../../releases)
2. In your JetBrains IDE: **Settings > Plugins > Gear icon > Install Plugin from Disk...**
3. Select the downloaded `.zip` file
4. Restart the IDE
5. **Settings > Appearance & Behavior > Appearance > Theme** — choose an Umber variant

### Build from source

```bash
git clone https://github.com/YOUR_USERNAME/umber-jetbrains.git
cd umber-jetbrains
./gradlew buildPlugin
```

The plugin ZIP will be at `build/distributions/umber.zip`.

## Compatibility

Any JetBrains IDE built on IntelliJ Platform **2024.3+** (build 243+):
IntelliJ IDEA, WebStorm, GoLand, PyCharm, RustRover, CLion, PhpStorm, Rider, DataGrip, and others.

## Project Structure

```
umber-jetbrains/
├── build.gradle.kts
├── settings.gradle.kts
├── gradle.properties
├── src/main/resources/
│   ├── META-INF/
│   │   └── plugin.xml
│   ├── themes/
│   │   ├── umber-espresso.theme.json
│   │   ├── umber-charcoal.theme.json
│   │   ├── umber-olive.theme.json
│   │   └── umber-light.theme.json
│   └── colors/
│       ├── Umber_Espresso.xml
│       ├── Umber_Charcoal.xml
│       ├── Umber_Olive.xml
│       └── Umber_Light.xml
├── LICENSE
├── CHANGELOG.md
└── README.md
```

## License

[MIT](LICENSE)
