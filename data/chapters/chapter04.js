window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter04",
  title: "第4章：侵略計画と恋愛感情のバグ",
  summary: "侵略計画の全貌と、リィナの感情バグが表面化する短いプレイ可能版。",
  start: "invasion_briefing",
  scenes: {
    // シーン1：侵略計画の全貌。
    // 目的：観察、浸透、支配または同族化という三段階を提示し、前章の甘さから不穏へ切り替える。
    invasion_briefing: {
      label: "侵略計画の全貌",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "第4章。研究室の中央に、地球の立体映像が浮かんでいた。" },
        { speaker: "", text: "青い星の上に、緑色の線が幾重にも走る。\nきれいなのに、どこか檻みたいだった。" },
        { speaker: "liina", text: "地球侵略計画、詳細説明を開始する。段階は三つ。観察、浸透、管理。" },
        { speaker: "protagonist", text: "管理って、支配ってこと？" },
        { speaker: "liina", text: "地球語では、たぶんそう。必要なら同族化処理も含む。" },
        { speaker: "", text: "リィナの声はいつも通り平らだった。\nだからこそ、胸の奥が冷える。" }
      ],
      next: "player_reaction"
    },

    player_reaction: {
      label: "主人公の反発",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "liina", text: "侵略成功後、君の生活環境は保護する。プリン供給も維持可能。" },
        { speaker: "protagonist", text: "そういう問題じゃない。地球は、リィナの管理物じゃない。" },
        { speaker: "", text: "言葉にした瞬間、地球観測ドームの空気が少しだけ重くなった。" },
        { speaker: "liina", text: "反発を確認。予測済み。でも、胸部圧迫が強い。原因不明。" }
      ],
      choices: [
        { text: "地球を傷つけないでほしいと言う", set: { freeWill: 1, affection: 1, invasionResistance: 1 }, next: "ask_spare_earth" },
        { text: "リィナ自身はどうしたいのか聞く", set: { trust: 1, freeWill: 1 }, next: "ask_liina_will" },
        { text: "侵略計画の詳細をもっと知る", set: { curiosity: 1, invasionKnowledge: 1 }, next: "ask_plan_detail" }
      ]
    },
    ask_spare_earth: {
      label: "反発：地球を守る言葉",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "地球を傷つけないでほしい。リィナが見た街も、公園も、誰かの日常なんだ。" },
        { speaker: "liina", text: "君の日常も含まれる。理解している。だから演算が遅い。" },
        { speaker: "", text: "リィナは地球から視線をそらした。\nアンテナの先が、細かく震えている。" }
      ],
      next: "emotion_diagnosis"
    },
    ask_liina_will: {
      label: "反発：意思を問う",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "命令じゃなくて、リィナ自身はどうしたいの？" },
        { speaker: "liina", text: "私自身。定義が曖昧。任務遂行個体に不要な概念。" },
        { speaker: "", text: "そう言いながら、リィナは答えを探すみたいに黙った。" }
      ],
      next: "emotion_diagnosis"
    },
    ask_plan_detail: {
      label: "反発：詳細確認",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "計画を知りたい。止めるにしても、知らないままじゃ動けない。" },
        { speaker: "liina", text: "合理的。君は抵抗対象として優秀。少し困る。" },
        { speaker: "", text: "侵略シミュレーションの光が、街の上に静かに降りていく。" }
      ],
      next: "emotion_diagnosis"
    },

    // シーン2：感情診断。
    // 目的：愛着、嫉妬、喪失不安を診断名として出し、リィナが認めない形でラブコメに戻す。
    emotion_diagnosis: {
      label: "感情診断",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "船内端末が勝手に点灯した。\nリィナの生体ログが、緑色の文字で流れ始める。" },
        { speaker: "", text: "診断候補。愛着形成、嫉妬反応、喪失不安。" },
        { speaker: "liina", text: "誤診。削除する。" },
        { speaker: "protagonist", text: "今、すごい勢いで画面を隠したよね。" },
        { speaker: "liina", text: "機密情報。君の閲覧権限はない。あと、見ないで。" },
        { speaker: "", text: "最後だけ、命令ではなくお願いに聞こえた。" }
      ],
      next: "verdia_call"
    },

    // シーン3：母星からの通信。
    // 目的：ヴェルディア司令の命令で、主人公が感情汚染の原因として危険視される。
    verdia_call: {
      label: "母星からの通信",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "警告音が鳴った。\n地球の映像が消え、代わりに鋭い緑の紋章が浮かぶ。" },
        { speaker: "", text: "母星通信。ヴェルディア司令からの直接回線。" },
        { speaker: "liina", text: "リィナ・シルヴェルグリーン、受信。" },
        { speaker: "", text: "冷たい声が、翻訳機を通して船内に響いた。" },
        { speaker: "", text: "『惑星地球は管理対象として有用。侵略計画を前倒しする』" },
        { speaker: "", text: "『感情汚染源である地球個体001は、必要に応じて処理または同族化せよ』" },
        { speaker: "protagonist", text: "処理、って……。" },
        { speaker: "liina", text: "通信終了。今の命令は、まだ実行しない。" }
      ],
      next: "dream_interference"
    },

    // シーン4：夢干渉イベント。
    // 目的：短い playable 版の山場として、普通の地球少女のリィナを見せる。
    dream_interference: {
      label: "夢干渉",
      background: "school_gate",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "その夜、夢の中で学校のチャイムが鳴った。" },
        { speaker: "", text: "校門の前に、アンテナのないリィナが立っている。\n制服風の服が、妙に自然だった。" },
        { speaker: "liina", text: "夢干渉テスト。君の記憶領域を確認中。" },
        { speaker: "protagonist", text: "普通に夢に出てきて普通じゃないこと言わないで。" },
        { speaker: "liina", text: "普通の地球少女として振る舞う。……おはよう、ユーザー。" },
        { speaker: "", text: "ぎこちない挨拶なのに、なぜか胸に残った。" }
      ],
      next: "jealousy_event"
    },

    // シーン5：嫉妬イベントと章ラスト。
    // 目的：主人公が友人と話す記憶にリィナが反応し、緊急命令で第5章へつなぐ。
    jealousy_event: {
      label: "未知の不快反応",
      background: "school_gate",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "夢の中の校門に、見覚えのある友人の影が現れた。" },
        { speaker: "", text: "その影がこちらに手を振る。\nリィナの発光ラインが、少しだけ強く光った。" },
        { speaker: "liina", text: "未知の不快反応。君が他の地球人と会話する映像で発生。" },
        { speaker: "protagonist", text: "それ、嫉妬って言うんじゃない？" },
        { speaker: "liina", text: "違う。観察対象の共有リスクに対する警戒。たぶん。" },
        { speaker: "", text: "夢が緑のノイズに裂けた。\n現実の研究室で、緊急命令が赤く点滅している。" },
        { speaker: "", text: "『地球侵略を前倒しで開始せよ』" },
        { speaker: "liina", text: "君は、私が地球を侵略したら、私を嫌う？" },
        { speaker: "", text: "第4章クリア。リィナの恋愛感情は、まだ本人の中でバグの名前をしていた。" }
      ],
      choices: [
        { text: "章選択へ戻る", set: { chapter04Clear: true }, next: "return_chapters" },
        { text: "タイトルへ戻る", set: { chapter04Clear: true }, next: "return_title" }
      ],
      ending: true
    },
    return_chapters: {
      label: "章選択へ戻ります",
      background: "earth_dome",
      lines: [
        { speaker: "", text: "章選択へ戻ります。" }
      ],
      action: "chapters",
      ending: true
    },
    return_title: {
      label: "タイトルへ戻ります",
      background: "earth_dome",
      lines: [
        { speaker: "", text: "タイトルへ戻ります。" }
      ],
      action: "title",
      ending: true
    }
  }
});
