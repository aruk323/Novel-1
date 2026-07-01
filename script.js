const STORAGE_KEY = "novel-1-save";
const AUTO_STORAGE_KEY = "novel-1-autosave";
const IMAGE_EXTENSIONS = ["webp", "png", "jpg", "jpeg"];

const chapters = window.NOVEL_CHAPTERS || [];
const characters = window.NOVEL_CHARACTERS || {};
const backgrounds = window.NOVEL_BACKGROUNDS || {};

const state = {
  chapterId: chapters[0]?.id || "",
  sceneId: chapters[0]?.start || "",
  lineIndex: 0,
  flags: {},
  backlog: []
};

const $ = (selector) => document.querySelector(selector);
const elements = {
  titleScreen: $("#titleScreen"),
  chapterScreen: $("#chapterScreen"),
  gameScreen: $("#gameScreen"),
  startButton: $("#startButton"),
  continueButton: $("#continueButton"),
  chapterSelectButton: $("#chapterSelectButton"),
  chapterBackButton: $("#chapterBackButton"),
  chapterList: $("#chapterList"),
  chapterTitle: $("#chapterTitle"),
  sceneLabel: $("#sceneLabel"),
  background: $("#background"),
  characters: $("#characters"),
  speaker: $("#speaker"),
  text: $("#text"),
  choices: $("#choices"),
  nextButton: $("#nextButton"),
  messageBox: $("#messageBox"),
  menuButton: $("#menuButton"),
  menuPanel: $("#menuPanel"),
  saveButton: $("#saveButton"),
  loadButton: $("#loadButton"),
  backlogButton: $("#backlogButton"),
  chapterButton: $("#chapterButton"),
  titleButton: $("#titleButton"),
  backlogDialog: $("#backlogDialog"),
  closeBacklogButton: $("#closeBacklogButton"),
  backlogList: $("#backlogList")
};

function chapter() {
  return chapters.find((item) => item.id === state.chapterId) || chapters[0];
}

function scene() {
  return chapter().scenes[state.sceneId];
}

function characterName(idOrName) {
  if (!idOrName) return "地の文";
  return characters[idOrName]?.name || idOrName;
}

function showScreen(name) {
  elements.titleScreen.classList.toggle("hidden", name !== "title");
  elements.chapterScreen.classList.toggle("hidden", name !== "chapters");
  elements.gameScreen.classList.toggle("hidden", name !== "game");
  closeMenu();
}

function save(key = STORAGE_KEY) {
  localStorage.setItem(key, JSON.stringify({ ...state, savedAt: new Date().toISOString() }));
}

function load(key = STORAGE_KEY) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    alert("セーブデータがまだありません。");
    return false;
  }
  const data = JSON.parse(raw);
  Object.assign(state, {
    chapterId: data.chapterId,
    sceneId: data.sceneId,
    lineIndex: data.lineIndex || 0,
    flags: data.flags || {},
    backlog: data.backlog || []
  });
  showScreen("game");
  render();
  return true;
}

function startChapter(chapterId) {
  const selected = chapters.find((item) => item.id === chapterId) || chapters[0];
  Object.assign(state, {
    chapterId: selected.id,
    sceneId: selected.start,
    lineIndex: 0,
    flags: {},
    backlog: []
  });
  showScreen("game");
  render();
  addCurrentLineToBacklog();
  save(AUTO_STORAGE_KEY);
}

function setScene(nextSceneId) {
  state.sceneId = nextSceneId;
  state.lineIndex = 0;
  render();
  addCurrentLineToBacklog();
  save(AUTO_STORAGE_KEY);

  const current = scene();
  if (current.action === "title" || current.action === "chapters") {
    window.setTimeout(() => showScreen(current.action === "title" ? "title" : "chapters"), 550);
  }
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
    addCurrentLineToBacklog();
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
  state.backlog.push({ speaker: "選択", text: choice.text });
  setScene(choice.next);
}

function addCurrentLineToBacklog() {
  const line = scene().lines[state.lineIndex];
  const entry = { speaker: characterName(line.speaker), text: line.text };
  const last = state.backlog[state.backlog.length - 1];
  if (!last || last.speaker !== entry.speaker || last.text !== entry.text) {
    state.backlog.push(entry);
    state.backlog = state.backlog.slice(-80);
  }
}

function setBackground(backgroundId) {
  const background = backgrounds[backgroundId] || { file: backgroundId };
  elements.background.className = `background placeholder-bg ${background?.theme ? `bg-${background.theme}` : ""}`;
  elements.background.style.backgroundImage = "";
  if (!background?.file) return;
  tryImage(`assets/backgrounds/${background.file}`, (url) => {
    elements.background.classList.remove("placeholder-bg");
    elements.background.style.backgroundImage = `linear-gradient(rgba(2,6,23,.18), rgba(2,6,23,.28)), url('${url}')`;
  });
}

function renderCharacters(sceneCharacters = []) {
  elements.characters.innerHTML = "";
  sceneCharacters.forEach((sceneCharacter) => {
    const profile = characters[sceneCharacter.id] || {};
    const node = document.createElement("div");
    const expression = sceneCharacter.expression || "neutral";
    node.className = `character ${sceneCharacter.position || "center"} expression-${expression}`;
    node.dataset.expression = profile.expressions?.[expression] || expression;
    node.textContent = sceneCharacter.name || profile.name || sceneCharacter.id;
    tryImage(`assets/characters/${sceneCharacter.id}`, (url) => {
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
  elements.speaker.textContent = characterName(line.speaker);
  elements.text.textContent = line.text;
  elements.choices.innerHTML = "";

  const isLastLine = state.lineIndex === current.lines.length - 1;
  const canChoose = isLastLine && current.choices?.length;
  const isTerminalLine = isLastLine && current.ending && !canChoose;
  elements.nextButton.classList.toggle("hidden", Boolean(canChoose || isTerminalLine));
  elements.nextButton.textContent = isTerminalLine ? "終了" : "次へ";

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
  elements.chapterTitle.textContent = currentChapter.title;
  elements.sceneLabel.textContent = current.label || state.sceneId;
  setBackground(current.background);
  renderCharacters(current.characters || []);
  renderLine();
}

function renderChapterList() {
  elements.chapterList.innerHTML = "";
  chapters.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-item";
    button.innerHTML = `${item.title}<small>${item.summary || ""}</small>`;
    button.addEventListener("click", () => startChapter(item.id));
    elements.chapterList.appendChild(button);
  });
}

function openBacklog() {
  elements.backlogList.innerHTML = "";
  state.backlog.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "backlog-line";
    item.innerHTML = `<strong>${entry.speaker}</strong><br>${entry.text}`;
    elements.backlogList.appendChild(item);
  });
  elements.backlogDialog.showModal();
}

function closeMenu() {
  elements.menuPanel.classList.add("hidden");
  elements.menuButton.setAttribute("aria-expanded", "false");
}

function bindEvents() {
  elements.startButton.addEventListener("click", () => startChapter(chapters[0].id));
  elements.continueButton.addEventListener("click", () => load());
  elements.chapterSelectButton.addEventListener("click", () => showScreen("chapters"));
  elements.chapterBackButton.addEventListener("click", () => showScreen("title"));
  elements.nextButton.addEventListener("click", next);
  elements.messageBox.addEventListener("click", (event) => {
    if (!event.target.closest("button") && !elements.nextButton.classList.contains("hidden")) next();
  });
  elements.menuButton.addEventListener("click", () => {
    const hidden = elements.menuPanel.classList.toggle("hidden");
    elements.menuButton.setAttribute("aria-expanded", String(!hidden));
  });
  elements.saveButton.addEventListener("click", () => { save(); alert("セーブしました。"); closeMenu(); });
  elements.loadButton.addEventListener("click", () => { load(); closeMenu(); });
  elements.backlogButton.addEventListener("click", () => { openBacklog(); closeMenu(); });
  elements.chapterButton.addEventListener("click", () => showScreen("chapters"));
  elements.titleButton.addEventListener("click", () => showScreen("title"));
  elements.closeBacklogButton.addEventListener("click", () => elements.backlogDialog.close());
}

renderChapterList();
bindEvents();
showScreen("title");
