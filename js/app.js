const STORAGE_KEY = "novel-1-save";
const AUTO_STORAGE_KEY = "novel-1-autosave";
const IMAGE_EXTENSIONS = ["webp", "png", "jpg", "jpeg"];

const state = {
  chapterId: "prologue",
  sceneId: "opening",
  lineIndex: 0,
  flags: {},
  currentScene: null,
};

const elements = {
  chapterTitle: document.querySelector("#chapterTitle"),
  sceneLabel: document.querySelector("#sceneLabel"),
  background: document.querySelector("#background"),
  characters: document.querySelector("#characters"),
  speaker: document.querySelector("#speaker"),
  text: document.querySelector("#text"),
  choices: document.querySelector("#choices"),
  nextButton: document.querySelector("#nextButton"),
  messageBox: document.querySelector("#messageBox"),
  menuButton: document.querySelector("#menuButton"),
  menuPanel: document.querySelector("#menuPanel"),
  saveButton: document.querySelector("#saveButton"),
  loadButton: document.querySelector("#loadButton"),
  autoLoadButton: document.querySelector("#autoLoadButton"),
  resetButton: document.querySelector("#resetButton"),
};

function chapter() {
  return window.NOVEL_SCENARIOS[state.chapterId];
}

function scene() {
  return chapter().scenes[state.sceneId];
}

function save(key = STORAGE_KEY) {
  localStorage.setItem(key, JSON.stringify({
    chapterId: state.chapterId,
    sceneId: state.sceneId,
    lineIndex: state.lineIndex,
    flags: state.flags,
    savedAt: new Date().toISOString(),
  }));
}

function load(key = STORAGE_KEY) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    alert(key === AUTO_STORAGE_KEY ? "オートセーブがまだありません。" : "セーブデータがまだありません。");
    return;
  }
  const data = JSON.parse(raw);
  Object.assign(state, {
    chapterId: data.chapterId,
    sceneId: data.sceneId,
    lineIndex: data.lineIndex || 0,
    flags: data.flags || {},
  });
  render();
}

function setScene(nextSceneId) {
  state.sceneId = nextSceneId;
  state.lineIndex = 0;
  render();
  save(AUTO_STORAGE_KEY);
}

function matchesFlagRule(rule) {
  return Object.entries(rule).every(([key, value]) => state.flags[key] === value);
}

function resolveBranch(current) {
  if (!current.branches) return current.next;
  const matched = current.branches.find((branch) => matchesFlagRule(branch.if || {}));
  return matched ? matched.next : current.next;
}

function next() {
  const current = scene();
  if (state.lineIndex < current.lines.length - 1) {
    state.lineIndex += 1;
    renderLine();
    save(AUTO_STORAGE_KEY);
    return;
  }
  const nextSceneId = resolveBranch(current);
  if (nextSceneId) setScene(nextSceneId);
}

function choose(choice) {
  Object.entries(choice.set || {}).forEach(([key, value]) => {
    state.flags[key] = typeof value === "number" && typeof state.flags[key] === "number"
      ? state.flags[key] + value
      : value;
  });
  setScene(choice.next);
}

function setBackground(backgroundId) {
  elements.background.className = "background placeholder-bg";
  elements.background.style.backgroundImage = "";
  if (!backgroundId) return;
  tryImage(`assets/backgrounds/${backgroundId}`, (url) => {
    elements.background.classList.remove("placeholder-bg");
    elements.background.style.backgroundImage = `linear-gradient(rgba(2,6,23,.18), rgba(2,6,23,.28)), url('${url}')`;
  });
}

function renderCharacters(characters = []) {
  elements.characters.innerHTML = "";
  characters.forEach((character) => {
    const node = document.createElement("div");
    node.className = `character ${character.position || "center"}`;
    node.textContent = character.name || character.id;
    tryImage(`assets/characters/${character.id}`, (url) => {
      node.classList.add("has-image");
      node.style.backgroundImage = `url('${url}')`;
    });
    elements.characters.appendChild(node);
  });
}

function tryImage(basePath, onFound) {
  IMAGE_EXTENSIONS.forEach((extension) => {
    const img = new Image();
    img.onload = () => onFound(`${basePath}.${extension}`);
    img.src = `${basePath}.${extension}`;
  });
}

function renderLine() {
  const current = scene();
  const line = current.lines[state.lineIndex];
  elements.speaker.textContent = line.speaker || "地の文";
  elements.text.textContent = line.text;
  elements.choices.innerHTML = "";

  const isLastLine = state.lineIndex === current.lines.length - 1;
  const canChoose = isLastLine && current.choices?.length;
  elements.nextButton.classList.toggle("hidden", Boolean(canChoose || current.ending));

  if (canChoose) {
    current.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = choice.text;
      button.addEventListener("click", () => choose(choice));
      elements.choices.appendChild(button);
    });
  }
}

function render() {
  const currentChapter = chapter();
  const current = scene();
  state.currentScene = current;
  elements.chapterTitle.textContent = currentChapter.title;
  elements.sceneLabel.textContent = current.label || state.sceneId;
  setBackground(current.background);
  renderCharacters(current.characters);
  renderLine();
}

function resetGame() {
  const currentChapter = chapter();
  Object.assign(state, {
    chapterId: currentChapter.id,
    sceneId: currentChapter.start,
    lineIndex: 0,
    flags: {},
  });
  render();
  save(AUTO_STORAGE_KEY);
}

function bindEvents() {
  elements.nextButton.addEventListener("click", next);
  elements.messageBox.addEventListener("click", (event) => {
    if (!event.target.closest("button") && !elements.nextButton.classList.contains("hidden")) next();
  });
  elements.menuButton.addEventListener("click", () => {
    const hidden = elements.menuPanel.classList.toggle("hidden");
    elements.menuButton.setAttribute("aria-expanded", String(!hidden));
  });
  elements.saveButton.addEventListener("click", () => { save(); alert("セーブしました。"); });
  elements.loadButton.addEventListener("click", () => load());
  elements.autoLoadButton.addEventListener("click", () => load(AUTO_STORAGE_KEY));
  elements.resetButton.addEventListener("click", resetGame);
}

bindEvents();
render();
