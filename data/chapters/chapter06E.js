window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06E",
  title: "第6章E：彼女が地球を選ぶ日",
  summary: "第6章E：彼女が地球を選ぶ日の仮実装。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "第6章E 仮実装",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "第6章E：彼女が地球を選ぶ日 に入りました。" },
        { speaker: "", text: "これは第6章Eの仮テキストです。本番本文はまだ実装していません。" }
      ],
      choices: [
        { text: "アンテナ能力を封印する（仮）", effects: { flags: { sealed_antenna_power: true } }, next: "ending04" },
        { text: "恋愛侵略AIを誤作動させる（仮）", effects: { flags: { romcom_ai_bug: true } }, next: "ending09" }
      ]
    },
    ending04: {
      label: "エンディング4：はじめての笑顔",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング4：はじめての笑顔 に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    },
    ending09: {
      label: "エンディング9：バグった恋愛侵略",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング9：バグった恋愛侵略 に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    }
  }
});
