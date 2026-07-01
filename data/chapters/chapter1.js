window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter1",
  title: "第1章：夜明けの手紙",
  summary: "消えた幼なじみから届いた手紙を追い、夜明けの町で最初の決断をする短いサンプル章。",
  start: "opening",
  scenes: {
    opening: {
      label: "駅前広場",
      background: "station_dawn",
      characters: [{ id: "haru", position: "center" }],
      lines: [
        { speaker: "haru", text: "……来たんだね。こんな朝早くに呼び出してごめん。" },
        { speaker: "protagonist", text: "ポストに入っていた古い封筒。差出人は、十年前に消えたはずの幼なじみだった。" },
        { speaker: "haru", text: "この町の時計台が鳴る前に、決めてほしいことがあるの。" }
      ],
      next: "firstChoice"
    },
    firstChoice: {
      label: "最初の選択",
      background: "station_dawn",
      characters: [{ id: "haru", position: "center" }],
      lines: [
        { speaker: "haru", text: "一緒に真相を探してくれる？　それとも、ここで忘れる？" }
      ],
      choices: [
        { text: "ハルと真相を探す", set: { searchTruth: true, trustHaru: 1 }, next: "promise" },
        { text: "まずは事情を聞く", set: { cautious: true, trustHaru: 0 }, next: "question" }
      ]
    },
    promise: {
      label: "約束",
      background: "clocktower",
      characters: [{ id: "haru", position: "center" }],
      lines: [
        { speaker: "protagonist", text: "もちろん。一人で抱え込ませたりしない。" },
        { speaker: "haru", text: "ありがとう。じゃあ、時計台へ行こう。すべてはそこから始まったの。" }
      ],
      next: "endingCheck"
    },
    question: {
      label: "疑問",
      background: "station_dawn",
      characters: [{ id: "haru", position: "center" }],
      lines: [
        { speaker: "protagonist", text: "いきなり信じろって言われても難しい。まず、何が起きているのか教えて。" },
        { speaker: "haru", text: "うん。その慎重さが、きっと必要になる。" }
      ],
      next: "endingCheck"
    },
    endingCheck: {
      label: "分岐確認",
      background: "town",
      lines: [
        { speaker: "", text: "夜明けの風が、眠る町の屋根を撫でていく。あなたの選択は、ここから続く長い物語の形を少しだけ変えた。" }
      ],
      branches: [
        { if: { searchTruth: true }, next: "endingA" },
        { if: { cautious: true }, next: "endingB" }
      ],
      next: "endingB"
    },
    endingA: {
      label: "サンプル終了A",
      background: "clocktower",
      lines: [
        { speaker: "", text: "サンプル終了：あなたはハルと共に、長編の第一歩を踏み出した。続きの章を追加すれば、この先へ物語を伸ばせます。" }
      ],
      ending: true
    },
    endingB: {
      label: "サンプル終了B",
      background: "station_dawn",
      lines: [
        { speaker: "", text: "サンプル終了：あなたは慎重に事情を聞くことにした。選択肢とフラグで、同じ章の中にも別ルートを作れます。" }
      ],
      ending: true
    }
  }
});
