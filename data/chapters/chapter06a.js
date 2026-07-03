window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06A",
  title: "第6章A：侵略者の反逆",
  summary: "第6章A：侵略者の反逆の仮実装。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "第6章A 仮実装",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "第6章A：侵略者の反逆 に入りました。" },
        { speaker: "", text: "これは第6章Aの仮テキストです。本番本文はまだ実装していません。" }
      ],
      next: "ending01"
    },
    ending01: {
      label: "エンディング1：未知の約束",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング1：未知の約束 に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    }
  }
});
