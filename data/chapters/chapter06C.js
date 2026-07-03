window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06C",
  title: "第6章C：地球制圧作戦",
  summary: "第6章C：地球制圧作戦の仮実装。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "第6章C 仮実装",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "第6章C：地球制圧作戦 に入りました。" },
        { speaker: "", text: "これは第6章Cの仮テキストです。本番本文はまだ実装していません。" }
      ],
      choices: [
        { text: "地球よりリィナを選ぶ（仮）", effects: { flags: { chose_riina_over_earth: true } }, next: "ending03" },
        { text: "地球を守る取引を選ぶ（仮）", effects: { flags: { chose_earth_defense_bargain: true } }, next: "ending07" },
        { text: "反逆に失敗する（仮）", effects: { flags: { failed_rebellion: true } }, next: "ending08" }
      ]
    },
    ending03: {
      label: "エンディング3：地球より君がいい",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング3：地球より君がいい に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    },
    ending07: {
      label: "エンディング7：さよなら、侵略者",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング7：さよなら、侵略者 に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    },
    ending08: {
      label: "エンディング8：私は、宇宙人。",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "エンディング8：私は、宇宙人。 に到達しました。" },
        { speaker: "", text: "これはエンディング本文を書く前の仮テキストです。" }
      ],
      ending: true
    }
  }
});
