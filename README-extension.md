# Copilot Continue Chrome Extension

A Chrome extension that automatically clicks the "Continue" button when GitHub Copilot gets stuck in VS Code web environments.

## Installation

### From Source (Development)

1. **Download or clone this repository**
   ```bash
   git clone https://github.com/snomiao/copilot-continue.user.js.git
   cd copilot-continue.user.js
   ```

2. **Add icons (optional but recommended)**
   - Add PNG icon files to the `icons/` directory
   - Required sizes: 16x16, 32x32, 48x48, and 128x128 pixels
   - See `icons/README.md` for details

3. **Load the extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top right)
   - Click "Load unpacked"
   - Select the folder containing this extension

### From Chrome Web Store

*Coming soon - extension will be published to the Chrome Web Store*

## Features

The extension automatically handles these GitHub Copilot interruptions:

- ✅ "Copilot has been working on this problem for a while"
- ✅ "Run command in terminal" prompts
- ✅ "Continue to iterate?" questions
- ✅ "Allow task run?" permissions
- ✅ "Allow test run?" permissions
- ✅ Repository permission requests ("Grant" button)
- ✅ "Try Again" for service errors (with automatic page refresh after 3 attempts)
- ✅ Language model unavailable messages

## How It Works

1. **Detection**: The extension only activates in VS Code web environments (detected by checking for the VS Code workbench authentication session meta tag)

2. **Monitoring**: It scans for interruption messages every second by checking the text content of rendered markdown elements

3. **Action**: When an interruption is detected, it automatically clicks the appropriate button:
   - "Continue" for most interruptions
   - "Grant" for permission requests
   - "Try Again" for service errors (with retry limit)

4. **Logging**: All actions are logged to the browser console with the `[Copilot Continue]` prefix

## Usage

1. **Install the extension** (see installation steps above)
2. **Open VS Code in your browser** (vscode.dev, github.dev, or code.visualstudio.com)
3. **Use GitHub Copilot as usual** - the extension works automatically in the background
4. **Check the extension popup** to see if it's active (click the extension icon in the toolbar)

## Development

### File Structure

```
├── manifest.json       # Extension configuration (Manifest V3)
├── content.js          # Main content script (converted from userscript)
├── popup.html          # Extension popup interface
├── popup.js            # Popup functionality
├── icons/              # Extension icons (16, 32, 48, 128px)
├── package.json        # Development metadata
└── README-extension.md # This file
```

### Making Changes

1. **Edit the content script**: Modify `content.js` to change the extension behavior
2. **Update the popup**: Edit `popup.html` and `popup.js` for the interface
3. **Reload the extension**: Go to `chrome://extensions/` and click the reload button for this extension
4. **Test changes**: Refresh any VS Code tabs to apply the updated content script

### Building for Distribution

```bash
# Create a zip file for Chrome Web Store submission
npm run package
```

## Permissions

The extension requests these permissions:

- **activeTab**: To communicate with the popup and check the current tab
- **host_permissions for all URLs**: To run on any VS Code web environment

## Privacy

- **No data collection**: The extension doesn't collect or transmit any user data
- **Local operation only**: All processing happens locally in your browser
- **No external requests**: The extension doesn't make any network requests

## Compatibility

- **Chrome**: Version 88+ (Manifest V3 support)
- **Edge**: Version 88+ (Chromium-based)
- **Opera**: Version 74+ (Chromium-based)
- **VS Code environments**: vscode.dev, github.dev, code.visualstudio.com

## Troubleshooting

### Extension not working?

1. **Check if you're in VS Code**: The extension only works in VS Code web environments
2. **Look at the popup**: Click the extension icon to see if it shows "Active in VS Code"
3. **Check the console**: Look for `[Copilot Continue]` messages in the browser console (F12)
4. **Reload the extension**: Go to `chrome://extensions/` and reload the extension
5. **Refresh the VS Code tab**: After reloading the extension, refresh your VS Code tab

### Common issues:

- **"Not in VS Code environment"**: Make sure you're using VS Code in a browser (vscode.dev, github.dev, etc.)
- **No action when Copilot is stuck**: Check the browser console for error messages
- **Extension icon not visible**: Make sure you've pinned the extension to the toolbar

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly in a VS Code web environment
5. Submit a pull request

## License

MIT License - see the main repository for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/snomiao/copilot-continue.user.js/issues)
- **Discussions**: [GitHub Discussions](https://github.com/snomiao/copilot-continue.user.js/discussions)
- **Original userscript**: [Userscript version](https://github.com/snomiao/copilot-continue.user.js)
