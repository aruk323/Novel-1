window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06D",
  title: "第6章D：君だけが地球",
  summary: "第6章D：君だけが地球の仮実装。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "第6章D 仮実装",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "第6章D：君だけが地球 に入りました。" },
        { speaker: "", text: "これは第6章Dの仮テキストです。本番本文はまだ実装していません。" }
      ],
      next: "ending05"
    },
    ending05: {
      label: "エンディング5：私だけの地球人",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング5：私だけの地球人 に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    }
  }
});
