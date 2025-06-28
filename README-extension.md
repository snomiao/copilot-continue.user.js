# Copilot Continue Chrome Extension

Automatically clicks "Continue" and other buttons when GitHub Copilot gets stuck in VS Code web environments.

## Quick Install

### From Source
1. Clone this repository
2. Open `chrome://extensions/` → Enable "Developer mode"
3. Click "Load unpacked" → Select this folder

### From Chrome Web Store
*Coming soon*

## What It Handles
- ✅ "Continue" for workflow interruptions
- ✅ "Grant" for permission requests  
- ✅ "Try Again" for service errors (auto-refresh after 3 attempts)
- ✅ Language model unavailable messages

## Usage
1. Install the extension
2. Open VS Code in browser (vscode.dev, github.dev, etc.)
3. Works automatically - no setup needed
4. Check extension popup to verify it's active
## Development

**File Structure:**
```
├── manifest.json       # Extension config
├── content.js          # Main script  
├── copilot-continue.user.js # Core logic
├── popup.html/js       # Extension popup
└── icons/              # Extension icons
```

**Making Changes:**
1. Edit files → Reload extension at `chrome://extensions/`
2. Refresh VS Code tabs to apply changes
3. Run `npm run package` to build for distribution

## Troubleshooting

**Not working?**
- Ensure you're in VS Code web environment (vscode.dev, github.dev)
- Check extension popup shows "Active in VS Code"
- Look for `[Copilot Continue]` messages in browser console (F12)
- Reload extension and refresh VS Code tab

**Common Issues:**
- "Not in VS Code environment" → Use VS Code in browser
- No action when stuck → Check console for errors  
- Icon not visible → Pin extension to toolbar

## Permissions & Privacy
- **activeTab**: For popup communication
- **host_permissions**: To run on VS Code sites
- **No data collection** - everything runs locally
- **No external requests** - completely offline operation

## Support
- [GitHub Issues](https://github.com/snomiao/copilot-continue.user.js/issues)
- [Original Userscript](https://github.com/snomiao/copilot-continue.user.js)

MIT License - [snomiao](https://snomiao.com)
