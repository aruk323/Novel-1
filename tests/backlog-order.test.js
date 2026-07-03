const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

function createElement() {
  return {
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    style: {},
    dataset: {},
    children: [],
    textContent: "",
    innerHTML: "",
    appendChild(child) { this.children.push(child); return child; },
    append(...children) { this.children.push(...children); },
    replaceChildren(...children) { this.children = children; },
    addEventListener() {},
    setAttribute() {},
    showModal() { this.opened = true; },
    close() {},
    closest() { return null; }
  };
}

const elementsBySelector = new Map();
function elementFor(selector) {
  if (!elementsBySelector.has(selector)) elementsBySelector.set(selector, createElement());
  return elementsBySelector.get(selector);
}

const context = {
  console,
  window: {
    NOVEL_CHARACTERS: {},
    NOVEL_BACKGROUNDS: {},
    NOVEL_CHAPTER_INDEX: [],
    NOVEL_CHAPTERS: [],
    setTimeout(callback) { callback(); }
  },
  document: {
    querySelector(selector) { return elementFor(selector); },
    createElement() { return createElement(); }
  },
  localStorage: { setItem() {}, getItem() { return null; }, removeItem() {} },
  Image: function Image() {},
  alert(message) { throw new Error(message); }
};
context.window.document = context.document;
context.window.localStorage = context.localStorage;
context.window.Image = context.Image;
context.window.alert = context.alert;
context.window.window = context.window;

vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "script.js"), "utf8"), context);

const { state } = context.window.NOVEL_DEBUG;
state.backlog = [
  { speaker: "地の文", text: "最初の文章" },
  { speaker: "リィナ", text: "途中の文章" },
  { speaker: "ユーザー", text: "最新の文章" }
];

vm.runInContext("openBacklog()", context);
const backlogList = elementFor("#backlogList");
assert.strictEqual(backlogList.children.length, 3);
assert.match(backlogList.children[0].innerHTML, /最新の文章/);
assert.match(backlogList.children[2].innerHTML, /最初の文章/);
assert.strictEqual(state.backlog[0].text, "最初の文章");
assert.strictEqual(state.backlog[2].text, "最新の文章");

console.log("backlog-order tests passed");
