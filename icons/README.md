# Icons

This directory contains the icon files for the Chrome extension:

- ✅ `icon16.png` - 16x16 pixels (toolbar icon)
- ✅ `icon32.png` - 32x32 pixels (Windows computers often require this size)
- ✅ `icon48.png` - 48x48 pixels (extension management page)
- ✅ `icon128.png` - 128x128 pixels (Chrome Web Store and installation)
- 📄 `icon.svg` - Source SVG file used to generate the PNG icons

## Icon Design

The current icons feature:

- **Blue gradient background** (#0066cc to #004499) representing stability and trust
- **White play/continue triangle** symbolizing the "continue" action
- **Animated green dots** (in SVG) representing automation and continuous activity
- **Small "C" letter** for "Copilot" branding
- **Professional appearance** that works well in browser toolbars

The design emphasizes the extension's core purpose: automatically continuing GitHub Copilot when it gets stuck.

## Regenerating Icons

If you need to modify the icons:

If you need to modify the icons:

1. Edit the `icon.svg` file with any vector graphics editor
2. Use ImageMagick to regenerate the PNG files:
   ```bash
   convert icon.svg -resize 16x16 icon16.png
   convert icon.svg -resize 32x32 icon32.png
   convert icon.svg -resize 48x48 icon48.png
   convert icon.svg -resize 128x128 icon128.png
   ```

## Design Guidelines

Icons should:

1. Be square (same width and height)
2. Have a transparent background (where appropriate)
3. Be simple and recognizable at small sizes
4. Use colors that work well with both light and dark themes
5. Clearly represent the extension's purpose

## Alternative Designs

Consider these design concepts for future versions:
- A play button (▶️) symbol
- An arrow pointing right (→)
- The letter "C" for "Continue" or "Copilot"
- A combination of the GitHub Copilot colors with a continuation symbol

The extension works perfectly with the current icons, providing a professional appearance in the Chrome toolbar and extension management pages.
