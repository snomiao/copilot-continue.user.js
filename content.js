/*
 * Copilot Continue - Chrome Extension Content Script
 * 
 * This is a lightweight wrapper that executes the main userscript
 * functionality to avoid code duplication (DRY principle).
 * 
 * The main logic is kept in copilot-continue.user.js and loaded here.
 */

// Message listener for popup communication
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'checkVSCode') {
    const isVSCode = !!document.querySelector("meta#vscode-workbench-auth-session");
    sendResponse(isVSCode);
  }
  return true;
});

// The actual userscript logic is loaded via manifest.json
console.log('[Copilot Continue] Chrome extension content script loaded');
