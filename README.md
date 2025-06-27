# Copilot Continue

A browser userscript that automatically clicks the "Continue" button in GitHub Copilot when it gets stuck or asks for permission to continue.

![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Chrome%20%7C%20Firefox%20%7C%20Edge%20%7C%20Opera-lightgrey)

## Features

- Automatically detects when GitHub Copilot displays common interruption messages
- Clicks the "Continue" button to keep Copilot running without manual intervention
- Works in VS Code web environments where Copilot is active
- Runs every second to check for interruptions

## Detected Interruptions

This userscript automatically handles the following interruptions:

- "Copilot has been working on this problem for a while"
- "Run command in terminal"
- "Allow task run?"

## Installation

1. Install a userscript manager extension for your browser:

   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Edge, Firefox, Safari)
   - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

2. Install this userscript by clicking on the raw script link or by copying the script content into your userscript manager's editor.

## Usage

Once installed, the userscript automatically activates when it detects you're in a VS Code web environment (by checking for the presence of the `meta#vscode-workbench-auth-session` element).

No configuration or manual activation is required. The script will run in the background and automatically click the "Continue" button when Copilot gets stuck.

## How It Works

The script:

1. Checks every second for specific interruption messages in rendered markdown content
2. When an interruption is detected, finds the "Continue" button
3. Automatically clicks the button to resume Copilot's operation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[snomiao](https://snomiao.com)
