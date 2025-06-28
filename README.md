# Copilot Continue

A browser userscript that automatically handles GitHub Copilot interruptions by clicking appropriate buttons when Copilot gets stuck or asks for permission to continue.

![Version](https://img.shields.io/badge/version-1.2.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Chrome%20%7C%20Firefox%20%7C%20Edge%20%7C%20Opera-lightgrey)

## Features

- Automatically detects when GitHub Copilot displays various interruption messages
- Handles multiple types of interruptions with appropriate button clicks:
  - Clicks "Continue" for workflow interruptions
  - Clicks "Grant" for permission requests
  - Clicks "Try Again" for service errors (with automatic retry limit and page refresh)
  - Handles "Language model unavailable" errors
- Works in VS Code web environments where Copilot is active
- Runs every second to check for interruptions
- Smart retry mechanism with fallback to page refresh after multiple failed attempts

## Detected Interruptions

This userscript automatically handles the following types of interruptions:

### Continue Actions
- "Copilot has been working on this problem for a while"
- "Run command in terminal."
- "Continue to iterate?"
- "Allow task run?"
- "Allow test run?"

### Permission Requests
- "To get more relevant Copilot Chat results, we need permission to read the contents of your repository on GitHub."

### Service Errors
- "The model unexpectedly did not return a response, which may indicate a service issue. Please report a bug."
- "Language model unavailable."

## Installation

1. Install a userscript manager extension for your browser:

   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Edge, Firefox, Safari)
   - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

2. Install this userscript by clicking on the raw script link:
   ```
   https://raw.githubusercontent.com/snomiao/copilot-continue.user.js/main/copilot-continue.user.js
   ```
   Or copy the script content into your userscript manager's editor.

## Usage

Once installed, the userscript automatically activates when it detects you're in a VS Code web environment (by checking for the presence of the `meta#vscode-workbench-auth-session` element).

No configuration or manual activation is required. The script will run in the background and automatically handle different types of Copilot interruptions by clicking the appropriate buttons.

## How It Works

The script:

1. Checks every second for specific interruption messages in rendered markdown content
2. When an interruption is detected, determines the appropriate action based on the message type:
   - **Continue**: Clicks "Continue" button for workflow interruptions
   - **Grant**: Clicks "Grant" button for permission requests  
   - **Try Again**: Clicks "Try Again" button for service errors (with retry counter)
   - **Retry**: Handles language model unavailability
3. Implements smart retry logic that refreshes the page after multiple failed "Try Again" attempts
4. Uses robust DOM selection to find the correct buttons in VS Code's interface

## Technical Details

### Error Handling
- **Try Again Limit**: After 3 failed "Try Again" attempts, the script automatically refreshes the page to recover from persistent errors
- **Button Detection**: Uses `findLast()` to select the most recent/relevant button when multiple buttons exist
- **Text Normalization**: Normalizes whitespace in text content for reliable pattern matching

### Supported Environments
- VS Code Web (vscode.dev, github.dev)
- Any web-based VS Code instance with Copilot integration
- Detection based on presence of VS Code workbench authentication metadata

### Performance
- Lightweight polling every 1000ms (1 second)
- Efficient DOM querying using CSS selectors
- Minimal memory footprint with proper cleanup

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[snomiao](https://snomiao.com)
