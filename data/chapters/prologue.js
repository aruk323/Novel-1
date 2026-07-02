window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "prologue",
  title: "プロローグ：銀緑の夜",
  summary: "平凡な夜、銀緑の光に導かれて主人公がリィナのUFOへ攫われる短い導入章。",
  start: "night_signal",
  scenes: {
    night_signal: {
      label: "いつもの夜の終わり",
      background: "earth_night",
      characters: [],
      lines: [
        { speaker: "", text: "夜の帰り道は、いつもと同じはずだった。\nコンビニの看板、遠くの車の音、スマホに残った未読通知。" },
        { speaker: "", text: "けれど、空だけが違っていた。\n雲の奥で、緑色の光が静かに瞬いた。" },
        { speaker: "protagonist", text: "……流れ星、にしては止まってるな。" },
        { speaker: "", text: "見上げた瞬間、足元の影が薄くなった。\n街灯ではない光が、背中から降ってくる。" }
      ],
      next: "abduction_choice"
    },

    abduction_choice: {
      label: "銀緑の光",
      background: "earth_night",
      characters: [],
      lines: [
        { speaker: "", text: "音はない。\nただ、体が軽くなる。" },
        { speaker: "", text: "逃げるべきだと頭では分かるのに、緑の光から目を離せなかった。" }
      ],
      choices: [
        { text: "とにかく走る", set: { initialAlert: 1 }, next: "try_run" },
        { text: "スマホで撮ろうとする", set: { initialCuriosity: 1 }, next: "try_record" },
        { text: "声を出して助けを呼ぶ", set: { initialHonest: 1 }, next: "try_call" }
      ]
    },

    try_run: {
      label: "逃走失敗",
      background: "earth_night",
      characters: [],
      lines: [
        { speaker: "protagonist", text: "冗談じゃない。こんなの絶対に近づいたらダメなやつだ。" },
        { speaker: "", text: "一歩踏み出した。\nけれど靴底は地面を離れ、体だけがふわりと持ち上がる。" },
        { speaker: "", text: "全力疾走の予定は、空中足踏みという情けない結果に変わった。" }
      ],
      next: "first_contact"
    },

    try_record: {
      label: "記録失敗",
      background: "earth_night",
      characters: [],
      lines: [
        { speaker: "protagonist", text: "せめて証拠を……って、指が震えてる。" },
        { speaker: "", text: "カメラを向けた画面には、緑のノイズだけが映った。\n次の瞬間、スマホが勝手に『観察対象』と表示する。" },
        { speaker: "protagonist", text: "スマホまでそっち側になるな。" }
      ],
      next: "first_contact"
    },

    try_call: {
      label: "声は届かない",
      background: "earth_night",
      characters: [],
      lines: [
        { speaker: "protagonist", text: "誰か――" },
        { speaker: "", text: "叫んだはずの声は、緑の光に吸われた。\n周りの窓は一つも開かない。" },
        { speaker: "", text: "世界から、自分だけが切り取られていく。" }
      ],
      next: "first_contact"
    },

    first_contact: {
      label: "先遣調査員",
      background: "ship_hangar",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "気づくと、足元は銀色の床だった。\n壁には血管のように緑の光が走っている。" },
        { speaker: "liina", text: "転送成功。地球個体、損傷なし。" },
        { speaker: "", text: "目の前にいた少女は、銀色の髪と緑の瞳をしていた。\n頭のアンテナが、淡く光っている。" },
        { speaker: "protagonist", text: "……ここ、どこ。君は誰。あと、帰して。" },
        { speaker: "liina", text: "質問が多い。処理順を指定して。" },
        { speaker: "protagonist", text: "全部緊急なんだけど。" }
      ],
      next: "liina_intro"
    },

    liina_intro: {
      label: "観察対象001",
      background: "ship_hangar",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "liina", text: "私はリィナ・シルヴェルグリーン。地球侵略先遣調査員。" },
        { speaker: "protagonist", text: "自己紹介に入れていい肩書きじゃない。" },
        { speaker: "liina", text: "君は地球個体001。観察、会話、生活反応の記録対象。" },
        { speaker: "", text: "リィナは淡々と言った。\n冗談を言う顔ではない。そもそも表情がほとんど動かない。" },
        { speaker: "liina", text: "安心して。初日は解剖しない。" },
        { speaker: "protagonist", text: "初日以外の予定が怖すぎる。" }
      ],
      next: "to_room"
    },

    to_room: {
      label: "隔離部屋へ",
      background: "corridor",
      characters: [{ id: "liina", position: "right", expression: "neutral" }],
      lines: [
        { speaker: "", text: "白銀の通路を歩かされる。\n床の緑のラインが、こちらの歩幅に合わせて明滅した。" },
        { speaker: "liina", text: "君の部屋を用意した。地球人の生存に必要な設備を推測している。" },
        { speaker: "protagonist", text: "推測って言葉、生活環境に使うと不安になるな。" },
        { speaker: "liina", text: "不安反応を確認。初期警戒度、良好。" },
        { speaker: "protagonist", text: "良好じゃない。" },
        { speaker: "", text: "扉が開く。\n知らない部屋の中で、銀色の天井だけが静かに光っていた。" }
      ],
      next: "next_chapter"
    },

    next_chapter: {
      label: "第1章へ",
      background: "isolation_room",
      characters: [],
      lines: [
        { speaker: "", text: "こうして、いつもの夜は終わった。\nそして、観察対象としての朝が始まる。" }
      ],
      action: "chapter",
      chapter: "chapter01"
    }
  }
});
