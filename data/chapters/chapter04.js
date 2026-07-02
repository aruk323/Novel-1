window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter04",
  title: "第4章：侵略計画と恋愛感情のバグ",
  summary: "侵略計画の全貌、母星命令、夢干渉、嫉妬と不安が表面化する第4章本番用。",
  start: "invasion_briefing",
  scenes: {
    // シーン1：侵略計画の全貌。
    // 目的：第3章の余韻から一転して、観察・浸透・管理という侵略手順を明示する。
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
      next: "plan_simulation"
    },

    // シーン2：侵略シミュレーション。
    // 目的：侵略を抽象説明で終わらせず、学校や街の日常が管理対象になる怖さを見せる。
    plan_simulation: {
      label: "侵略シミュレーション",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "地球の模型が拡大され、街の区画が浮かぶ。\n学校、商店街、公園、コンビニ。" },
        { speaker: "liina", text: "第一段階。通信網と補給網を観察。第二段階。生活圏へ無害個体として浸透。" },
        { speaker: "protagonist", text: "無害個体って、リィナのこと？" },
        { speaker: "liina", text: "否定したいが、偽装装置使用中の私は該当する。プリン購入にも成功した。" },
        { speaker: "", text: "少しだけラブコメみたいな単語が混ざる。\nけれど、映像の街には緑の包囲線が引かれていた。" },
        { speaker: "liina", text: "第三段階。抵抗意思を低下させ、地球文明を母星規格へ再編する。" }
      ],
      next: "player_reaction"
    },

    // シーン3：主人公の反発。
    // 目的：プレイヤーに第4章の態度を選ばせ、今後の分岐用フラグを積む。
    player_reaction: {
      label: "主人公の反発",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "liina", text: "侵略成功後、君の生活環境は保護する。プリン供給も維持可能。" },
        { speaker: "protagonist", text: "そういう問題じゃない。地球は、リィナの管理物じゃない。" },
        { speaker: "", text: "言葉にした瞬間、地球観測ドームの空気が少しだけ重くなった。" },
        { speaker: "liina", text: "反発を確認。予測済み。でも、胸部圧迫が強い。原因不明。" }
      ],
      choices: [
        { text: "地球を傷つけないでほしいと言う", set: { freeWill: 1, affection: 1, invasionResistance: 1 }, next: "distance_protocol" },
        { text: "リィナ自身はどうしたいのか聞く", set: { trust: 1, freeWill: 1 }, next: "distance_protocol" },
        { text: "侵略計画の詳細をもっと知る", set: { curiosity: 1, invasionKnowledge: 1 }, next: "distance_protocol" },
        { text: "リィナの命令なら従うのか尋ねる", set: { caution: 1, commandDoubt: 1 }, next: "distance_protocol" }
      ]
    },

    // シーン4：距離を置く。
    // 目的：反発後に主人公とリィナの距離を作り、リィナの不調を「観察不足」と言い訳させる。
    distance_protocol: {
      label: "距離を置く",
      background: "isolation_room",
      characters: [],
      lines: [
        { speaker: "", text: "その後、リィナは主人公用の部屋へ戻るよう告げた。" },
        { speaker: "", text: "ドアが閉まる。\n白銀の壁に、緑の発光ラインだけが静かに脈打っていた。" },
        { speaker: "protagonist", text: "……リィナは、本気で地球を侵略するつもりなんだ。" },
        { speaker: "", text: "分かっていたはずなのに、胸のどこかが勝手に痛む。" },
        { speaker: "", text: "壁のスピーカーから、小さなノイズが入った。" },
        { speaker: "liina", text: "観察不足により、私の演算効率が低下している。これは業務上の問題。" },
        { speaker: "protagonist", text: "寂しいって言えばいいのに。" },
        { speaker: "liina", text: "違う。業務上の問題。たぶん。" }
      ],
      next: "emotion_diagnosis"
    },

    // シーン5：感情診断。
    // 目的：船内AIの診断形式で、愛着・嫉妬・喪失不安を提示する。
    emotion_diagnosis: {
      label: "感情診断",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "研究室へ呼び戻されると、船内端末が勝手に点灯していた。" },
        { speaker: "", text: "リィナの生体ログが、緑色の文字で流れ始める。" },
        { speaker: "", text: "診断候補。愛着形成、嫉妬反応、喪失不安。" },
        { speaker: "liina", text: "誤診。削除する。" },
        { speaker: "protagonist", text: "今、すごい勢いで画面を隠したよね。" },
        { speaker: "liina", text: "機密情報。君の閲覧権限はない。あと、見ないで。" }
      ],
      choices: [
        { text: "愛着形成をからかう", set: { affection: 1, dependence: 1 }, next: "diagnosis_after" },
        { text: "無理に消さなくていいと言う", set: { trust: 1, freeWill: 1 }, next: "diagnosis_after" },
        { text: "診断ログを詳しく読む", set: { curiosity: 1, emotionKnowledge: 1 }, next: "diagnosis_after" }
      ]
    },

    // シーン6：診断後の余波。
    // 目的：選択後の反応を短く入れ、リィナが感情を直接認めないまま揺れる様子を見せる。
    diagnosis_after: {
      label: "診断後の余波",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "こちらの言葉を受けて、リィナの指が端末の削除ボタンの上で止まった。" },
        { speaker: "liina", text: "感情ログは任務ノイズ。保存する価値は低い。" },
        { speaker: "protagonist", text: "でも、消したくないんでしょ。" },
        { speaker: "liina", text: "削除保留。理由は、追加検証が必要だから。" },
        { speaker: "", text: "発光ラインが一度だけ明るくなる。\nたぶん、それが彼女なりの肯定だった。" }
      ],
      next: "verdia_call"
    },

    // シーン7：母星からの通信。
    // 目的：ヴェルディア司令から侵略前倒しと主人公処理の可能性を突きつける。
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
        { speaker: "liina", text: "通信継続中。君は黙って。心拍数が乱れる。私の。" }
      ],
      next: "command_choice"
    },

    // シーン8：命令への返答。
    // 目的：母星命令に対するプレイヤーの立ち位置を選ばせ、洗脳拒否・同族化興味などの伏線を置く。
    command_choice: {
      label: "命令への返答",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "通信紋章はまだ消えない。\n司令の沈黙が、次の命令を待っている。" },
        { speaker: "liina", text: "君の発言は推奨しない。母星に記録される。" },
        { speaker: "protagonist", text: "それでも、何も言わないよりはいい。" }
      ],
      choices: [
        { text: "自分の意思は奪わせない", set: { brainwashReject: 1, freeWill: 1 }, next: "command_after" },
        { text: "リィナを感情汚染なんて呼ばせない", set: { affection: 1, trust: 1 }, next: "command_after" },
        { text: "同族化について条件を聞く", set: { curiosity: 1, assimilationInterest: 1 }, next: "command_after" },
        { text: "リィナの判断を信じる", set: { trust: 1, dependence: 1 }, next: "command_after" }
      ]
    },

    // シーン9：命令後の沈黙。
    // 目的：リィナが命令に逆らいきれない危うさと、それでも即時実行しない選択を見せる。
    command_after: {
      label: "命令後の沈黙",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "こちらの言葉が通信ログへ吸い込まれる。\n次の瞬間、回線は一方的に切断された。" },
        { speaker: "liina", text: "上位命令を受領。即時実行は、保留。" },
        { speaker: "protagonist", text: "保留できるの？" },
        { speaker: "liina", text: "短時間なら。制御コードに負荷がかかる。問題ない。" },
        { speaker: "", text: "問題ない、と言う声は少しだけ硬い。\nアンテナの光が、規則正しすぎる間隔で点滅していた。" },
        { speaker: "liina", text: "君の記憶領域を確認する。地球を守りたい理由を、データで見る。" }
      ],
      next: "dream_interference"
    },

    // シーン10：夢干渉。
    // 目的：主人公の地球日常をリィナに体験させ、普通の少女として隣にいる可能性を見せる。
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
        { speaker: "", text: "校門をくぐると、見慣れた廊下が続いていた。" },
        { speaker: "", text: "誰かの笑い声。チャイム。購買のパンの匂い。\nどれも、侵略計画の項目にはならないものばかりだ。" },
        { speaker: "liina", text: "地球人は、非効率な記憶を多く保存する。" },
        { speaker: "protagonist", text: "非効率でも、大事なんだよ。" },
        { speaker: "liina", text: "大事。削除優先度が低い、では足りない言葉。" }
      ],
      next: "jealousy_event"
    },

    // シーン11：嫉妬と緊急命令。
    // 目的：友人の記憶にリィナが反応し、侵略前倒し命令と問いで第5章へつなぐ。
    jealousy_event: {
      label: "未知の不快反応",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "場面は夜の公園へ変わった。\n第3章で見た遊具が、夢の中で静かに揺れている。" },
        { speaker: "", text: "そこへ、見覚えのある友人の影が現れた。\nその影がこちらに手を振る。" },
        { speaker: "liina", text: "未知の不快反応。君が他の地球人と会話する映像で発生。" },
        { speaker: "protagonist", text: "それ、嫉妬って言うんじゃない？" },
        { speaker: "liina", text: "違う。観察対象の共有リスクに対する警戒。たぶん。" },
        { speaker: "", text: "夢が緑のノイズに裂けた。\n現実の研究室で、緊急命令が赤く点滅している。" },
        { speaker: "", text: "『地球侵略を前倒しで開始せよ』" },
        { speaker: "liina", text: "君は、私が地球を侵略したら、私を嫌う？" }
      ],
      choices: [
        { text: "嫌いになる前に止める", set: { freeWill: 1, invasionResistance: 1 }, next: "chapter_clear" },
        { text: "リィナが選ぶまで隣にいる", set: { affection: 1, trust: 1 }, next: "chapter_clear" },
        { text: "洗脳や支配なら拒む", set: { brainwashReject: 1, caution: 1 }, next: "chapter_clear" },
        { text: "同族化でも自由意思は残してほしい", set: { assimilationInterest: 1, freeWill: 1 }, next: "chapter_clear" }
      ]
    },

    // シーン12：第4章の締め。
    // 目的：第5章の同族化実験と侵略前倒しへ接続しつつ、既存の章選択・タイトル導線を保つ。
    chapter_clear: {
      label: "侵略開始前夜",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "リィナはすぐには答えなかった。" },
        { speaker: "", text: "地球観測ドームの向こうで、青い星が静かに回っている。\nその上に、母星からの侵略開始コードが重なっていた。" },
        { speaker: "liina", text: "君を失いたくない、という反応がある。だが、命令は地球を管理しろと言っている。" },
        { speaker: "protagonist", text: "リィナは、どっちを選びたい？" },
        { speaker: "liina", text: "まだ分からない。だから、次の実験で確認する。" },
        { speaker: "", text: "同族化実験室の扉が、遠くで音もなく開いた。" },
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
