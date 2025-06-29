# Copilot Continue

Automatically handles GitHub Copilot interruptions by clicking "Continue", "Grant", or "Try Again" buttons when Copilot gets stuck.

![Version](https://img.shields.io/badge/version-1.2.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Chrome%20%7C%20Firefox%20%7C%20Edge%20%7C%20Opera-lightgrey)

## What It Does

- ✅ Clicks "Continue" when Copilot stops working
- ✅ Clicks "Grant" for permission requests
- ✅ Clicks "Try Again" for service errors (auto-refreshes after 3 attempts)
- ✅ Works automatically in VS Code web environments
- ✅ Smart retry mechanism with fallback recovery

## Quick Install

1. **Install a userscript manager:**
   - [Tampermonkey](https://www.tampermonkey.net/) (recommended)
   - [Violentmonkey](https://violentmonkey.github.io/)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

2. **Install the script:**
   ```
   https://raw.githubusercontent.com/snomiao/copilot-continue.user.js/main/copilot-continue.user.js
   ```

That's it! Works automatically in VS Code web environments.

## How It Works

The script automatically activates in VS Code web environments and:

1. Monitors for Copilot interruption messages every second
2. Clicks the appropriate button based on the message type
3. Implements smart retry logic for persistent errors
4. Refreshes the page after 3 failed attempts

## Supported Messages

**Continue Actions:**

- "Copilot has been working on this problem for a while"
- "Run command in terminal" / "Continue to iterate?"
- "Allow task run?" / "Allow test run?"

**Permission Requests:**

- Repository access permissions → clicks "Grant"

**Service Errors:**

- "Model unexpectedly did not return a response" → clicks "Try Again"
- "Language model unavailable" → automatic retry

## Chrome Extension

Also available as a Chrome extension for easier installation and management!

### Quick Install

#### From Source

1. Clone this repository
2. Open `chrome://extensions/` → Enable "Developer mode"
3. Click "Load unpacked" → Select this folder

#### From Chrome Web Store

_Coming soon_

### Extension Features

- ✅ "Continue" for workflow interruptions
- ✅ "Grant" for permission requests
- ✅ "Try Again" for service errors (auto-refresh after 3 attempts)
- ✅ Language model unavailable messages
- Works automatically - no setup needed
- Check extension popup to verify it's active

### Development

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

### Troubleshooting

**Not working?**

- Ensure you're in VS Code web environment (vscode.dev, github.dev)
- Check extension popup shows "Active in VS Code"
- Look for `[Copilot Continue]` messages in browser console (F12)
- Reload extension and refresh VS Code tab

**Common Issues:**

- "Not in VS Code environment" → Use VS Code in browser
- No action when stuck → Check console for errors
- Icon not visible → Pin extension to toolbar

### Permissions & Privacy

- **activeTab**: For popup communication
- **host_permissions**: To run on VS Code sites
- **No data collection** - everything runs locally
- **No external requests** - completely offline operation

## Support

- [GitHub Issues](https://github.com/snomiao/copilot-continue.user.js/issues)
- For userscript issues: check your userscript manager console
- For extension issues: check browser console in VS Code tabs

## License

MIT License - [snomiao](https://snomiao.com)
