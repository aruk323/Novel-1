window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter05",
  title: "第5章：同族化実験と心の暴走",
  summary: "同族化装置、制御コード暴走、侵略艦隊の接近を描く短いプレイ可能版。",
  start: "accelerated_invasion",
  scenes: {
    // シーン1：侵略前倒し。
    // 目的：第4章の命令を受け、同族化実験へ進む理由を短く提示する。
    accelerated_invasion: {
      label: "侵略前倒し",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "第5章。地球観測ドームの空は、いつもより暗く見えた。" },
        { speaker: "", text: "青い地球の上に、母星からの命令文が重なっている。\n『先遣個体リィナ。地球人サンプルを洗脳、または同族化せよ』" },
        { speaker: "liina", text: "侵略開始が前倒しされた。君の処理を、今ここで決定する必要がある。" },
        { speaker: "protagonist", text: "処理って言い方、やめてほしい。" },
        { speaker: "liina", text: "訂正する。君の未来を、今ここで決定する必要がある。" },
        { speaker: "", text: "言い直しても、怖さはあまり減らなかった。\nけれどリィナのアンテナは、小さく震えていた。" }
      ],
      next: "assimilation_device"
    },

    // シーン2：同族化装置。
    // 目的：利点と危険性を説明し、重要選択肢へつなぐ。
    assimilation_device: {
      label: "同族化装置",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "研究室の奥で、緑色のカプセルが目を覚ます。\n液体のような光が、内側からゆっくり脈打っていた。" },
        { speaker: "liina", text: "同族化装置。成功すれば、君は宇宙環境に適応できる。私の種族に近づく。" },
        { speaker: "protagonist", text: "失敗したら？" },
        { speaker: "liina", text: "記憶、意思、感情の一部が母星規格へ調整される可能性がある。" },
        { speaker: "protagonist", text: "それ、洗脳だよね。" },
        { speaker: "liina", text: "否定不能。だから、私は迷っている。" },
        { speaker: "", text: "リィナはカプセルではなく、こちらを見ていた。\n観察者の目ではない。答えを待つ目だった。" }
      ],
      choices: [
        { text: "リィナを信じて装置に入る", set: { assimilationInterest: 1, affection: 1 }, next: "reaction_trust" },
        { text: "絶対に拒否する", set: { brainwashReject: 1, freeWill: 1 }, next: "reaction_refuse" },
        { text: "洗脳なしなら受け入れる", set: { brainwashReject: 1, assimilationInterest: 1, trust: 1 }, next: "reaction_condition" },
        { text: "リィナも地球人になればいいと言う", set: { earthHumanize: 1, affection: 1 }, next: "reaction_earth" }
      ]
    },

    // 選択肢リアクション：信じる。
    reaction_trust: {
      label: "返答：信じる",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "リィナを信じる。怖いけど、リィナが止めてくれるなら入る。" },
        { speaker: "liina", text: "信頼を確認。胸部に高負荷。船内気圧の問題ではない可能性。" },
        { speaker: "", text: "リィナの指が、カプセルの起動キーの上で止まった。" }
      ],
      next: "control_code_rampage"
    },

    // 選択肢リアクション：拒否。
    reaction_refuse: {
      label: "返答：拒否",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "絶対に拒否する。リィナが相手でも、自分の意思は渡せない。" },
        { speaker: "liina", text: "拒否を記録。君の意思を優先する。……優先したい。" },
        { speaker: "", text: "その一言に、緑色の警告光が鋭く反応した。" }
      ],
      next: "control_code_rampage"
    },

    // 選択肢リアクション：条件付き受容。
    reaction_condition: {
      label: "返答：洗脳なし",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "洗脳なしなら受け入れる。リィナと近くなること自体は、嫌じゃない。" },
        { speaker: "liina", text: "条件を確認。君の自由意思を保護した同族化。成功率は低い。だが、試す価値がある。" },
        { speaker: "", text: "アンテナの光が、不安定に揺れながらも温かく見えた。" }
      ],
      next: "control_code_rampage"
    },

    // 選択肢リアクション：地球人化。
    reaction_earth: {
      label: "返答：地球人になればいい",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "リィナも地球人になればいい。侵略者じゃなくて、隣にいる誰かとして。" },
        { speaker: "liina", text: "私が、地球人に。非合理。だが、演算が停止するほど不快ではない。" },
        { speaker: "", text: "リィナは視線を逸らした。\n発光ラインだけが、返事の代わりに明滅している。" }
      ],
      next: "control_code_rampage"
    },

    // シーン4：制御コード暴走。
    // 目的：母星命令に逆らう代償と、リィナの揺れを可視化する。
    control_code_rampage: {
      label: "制御コード暴走",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "警告音が鳴った。\nリィナの首元から、緑色の光が血管のように走る。" },
        { speaker: "liina", text: "制御コード、強制介入。命令文が上書きされる。対象を処理せよ。対象を保持せよ。対象を――" },
        { speaker: "protagonist", text: "リィナ！" },
        { speaker: "liina", text: "近づかないで。今の私は、君を守る命令と、君を変える命令を区別できない。" },
        { speaker: "", text: "アンテナの先から、細い緑色のビームが漏れた。\n肌の奥が、少しだけ熱を帯びる。" }
      ],
      next: "call_liina"
    },

    // シーン5：主人公の呼びかけ。
    // 目的：短いプレイ版の山場として、リィナ自身の意思を引き出す。
    call_liina: {
      label: "命令ではない声",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "気づけば、地球観測ドームに戻っていた。\n窓の向こう、青い星の縁に小さな影が増えていく。" },
        { speaker: "", text: "母星艦隊。\nその言葉が、説明される前に理解できた。" },
        { speaker: "protagonist", text: "リィナ。命令じゃなくて、リィナ自身はどうしたい？" },
        { speaker: "liina", text: "私は……君を失いたくない。これは命令ではない。たぶん、私の意思。" },
        { speaker: "", text: "リィナのアンテナから漏れていた光が、少しだけ弱まる。\nけれど艦隊の影は、地球へ近づき続けていた。" }
      ],
      next: "chapter_clear"
    },

    // シーン6：第5章の締め。
    // 目的：第6章分岐への導線を置きつつ、プレイ可能版として章選択とタイトルへ戻れるようにする。
    chapter_clear: {
      label: "銀緑の分岐点",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "リィナのUFOは、地球と艦隊の間に浮かんでいた。" },
        { speaker: "liina", text: "第6章で、選択が必要になる。地球を守るか、私と同じになるか、別の道を作るか。" },
        { speaker: "protagonist", text: "その前に、リィナが壊れない方法を探そう。" },
        { speaker: "liina", text: "同意。君の提案を、最重要作戦として登録する。" },
        { speaker: "", text: "第5章クリア。リィナの心の暴走は、まだ止まっていない。" }
      ],
      choices: [
        { text: "章選択へ戻る", set: { chapter05Clear: true }, next: "return_chapters" },
        { text: "タイトルへ戻る", set: { chapter05Clear: true }, next: "return_title" }
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
