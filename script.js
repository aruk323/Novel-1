const STORAGE_KEY = "novel-1-save";
const AUTO_STORAGE_KEY = "novel-1-autosave";
const IMAGE_EXTENSIONS = ["webp", "png", "jpg", "jpeg"];

const characters = window.NOVEL_CHARACTERS || {};
const backgrounds = window.NOVEL_BACKGROUNDS || {};

const DEFAULT_PARAMS = {
  affection: 0,
  invasion: 0,
  dependency: 0,
  assimilation: 0,
  wariness: 0,
  earth_empathy: 0,
  free_will_respect: 0
};

const CHAPTER06_ROUTE_THRESHOLDS = {
  chapter06A: { affection: 50, invasion: 0, freeWillRespect: 20 },
  chapter06B: { affection: 30, invasion: 2, assimilation: 3 },
  chapter06D: { affection: 40, dependency: 5 },
  chapter06E: { affection: 30, invasion: 1, dependencyMin: 2, dependencyMax: 4, earthEmpathy: 5 }
};

const CHAPTER06_ROUTE_IDS = ["chapter06A", "chapter06B", "chapter06C", "chapter06D", "chapter06E"];

function getChapterIndex() {
  return window.NOVEL_CHAPTER_INDEX || [];
}

function getChapters() {
  const chapters = window.NOVEL_CHAPTERS || [];
  const index = getChapterIndex();
  if (!index.length) return chapters;
  return index
    .map((entry) => {
      const chapterItem = chapters.find((item) => item.id === entry.id);
      return chapterItem ? { ...chapterItem, ...entry } : null;
    })
    .filter((chapterItem) => chapterItem);
}

function defaultChapter() {
  const chapters = getChapters();
  return chapters.find((item) => item.id === "prologue") || chapters.find((item) => item.id === "chapter01") || chapters[0] || null;
}

const initialChapter = defaultChapter();

const state = {
  chapterId: initialChapter ? initialChapter.id : "",
  sceneId: initialChapter ? initialChapter.start : "",
  lineIndex: 0,
  flags: {},
  params: { ...DEFAULT_PARAMS },
  backlog: []
};

const $ = (selector) => document.querySelector(selector);

function on(element, eventName, handler) {
  if (!element) return;
  element.addEventListener(eventName, handler);
}

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
  assetOverlay: $("#assetOverlay"),
  speaker: $("#speaker"),
  text: $("#text"),
  choices: $("#choices"),
  nextButton: $("#nextButton"),
  messageBox: $("#messageBox"),
  menuButton: $("#menuButton"),
  menuPanel: $("#menuPanel"),
  saveButton: $("#saveButton"),
  loadButton: $("#loadButton"),
  paramsButton: $("#paramsButton"),
  backlogButton: $("#backlogButton"),
  chapterButton: $("#chapterButton"),
  titleButton: $("#titleButton"),
  backlogDialog: $("#backlogDialog"),
  closeBacklogButton: $("#closeBacklogButton"),
  backlogList: $("#backlogList"),
  paramsDialog: $("#paramsDialog"),
  closeParamsButton: $("#closeParamsButton"),
  paramsList: $("#paramsList"),
  flagsList: $("#flagsList")
};

function chapter(chapterId = state.chapterId) {
  const chapters = getChapters();
  return chapters.find((item) => item.id === chapterId) || defaultChapter();
}

function scene(sceneId = state.sceneId, chapterId = state.chapterId) {
  const currentChapter = chapter(chapterId);
  return currentChapter && currentChapter.scenes ? currentChapter.scenes[sceneId] || null : null;
}

function isValidSaveData(data) {
  return Boolean(data && data.chapterId && data.sceneId && scene(data.sceneId, data.chapterId));
}

function createDefaultParams() {
  return { ...DEFAULT_PARAMS };
}

function normalizeParams(params = {}) {
  return { ...createDefaultParams(), ...params };
}

function characterName(idOrName) {
  if (!idOrName) return "地の文";
  return characters[idOrName] && characters[idOrName].name ? characters[idOrName].name : idOrName;
}

function showScreen(name) {
  if (name === "chapters") renderChapterList();
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
  let data;
  try {
    data = JSON.parse(raw);
  } catch (error) {
    localStorage.removeItem(key);
    alert("セーブデータを読み込めませんでした。はじめから開始してください。");
    showScreen("title");
    return false;
  }
  if (!isValidSaveData(data)) {
    localStorage.removeItem(key);
    alert("セーブデータの章情報が古いため、はじめから開始してください。");
    showScreen("title");
    return false;
  }
  Object.assign(state, {
    chapterId: data.chapterId,
    sceneId: data.sceneId,
    lineIndex: Math.min(data.lineIndex || 0, scene(data.sceneId, data.chapterId).lines.length - 1),
    flags: data.flags || {},
    params: normalizeParams(data.params),
    backlog: data.backlog || []
  });
  showScreen("game");
  render();
  return true;
}

function startChapter(chapterId, options = {}) {
  const selected = chapter(chapterId);
  if (!selected) {
    alert("章データを読み込めませんでした。ページを再読み込みしてください。");
    return;
  }
  const preserveProgress = options.preserveProgress === true;
  Object.assign(state, {
    chapterId: selected.id,
    sceneId: selected.start,
    lineIndex: 0,
    flags: preserveProgress ? state.flags : {},
    params: preserveProgress ? state.params : createDefaultParams(),
    backlog: preserveProgress ? state.backlog : []
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
  if (!current) return;
  if (current.action === "chapter") {
    window.setTimeout(() => startChapter(current.chapter, { preserveProgress: true }), 550);
    return;
  }
  if (current.action === "chapter06Route") {
    window.setTimeout(() => startChapter(resolveChapter06Route(), { preserveProgress: true }), 550);
    return;
  }
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

function determineChapter06Route(params = {}, flags = {}) {
  const normalizedParams = normalizeParams(params);
  const thresholds = CHAPTER06_ROUTE_THRESHOLDS;
  const affection = normalizedParams.affection || 0;
  const invasion = normalizedParams.invasion || 0;
  const dependency = normalizedParams.dependency || 0;
  const assimilation = normalizedParams.assimilation || 0;
  const earthEmpathy = normalizedParams.earth_empathy || 0;
  const freeWillRespect = normalizedParams.free_will_respect || 0;

  const isChapter06D = affection >= thresholds.chapter06D.affection
    && dependency >= thresholds.chapter06D.dependency;
  if (isChapter06D) return "chapter06D";

  const isChapter06A = affection >= thresholds.chapter06A.affection
    && invasion === thresholds.chapter06A.invasion
    && (freeWillRespect >= thresholds.chapter06A.freeWillRespect || flags.respected_riina_free_will === true);
  if (isChapter06A) return "chapter06A";

  const isChapter06B = affection >= thresholds.chapter06B.affection
    && invasion === thresholds.chapter06B.invasion
    && assimilation >= thresholds.chapter06B.assimilation
    && flags.has_alienization_flag === true;
  if (isChapter06B) return "chapter06B";

  const isChapter06E = affection >= thresholds.chapter06E.affection
    && invasion === thresholds.chapter06E.invasion
    && dependency >= thresholds.chapter06E.dependencyMin
    && dependency <= thresholds.chapter06E.dependencyMax
    && (earthEmpathy >= thresholds.chapter06E.earthEmpathy || flags.has_earthling_path_flag === true);
  if (isChapter06E) return "chapter06E";

  return "chapter06C";
}

function resolveChapter06Route() {
  const flags = state.flags || {};
  if (CHAPTER06_ROUTE_IDS.includes(flags.chapter06_route)) return flags.chapter06_route;

  const route = determineChapter06Route(state.params, flags);
  state.flags.chapter06_route = route;
  return route;
}

function applyFlagSet(flags = {}) {
  Object.entries(flags).forEach(([key, value]) => {
    state.flags[key] = typeof value === "number" && typeof state.flags[key] === "number"
      ? state.flags[key] + value
      : value;
  });
}

function applyParamEffects(params = {}) {
  Object.entries(params).forEach(([key, value]) => {
    if (typeof value !== "number") return;
    const currentValue = typeof state.params[key] === "number" ? state.params[key] : 0;
    state.params[key] = currentValue + value;
  });
}

function applyChoiceEffects(effects = {}) {
  if (effects.params) applyParamEffects(effects.params);
  if (effects.flags) applyFlagSet(effects.flags);

  const directParamEffects = Object.fromEntries(
    Object.entries(effects).filter(([key, value]) => key !== "params" && key !== "flags" && typeof value === "number")
  );
  applyParamEffects(directParamEffects);
}

function next() {
  const current = scene();
  if (!current) {
    render();
    return;
  }
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
  applyFlagSet(choice.set || {});
  applyParamEffects(choice.params || {});
  applyChoiceEffects(choice.effects || {});
  state.backlog.push({ speaker: "選択", text: choice.text });
  setScene(choice.next);
}

function addCurrentLineToBacklog() {
  const current = scene();
  if (!current) return;
  const line = current.lines[state.lineIndex];
  const entry = { speaker: characterName(line.speaker), text: line.text };
  const last = state.backlog[state.backlog.length - 1];
  if (!last || last.speaker !== entry.speaker || last.text !== entry.text) {
    state.backlog.push(entry);
    state.backlog = state.backlog.slice(-80);
  }
}

function assetLabel(kind, value) {
  return `${kind}: ${value || "なし"}`;
}

function updateAssetOverlay(backgroundAsset, characterAssets = []) {
  const assets = [assetLabel("BG", backgroundAsset)];
  if (characterAssets.length) {
    assets.push(...characterAssets.map((asset) => assetLabel("CHR", asset)));
  } else {
    assets.push(assetLabel("CHR", "なし"));
  }
  elements.assetOverlay.replaceChildren(...assets.map((asset) => {
    const item = document.createElement("span");
    item.textContent = asset;
    return item;
  }));
}

function setBackground(backgroundId) {
  const background = backgrounds[backgroundId] || { file: backgroundId };
  elements.background.className = `background placeholder-bg ${background && background.theme ? `bg-${background.theme}` : ""}`;
  elements.background.style.backgroundImage = "";
  if (!background || !background.file) return backgroundId || "なし";
  tryImage(`assets/backgrounds/${background.file}`, (url) => {
    elements.background.classList.remove("placeholder-bg");
    elements.background.style.backgroundImage = `linear-gradient(rgba(2,6,23,.18), rgba(2,6,23,.28)), url('${url}')`;
  });
  return background.file;
}

function renderCharacters(sceneCharacters = []) {
  elements.characters.innerHTML = "";
  const characterAssets = [];
  sceneCharacters.forEach((sceneCharacter) => {
    const profile = characters[sceneCharacter.id] || {};
    const node = document.createElement("div");
    const expression = sceneCharacter.expression || "neutral";
    characterAssets.push(sceneCharacter.id);
    node.className = `character ${sceneCharacter.position || "center"} expression-${expression}`;
    node.dataset.expression = profile.expressions && profile.expressions[expression] ? profile.expressions[expression] : expression;
    node.textContent = sceneCharacter.name || profile.name || sceneCharacter.id;
    tryImage(`assets/characters/${sceneCharacter.id}`, (url) => {
      node.classList.add("has-image");
      node.style.backgroundImage = `url('${url}')`;
    });
    elements.characters.appendChild(node);
  });
  return characterAssets;
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
  if (!current) return;
  state.lineIndex = Math.min(state.lineIndex, current.lines.length - 1);
  const line = current.lines[state.lineIndex];
  elements.speaker.textContent = characterName(line.speaker);
  elements.text.textContent = line.text;
  elements.choices.innerHTML = "";

  const isLastLine = state.lineIndex === current.lines.length - 1;
  const canChoose = isLastLine && current.choices && current.choices.length;
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
  if (!currentChapter || !current) {
    alert("章データを読み込めませんでした。タイトルへ戻ります。");
    showScreen("title");
    return;
  }
  elements.chapterTitle.textContent = currentChapter.title;
  elements.sceneLabel.textContent = current.label || state.sceneId;
  const backgroundAsset = setBackground(current.background);
  const characterAssets = renderCharacters(current.characters || []);
  updateAssetOverlay(backgroundAsset, characterAssets);
  renderLine();
}

function renderChapterList() {
  const chapters = getChapters();
  elements.chapterList.innerHTML = "";
  if (!chapters.length) {
    elements.chapterList.textContent = "章データを読み込めませんでした。ページを再読み込みしてください。";
    return;
  }
  const chapter06Routes = chapters.filter((item) => item.group === "chapter06");
  chapters.filter((item) => item.group !== "chapter06").forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-item";
    button.innerHTML = `${item.title}<small>${item.summary || ""}</small>`;
    button.addEventListener("click", () => startChapter(item.id));
    elements.chapterList.appendChild(button);
  });
  if (chapter06Routes.length) {
    const group = document.createElement("details");
    group.className = "chapter-group";
    const summary = document.createElement("summary");
    summary.textContent = "第6章：分岐する銀緑の未来";
    group.appendChild(summary);
    chapter06Routes.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chapter-item";
      button.innerHTML = `${item.title}<small>${item.summary || ""}</small>`;
      button.addEventListener("click", () => startChapter(item.id));
      group.appendChild(button);
    });
    elements.chapterList.appendChild(group);
  }
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

function renderKeyValueList(container, values) {
  if (!container) return;
  container.innerHTML = "";
  const entries = Object.entries(values || {});
  if (!entries.length) {
    const item = document.createElement("div");
    item.className = "debug-row";
    item.textContent = "なし";
    container.appendChild(item);
    return;
  }
  entries
    .sort(([left], [right]) => left.localeCompare(right))
    .forEach(([key, value]) => {
      const item = document.createElement("div");
      item.className = "debug-row";
      const label = document.createElement("span");
      label.textContent = key;
      const number = document.createElement("strong");
      number.textContent = String(value);
      item.append(label, number);
      container.appendChild(item);
    });
}

function openParamsDebug() {
  renderKeyValueList(elements.paramsList, state.params);
  renderKeyValueList(elements.flagsList, state.flags);
  if (!elements.paramsDialog || typeof elements.paramsDialog.showModal !== "function") {
    alert(`params: ${JSON.stringify(state.params)}\nflags: ${JSON.stringify(state.flags)}`);
    return;
  }
  elements.paramsDialog.showModal();
}

function closeMenu() {
  if (!elements.menuPanel || !elements.menuButton) return;
  elements.menuPanel.classList.add("hidden");
  elements.menuButton.setAttribute("aria-expanded", "false");
}

function bindEvents() {
  on(elements.startButton, "click", () => {
    const selected = defaultChapter();
    startChapter(selected ? selected.id : undefined);
  });
  on(elements.continueButton, "click", () => load());
  on(elements.chapterSelectButton, "click", () => showScreen("chapters"));
  on(elements.chapterBackButton, "click", () => showScreen("title"));
  on(elements.nextButton, "click", next);
  on(elements.messageBox, "click", (event) => {
    if (!event.target.closest("button") && !elements.nextButton.classList.contains("hidden")) next();
  });
  on(elements.menuButton, "click", () => {
    const hidden = elements.menuPanel.classList.toggle("hidden");
    elements.menuButton.setAttribute("aria-expanded", String(!hidden));
  });
  on(elements.saveButton, "click", () => { save(); alert("セーブしました。"); closeMenu(); });
  on(elements.loadButton, "click", () => { load(); closeMenu(); });
  on(elements.paramsButton, "click", () => { openParamsDebug(); closeMenu(); });
  on(elements.backlogButton, "click", () => { openBacklog(); closeMenu(); });
  on(elements.chapterButton, "click", () => showScreen("chapters"));
  on(elements.titleButton, "click", () => showScreen("title"));
  on(elements.closeBacklogButton, "click", () => elements.backlogDialog.close());
  on(elements.closeParamsButton, "click", () => elements.paramsDialog.close());
}

window.NOVEL_DEBUG = {
  state,
  determineChapter06Route,
  resolveChapter06Route,
  save,
  load
};

renderChapterList();
bindEvents();
showScreen("title");
