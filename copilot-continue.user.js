// ==UserScript==
// @name        Copilot Continue
// @namespace   https://snomiao.com
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 2025/5/16 13:00:33
// ==/UserScript==

// webhook...update =   fetch(globalThis.GM_info.script.downloadURL)

const enable = !!document.querySelector("meta#vscode-workbench-auth-session");

if (enable) window.addEventListener("load", main);

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
