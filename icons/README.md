# Icons

Extension icons in required sizes:
- ✅ `icon16.png` - Toolbar icon
- ✅ `icon32.png` - Windows requirement  
- ✅ `icon48.png` - Extension management
- ✅ `icon128.png` - Chrome Web Store
- 📄 `icon.svg` - Source file

## Design
- Blue gradient background (#0066cc to #004499)
- White continue triangle symbol
- Professional appearance for browser toolbars

## Regenerating Icons
1. Edit `icon.svg` with any vector graphics editor
2. Use ImageMagick to generate PNG files:
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
