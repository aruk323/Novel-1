window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06B",
  title: "第6章B：銀緑の同族",
  summary: "第6章B：銀緑の同族の仮実装。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "第6章B 仮実装",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "第6章B：銀緑の同族 に入りました。" },
        { speaker: "", text: "これは第6章Bの仮テキストです。本番本文はまだ実装していません。" }
      ],
      choices: [
        { text: "洗脳を受け入れる（仮）", effects: { flags: { accepted_mind_control: true } }, next: "ending02" },
        { text: "自由意志を保つ（仮）", effects: { flags: { refused_mind_control: true } }, next: "ending06" }
      ]
    },
    ending02: {
      label: "エンディング2：あなたも侵略者",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング2：あなたも侵略者 に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    },
    ending06: {
      label: "エンディング6：一緒に宇宙へ",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング6：一緒に宇宙へ に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    }
  }
});
