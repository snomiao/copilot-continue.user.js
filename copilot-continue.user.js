// ==UserScript==
// @name        Copilot Continue
// @namespace   https://snomiao.com
// @match       *://*/*
// @grant       none
// @version     1.2.0
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

const actionMatchers = {
  cilckContinue: [
    /Copilot has been working on this problem for a while/,
    /Run command in the terminal/,
    /Continue to iterate\?/,
    /Allow task run\?/,
  ],
  clickGrant: [
    /To get more relevant Copilot Chat results, we need permission to read the contents of your repository on GitHub./,
  ],
  // clickTryAgain: [
  //   /The model unexpectedly did not return a response, which may indicate a service issue. Please report a bug./,
  // ],
  refresh: [
    /The model unexpectedly did not return a response, which may indicate a service issue. Please report a bug./,
  ],
};
const actions = {
  refresh: () => {
    location.href = location.href;
  },
  cilckContinue: () => {
    const btn = $$("a.monaco-button").findLast(
      (e) => e.textContent === "Continue"
    );
    if (!btn) return;
    btn.click();
  },
  clickGrant: () => {
    const btn = $$("a.monaco-button").findLast(
      (e) => e.textContent === "Grant"
    );
    if (!btn) return;
    btn.click();
  },
  clickTryAgain: () => {
    const btn = $$("a.monaco-button").findLast(
      (e) => e.textContent === "Try Again"
    );
    if (!btn) return;
    btn.click();
  },
};

const enable = !!document.querySelector("meta#vscode-workbench-auth-session");
if (enable) main();

function main() {
  const clear = useInterval(() => loop(), 1e3);
  return () => clear();
}
function loop() {
  const text = $$("div.rendered-markdown")
    .map((e) => e.innerText)
    .flatMap((e) => (e ? [e] : [])) // empty filter
    .map((e) => e.replace(/\s+/g, " "));

  for (const [action, matchers] of Object.entries(actionMatchers)) {
    if (text.some((s) => matchers.some((m) => s.match(m)))) {
      actions[action]?.();
      return;
    }
  }
}

function $$(sel) {
  return [...document.querySelectorAll(sel)];
}

function useInterval(...args) {
  const id = setInterval(...args);
  return () => clearInterval(id);
}
