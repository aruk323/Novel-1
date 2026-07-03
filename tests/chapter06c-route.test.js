const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

function loadChapter(fileName) {
  const context = { window: { NOVEL_CHAPTERS: [] } };
  context.window.window = context.window;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "data", "chapters", fileName), "utf8"), context);
  return context.window.NOVEL_CHAPTERS.find((chapter) => chapter.id === "chapter06C");
}

function collectReachableScenes(chapter) {
  const reachable = new Set();
  const queue = [chapter.start];

  while (queue.length) {
    const sceneId = queue.shift();
    if (reachable.has(sceneId)) continue;
    reachable.add(sceneId);

    const scene = chapter.scenes[sceneId];
    assert.ok(scene, `Missing scene: ${sceneId}`);

    if (scene.next) queue.push(scene.next);
    for (const choice of scene.choices || []) {
      assert.ok(choice.next, `Choice in ${sceneId} must have a next scene`);
      queue.push(choice.next);
    }
  }

  return reachable;
}

function collectEndings(chapter) {
  return Object.entries(chapter.scenes)
    .filter(([, scene]) => scene.ending)
    .map(([sceneId]) => sceneId)
    .sort();
}

const chapter = loadChapter("chapter06c.js");
const uppercaseChapter = loadChapter("chapter06C.js");
assert.strictEqual(JSON.stringify(uppercaseChapter), JSON.stringify(chapter), "chapter06C.js should mirror chapter06c.js");

assert.strictEqual(chapter.id, "chapter06C");
assert.strictEqual(chapter.start, "route_start");

const reachable = collectReachableScenes(chapter);
const endings = collectEndings(chapter);
assert.strictEqual(JSON.stringify(endings), JSON.stringify(["ending03", "ending07", "ending08"]));
for (const endingId of endings) {
  assert.ok(reachable.has(endingId), `${endingId} must be reachable from route_start`);
}

const finalChoices = chapter.scenes.final_choice.choices;
assert.strictEqual(finalChoices.length, 3, "Chapter 6C must offer exactly C1/C2/C3 choices");
assert.strictEqual(JSON.stringify(finalChoices.map((choice) => choice.next)), JSON.stringify(["c1_invasion", "c2_bargain", "c3_rebellion"]));
assert.strictEqual(JSON.stringify(finalChoices.map((choice) => choice.effects.flags.ending_route)), JSON.stringify(["C1", "C2", "C3"]));

assert.strictEqual(finalChoices[0].effects.flags.chose_riina_over_earth, true);
assert.strictEqual(finalChoices[0].effects.flags.chose_earth_defense_bargain, false);
assert.strictEqual(finalChoices[0].effects.flags.failed_rebellion, false);
assert.strictEqual(chapter.scenes.c1_invasion.next, "ending03");

assert.strictEqual(finalChoices[1].effects.flags.chose_riina_over_earth, false);
assert.strictEqual(finalChoices[1].effects.flags.chose_earth_defense_bargain, true);
assert.strictEqual(finalChoices[1].effects.flags.failed_rebellion, false);
assert.strictEqual(chapter.scenes.c2_bargain.next, "ending07");

assert.strictEqual(finalChoices[2].effects.flags.chose_riina_over_earth, false);
assert.strictEqual(finalChoices[2].effects.flags.chose_earth_defense_bargain, false);
assert.strictEqual(finalChoices[2].effects.flags.failed_rebellion, true);
assert.strictEqual(chapter.scenes.c3_rebellion.next, "ending08");

const allowedActionScenes = new Set(["ending_to_title", "ending_to_chapters"]);
for (const [sceneId, scene] of Object.entries(chapter.scenes)) {
  assert.ok(!scene.chapter, `Chapter 6C must not jump to another chapter from ${sceneId}`);
  if (scene.action) assert.ok(allowedActionScenes.has(sceneId), `Unexpected action scene in Chapter 6C: ${sceneId}`);
}

console.log("chapter06c-route tests passed");
