const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

function createElement() {
  return {
    classList: { add() {}, remove() {}, toggle() {} },
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
    showModal() {},
    close() {}
  };
}

function createContext() {
  const storage = {};
  const context = {
    console,
    window: {
      NOVEL_CHARACTERS: {},
      NOVEL_BACKGROUNDS: {},
      NOVEL_CHAPTER_INDEX: [
        { id: "prologue" },
        { id: "chapter05" },
        { id: "chapter06A" },
        { id: "chapter06B" },
        { id: "chapter06C" },
        { id: "chapter06D" },
        { id: "chapter06E" }
      ],
      NOVEL_CHAPTERS: [
        { id: "prologue", title: "Prologue", start: "start", scenes: { start: { lines: [{ text: "start" }] } } },
        { id: "chapter05", title: "Chapter 5", start: "route", scenes: { route: { lines: [{ text: "route" }], action: "chapter06Route" } } },
        ...["A", "B", "C", "D", "E"].map((id) => ({
          id: `chapter06${id}`,
          title: `Chapter 6${id}`,
          start: "start",
          scenes: { start: { lines: [{ text: id }] } }
        }))
      ],
      setTimeout(callback) { callback(); }
    },
    document: {
      querySelector() { return createElement(); },
      createElement() { return createElement(); }
    },
    localStorage: {
      setItem(key, value) { storage[key] = String(value); },
      getItem(key) { return Object.prototype.hasOwnProperty.call(storage, key) ? storage[key] : null; },
      removeItem(key) { delete storage[key]; }
    },
    Image: function Image() {},
    alert(message) { throw new Error(message); }
  };
  context.window.document = context.document;
  context.window.localStorage = context.localStorage;
  context.window.Image = context.Image;
  context.window.alert = context.alert;
  context.window.window = context.window;
  return context;
}

const context = createContext();
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "script.js"), "utf8"), context);
const { determineChapter06Route, resolveChapter06Route, state, save, load } = context.window.NOVEL_DEBUG;

assert.strictEqual(determineChapter06Route({ affection: 50, invasion: 0, free_will_respect: 20 }, {}), "chapter06A");
assert.strictEqual(determineChapter06Route({ affection: 30, invasion: 2, assimilation: 3 }, { has_alienization_flag: true }), "chapter06B");
assert.strictEqual(determineChapter06Route({ invasion: 2 }, {}), "chapter06C");
assert.strictEqual(determineChapter06Route({ affection: 40, dependency: 5 }, {}), "chapter06D");
assert.strictEqual(determineChapter06Route({ affection: 30, invasion: 1, dependency: 2, earth_empathy: 5 }, {}), "chapter06E");
assert.strictEqual(determineChapter06Route({}, {}), "chapter06C");

assert.strictEqual(determineChapter06Route({ affection: 60, invasion: 0, dependency: 5, free_will_respect: 20 }, {}), "chapter06D");
assert.strictEqual(determineChapter06Route({ affection: 50, invasion: 0, assimilation: 3, free_will_respect: 20 }, { has_alienization_flag: true }), "chapter06A");
assert.strictEqual(determineChapter06Route({ affection: 35, invasion: 2, dependency: 3, assimilation: 3, earth_empathy: 5 }, { has_alienization_flag: true }), "chapter06B");

Object.assign(state, {
  chapterId: "chapter05",
  sceneId: "route",
  lineIndex: 0,
  flags: { respected_riina_free_will: true },
  params: { affection: 50, invasion: 0 },
  backlog: []
});
assert.strictEqual(resolveChapter06Route(), "chapter06A");
save();
state.flags = {};
state.params = {};
assert.strictEqual(load(), true);
assert.strictEqual(state.flags.chapter06_route, "chapter06A");
assert.strictEqual(resolveChapter06Route(), "chapter06A");

console.log("route-resolution tests passed");
