// ==UserScript==
// @name        Copilot Continue
// @namespace   https://snomiao.com
// @match       *://*/*
// @grant       none
// @version     1.1.0
// @author      snomiao
// @description Auto-clicks the "Continue" button when GitHub Copilot gets stuck
// @homepage    https://github.com/snomiao/copilot-continue.user.js
// @supportURL  https://github.com/snomiao/copilot-continue.user.js/issues
// @updateURL   https://raw.githubusercontent.com/snomiao/copilot-continue.user.js/main/copilot-continue.user.js
// @downloadURL https://raw.githubusercontent.com/snomiao/copilot-continue.user.js/main/copilot-continue.user.js
// @license     MIT
// @compatible  chrome
// @compatible  firefox
// @compatible  edge
// @compatible  opera
// ==/UserScript==

// webhook...update =   fetch(globalThis.GM_info.script.downloadURL)

/* 
 * Copilot Continue - A userscript to automatically continue GitHub Copilot
 * 
 * This script automatically clicks the "Continue" button when GitHub Copilot
 * shows interruption messages like:
 * - "Copilot has been working on this problem for a while"
 * - "Run command in the terminal"
 * - "Allow task run?"
 * 
 * The script runs in VS Code web environments and checks for interruptions every second.
 */

const enable = !!document.querySelector("meta#vscode-workbench-auth-session");

if (enable) main()

function main() {
  const clear = useInterval(() => clickContinue, 1e3);
  return () => clear();
}

function clickContinue() {
  const stucked = $$("div.rendered-markdown")
    .map((e) => e.innerText)
    .flatMap((e) => (e ? [e] : [])) // empty filter
    .findLast(
      (s) =>
        false ||
        s.match(/Copilot has been working on this problem for a while/) ||
        s.match(/Run command in the terminal/) ||
        s.match(/Allow task run\?/)
    );
  if (!stucked) return;
  const btn = $$("a.monaco-button").findLast(
    (e) => e.textContent === "Continue"
  );
  if (!btn) return;
  btn.click();
  return true;
}

function $$(sel) {
  return [...document.querySelectorAll(sel)];
}

function useInterval(...args) {
  const id = setInterval(...args);
  return () => clearInterval(id);
}
