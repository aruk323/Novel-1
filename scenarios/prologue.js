window.NOVEL_SCENARIOS = window.NOVEL_SCENARIOS || {};

window.NOVEL_SCENARIOS.prologue = {
  id: "prologue",
  title: "プロローグ：夜明けの手紙",
  start: "opening",
  scenes: {
    opening: {
      label: "駅前広場",
      background: "station-dawn",
      characters: [{ id: "haru", name: "ハル", position: "center" }],
      lines: [
        { speaker: "ハル", text: "……来たんだね。こんな朝早くに呼び出してごめん。" },
        { speaker: "あなた", text: "ポストに入っていた古い封筒。差出人は、十年前に消えたはずの幼なじみだった。" },
        { speaker: "ハル", text: "この町の時計台が鳴る前に、決めてほしいことがあるの。" }
      ],
      next: "firstChoice"
    },
    firstChoice: {
      label: "最初の選択",
      background: "station-dawn",
      characters: [{ id: "haru", name: "ハル", position: "center" }],
      lines: [
        { speaker: "ハル", text: "一緒に真相を探してくれる？ それとも、ここで忘れる？" }
      ],
      choices: [
        { text: "ハルと真相を探す", set: { searchTruth: true, trustHaru: 1 }, next: "promise" },
        { text: "まずは事情を聞く", set: { cautious: true, trustHaru: 0 }, next: "question" }
      ]
    },
    promise: {
      label: "約束",
      background: "clocktower",
      characters: [{ id: "haru", name: "ハル", position: "center" }],
      lines: [
        { speaker: "あなた", text: "もちろん。一人で抱え込ませたりしない。" },
        { speaker: "ハル", text: "ありがとう。じゃあ、時計台へ行こう。すべてはそこから始まったの。" }
      ],
      next: "endingCheck"
    },
    question: {
      label: "疑問",
      background: "station-dawn",
      characters: [{ id: "haru", name: "ハル", position: "center" }],
      lines: [
        { speaker: "あなた", text: "いきなり信じろって言われても難しい。まず、何が起きているのか教えて。" },
        { speaker: "ハル", text: "うん。その慎重さが、きっと必要になる。" }
      ],
      next: "endingCheck"
    },
    endingCheck: {
      label: "分岐確認",
      lines: [
        { speaker: "", text: "プロローグの終わり。ここではフラグによってエンディングが変わります。" }
      ],
      branches: [
        { if: { searchTruth: true }, next: "endingA" },
        { if: { cautious: true }, next: "endingB" }
      ],
      next: "endingB"
    },
    endingA: {
      label: "Ending A",
      background: "clocktower",
      lines: [
        { speaker: "", text: "Ending A：あなたはハルと共に、長い物語の扉を開いた。" }
      ],
      ending: true
    },
    endingB: {
      label: "Ending B",
      background: "station-dawn",
      lines: [
        { speaker: "", text: "Ending B：あなたは慎重に、隠された事情を聞くことにした。" }
      ],
      ending: true
    }
  }
};
