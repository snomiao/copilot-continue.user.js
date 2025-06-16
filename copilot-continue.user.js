// ==UserScript==
// @name        Copilot Continue
// @namespace   https://snomiao.com
// @match       *://*/*
// @grant       none
// @version     1.1.1
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
  const clear = useInterval(() => clicks(), 1e3);
  return () => clear();
}
function clicks(){
  clickTryAgain() ||     clickContinue()
}

function clickTryAgain(){
  const stucked = $$("div.rendered-markdown")
    .map((e) => e.innerText)
    .flatMap((e) => (e ? [e] : [])) // empty filter
    .map(e=>e.replace(/\s+/g,' '))
    .findLast(s=> false||
        s.match("The model unexpectedly did not return a response, which may indicate a service issue. Please report a bug.")
              );
  if(!stucked) return;

  //
  // const btn = $$("a.monaco-button").findLast(
  //   (e) => e.textContent === "Try Again"
  // );
  // if (!btn) return;
  // btn.click();

  // Seems not working by click try again
  // So reload page when try again.
  location.href = location.href

  return true;
}

function clickContinue() {
  const stucked = $$("div.rendered-markdown")
    .map((e) => e.innerText)
    .flatMap((e) => (e ? [e] : [])) // empty filter
    .map(e=>e.replace(/\s+/g,' '))
    .findLast(
      (s) =>
        false ||
        s.match(/Copilot has been working on this problem for a while/) ||
        s.match(/Run command in terminal/) ||
        s.match(/Continue to iterate\?/) ||
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
