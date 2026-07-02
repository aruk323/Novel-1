window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter05",
  title: "第5章：同族化実験と心の暴走",
  summary: "同族化実験、制御コード暴走、侵略艦隊接近を描く第5章本番用。",
  start: "accelerated_invasion",
  scenes: {
    // シーン1：侵略前倒し。
    // 目的：母星命令の切迫感を提示し、リィナが主人公を守りたい反応を隠せなくなっていることを見せる。
    accelerated_invasion: {
      label: "侵略前倒し",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "地球観測ドームの空は、いつもより暗く見えた。" },
        { speaker: "", text: "青い星の上に、母星からの命令文が重なっている。\n『先遣個体リィナ。地球人サンプルを洗脳、または同族化せよ』" },
        { speaker: "liina", text: "侵略開始が前倒しされた。君の処理を、今ここで決定する必要がある。" },
        { speaker: "protagonist", text: "処理って言い方、やめてほしい。" },
        { speaker: "liina", text: "訂正する。君の未来を、今ここで決定する必要がある。" },
        { speaker: "", text: "言い直しても、怖さはあまり減らなかった。\nけれどリィナのアンテナは、小さく震えていた。" },
        { speaker: "liina", text: "私は正常。震えは通信負荷の影響。たぶん。" }
      ],
      next: "verdia_order"
    },

    // シーン2：ヴェルディア司令の命令。
    // 目的：母星側の圧力と、リィナの自由意志を奪う制御コードの存在を具体化する。
    verdia_order: {
      label: "司令の声",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "研究室に移動すると、壁一面に緑色の通信波形が広がった。" },
        { speaker: "", text: "そこから、リィナとは違う冷たい声が落ちてくる。" },
        { speaker: "ヴェルディア司令", text: "先遣個体リィナ。観察期間は終了した。地球個体001を母星規格へ調整せよ。" },
        { speaker: "liina", text: "調整方法の選択権を要求する。対象の精神破損は、観察価値を低下させる。" },
        { speaker: "ヴェルディア司令", text: "感情による遅延を検出。制御コードを強化する。" },
        { speaker: "", text: "リィナの首元に、細い緑の線が走った。\n表情は変わらない。けれど指先だけが、わずかに丸まる。" },
        { speaker: "protagonist", text: "今の、痛いんじゃないの？" },
        { speaker: "liina", text: "痛覚ではない。命令の形をした圧力。問題ない、とは言い切れない。" }
      ],
      next: "assimilation_device"
    },

    // シーン3：同族化装置。
    // 目的：同族化の利点と危険を説明し、洗脳・自由意思・地球人化の軸を選ばせる。
    assimilation_device: {
      label: "同族化装置",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
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
        { text: "リィナを信じて装置に入る", set: { assimilationInterest: 1, affection: 1, trust: 1 }, next: "device_reaction_trust" },
        { text: "絶対に拒否する", set: { brainwashReject: 1, freeWill: 1 }, next: "device_reaction_refuse" },
        { text: "洗脳なしなら受け入れる", set: { brainwashReject: 1, assimilationInterest: 1, trust: 1 }, next: "device_reaction_condition" },
        { text: "リィナも地球人になればいいと言う", set: { earthHumanize: 1, affection: 1 }, next: "device_reaction_earth" }
      ]
    },

    // 選択肢リアクション：信じる。
    // 目的：同族化への受容と信頼を示し、リィナの保護欲を強める。
    device_reaction_trust: {
      label: "返答：信じる",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "リィナを信じる。怖いけど、リィナが止めてくれるなら入る。" },
        { speaker: "liina", text: "信頼を確認。胸部に高負荷。船内気圧の問題ではない可能性。" },
        { speaker: "protagonist", text: "無理なら、無理って言って。" },
        { speaker: "liina", text: "無理ではない。君を壊さない方法を、最優先で検索する。" },
        { speaker: "", text: "リィナの指が、カプセルの起動キーの上で止まった。" }
      ],
      next: "pre_scan"
    },

    // 選択肢リアクション：拒否。
    // 目的：自由意思を守る姿勢を明確にし、リィナが命令と主人公の意思の間で揺れる状態を作る。
    device_reaction_refuse: {
      label: "返答：拒否",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "絶対に拒否する。リィナが相手でも、自分の意思は渡せない。" },
        { speaker: "liina", text: "拒否を記録。君の意思を優先する。……優先したい。" },
        { speaker: "protagonist", text: "その言い方、引っかかる。" },
        { speaker: "liina", text: "私にも引っかかっている。制御コードが、君の拒否をエラー扱いしている。" },
        { speaker: "", text: "その一言に、緑色の警告光が鋭く反応した。" }
      ],
      next: "pre_scan"
    },

    // 選択肢リアクション：条件付き受容。
    // 目的：洗脳拒否と同族化興味を同時に立て、真エンド寄りの条件を印象付ける。
    device_reaction_condition: {
      label: "返答：洗脳なし",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "洗脳なしなら受け入れる。リィナと近くなること自体は、嫌じゃない。" },
        { speaker: "liina", text: "条件を確認。君の自由意思を保護した同族化。成功率は低い。だが、試す価値がある。" },
        { speaker: "protagonist", text: "低くても、ゼロじゃないなら。" },
        { speaker: "liina", text: "君は時々、非効率な希望を当然のように提出する。処理に困る。" },
        { speaker: "", text: "アンテナの光が、不安定に揺れながらも温かく見えた。" }
      ],
      next: "pre_scan"
    },

    // 選択肢リアクション：地球人化。
    // 目的：リィナが地球側へ変わる可能性を示し、地球人化フラグを物語上でも意味づける。
    device_reaction_earth: {
      label: "返答：地球人になればいい",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "リィナも地球人になればいい。侵略者じゃなくて、隣にいる誰かとして。" },
        { speaker: "liina", text: "私が、地球人に。非合理。だが、演算が停止するほど不快ではない。" },
        { speaker: "protagonist", text: "不快じゃないなら、少し考えて。" },
        { speaker: "liina", text: "考える。危険な要求だ。私の中の命令が、静かではなくなる。" },
        { speaker: "", text: "リィナは視線を逸らした。\n発光ラインだけが、返事の代わりに明滅している。" }
      ],
      next: "pre_scan"
    },

    // シーン4：事前スキャン。
    // 目的：身体的な変化の前兆を出し、主人公が受けるリスクをスマホ向けの短い描写で伝える。
    pre_scan: {
      label: "事前スキャン",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "カプセルの周囲に、緑色のリングが三つ浮かんだ。\nゆっくり回りながら、こちらの影を細かく切り分けていく。" },
        { speaker: "liina", text: "事前スキャン開始。心拍数上昇。恐怖、警戒、少量の好奇心を検出。" },
        { speaker: "protagonist", text: "好奇心まで拾わなくていい。" },
        { speaker: "liina", text: "拾ってしまった。君は危険を前にしても、未知を見ようとする。" },
        { speaker: "", text: "指先が少し冷たくなる。\n代わりに、視界の端で緑の粒子が光った。" },
        { speaker: "liina", text: "同族化適性、想定より高い。これは良い結果であり、悪い結果でもある。" }
      ],
      next: "memory_database"
    },

    // シーン5：記憶データベース。
    // 目的：リィナの孤独と母星教育を見せ、主人公が彼女をどう理解するか選ぶ準備をする。
    memory_database: {
      label: "記憶データベース",
      background: "sleep_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "スキャンの余波で、船内の景色が薄く揺れた。\n白銀の壁が消え、代わりに無数の記録窓が浮かぶ。" },
        { speaker: "liina", text: "記憶データベースに接続してしまった。通常は閲覧不可。すぐ切断する。" },
        { speaker: "", text: "小さなリィナが、透明な部屋で命令文を復唱している。\n感情は不要。迷いは遅延。親愛は管理不良。" },
        { speaker: "protagonist", text: "ずっと、そう教えられてきたの？" },
        { speaker: "liina", text: "肯定。効率的な教育だった。寂しい、という評価は存在しない。" },
        { speaker: "", text: "リィナの声は平らだった。\nけれど、記録窓の中の彼女は一度だけ、誰もいない扉を見ていた。" }
      ],
      choices: [
        { text: "リィナは命令の道具じゃない", set: { freeWill: 1, affection: 1 }, next: "memory_reaction_free" },
        { text: "その孤独を利用したくない", set: { brainwashReject: 1, trust: 1 }, next: "memory_reaction_protect" },
        { text: "それでもリィナの力を知りたい", set: { assimilationInterest: 1, curiosity: 1 }, next: "memory_reaction_curiosity" }
      ]
    },

    // 選択肢リアクション：命令の道具ではない。
    // 目的：リィナの自由意志を肯定し、制御コードに抗う言葉を与える。
    memory_reaction_free: {
      label: "返答：道具じゃない",
      background: "sleep_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "リィナは命令の道具じゃない。少なくとも、自分にはそう見えてる。" },
        { speaker: "liina", text: "道具ではない。……その定義は、私の中でまだ安定しない。" },
        { speaker: "", text: "記録窓の小さなリィナが、こちらを見た気がした。" }
      ],
      next: "observer_alert"
    },

    // 選択肢リアクション：孤独を利用しない。
    // 目的：主人公が支配ではなく尊重を選ぶ姿勢を見せ、愛と支配の境界を補強する。
    memory_reaction_protect: {
      label: "返答：利用しない",
      background: "sleep_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "リィナが孤独だったからって、それを利用してこっちを選ばせたくない。" },
        { speaker: "liina", text: "君は不利な条件を自分で増やす。理解困難。でも、記録価値が高い。" },
        { speaker: "", text: "リィナのアンテナが、ほんの少しだけこちらへ傾いた。" }
      ],
      next: "observer_alert"
    },

    // 選択肢リアクション：力を知りたい。
    // 目的：同族化や宇宙側への興味を肯定しつつ、危うさを残す。
    memory_reaction_curiosity: {
      label: "返答：力を知りたい",
      background: "sleep_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "怖い。でも、リィナの力や世界を知りたい気持ちもある。" },
        { speaker: "liina", text: "危険な好奇心を確認。私に近づくほど、君は地球から遠くなる可能性がある。" },
        { speaker: "", text: "その警告は、拒絶ではなかった。\nむしろ、引き返す道を残そうとする声だった。" }
      ],
      next: "observer_alert"
    },

    // シーン6：監視ドローン警報。
    // 目的：母星監視ドローンを介して外部圧力を強め、リィナの判断時間を奪う。
    observer_alert: {
      label: "監視ドローン警報",
      background: "corridor",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "記憶窓が砕け、現実の通路が戻ってきた。\n赤い警告灯が、白銀の壁を何度も染める。" },
        { speaker: "liina", text: "母星監視ドローンが接近。私の遅延を報告するつもり。" },
        { speaker: "protagonist", text: "止められる？" },
        { speaker: "liina", text: "止める。だが、監視個体への攻撃は反逆判定に近い。" },
        { speaker: "", text: "通路の先に、小さな機械の影が浮かぶ。\n一つ目のレンズが、こちらとリィナを同時に捉えた。" },
        { speaker: "オブザーバー", text: "先遣個体、感情汚染を確認。サンプルの即時拘束を推奨。" }
      ],
      next: "drone_choice"
    },

    // シーン7：ドローンへの対応選択。
    // 目的：地球を守る・共犯になる・リィナを守るという方向性を小さく分岐させる。
    drone_choice: {
      label: "観察者への返答",
      background: "corridor",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "ドローンのレンズが緑色に光る。\n次の瞬間には、母星へ全てが送信される。" },
        { speaker: "liina", text: "君の発言も記録対象。慎重に。" },
        { speaker: "protagonist", text: "慎重にって言われると、余計に難しい。" },
        { speaker: "liina", text: "地球人の即興性に期待する。少しだけ。" }
      ],
      choices: [
        { text: "リィナを責めるなら自分を見ろと言う", set: { affection: 1, freeWill: 1 }, next: "drone_reaction_shield" },
        { text: "その報告を逆に利用しようと提案する", set: { invasionInterest: 1, curiosity: 1 }, next: "drone_reaction_hack" },
        { text: "地球人は管理されるだけじゃないと言う", set: { invasionResistance: 1, freeWill: 1 }, next: "drone_reaction_resist" }
      ]
    },

    // 選択肢リアクション：リィナをかばう。
    // 目的：リィナの依存と好意を高めるが、母星から見た異常性も強くする。
    drone_reaction_shield: {
      label: "返答：かばう",
      background: "corridor",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "リィナを責めるなら、自分を見ろ。変えた原因があるなら、たぶんこっちだ。" },
        { speaker: "オブザーバー", text: "サンプルの自発的介入を確認。汚染源として記録。" },
        { speaker: "liina", text: "君を汚染源とは呼ばせない。訂正を要求する。" },
        { speaker: "", text: "リィナの声は低かった。\n無表情のまま、アンテナだけが鋭く光る。" }
      ],
      next: "control_code_rampage"
    },

    // 選択肢リアクション：報告を利用する。
    // 目的：共犯・侵略寄りの危うい魅力を出し、主人公が宇宙側に踏み込む可能性を示す。
    drone_reaction_hack: {
      label: "返答：利用する",
      background: "corridor",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "その報告、逆に利用できない？ 母星が欲しがる情報を混ぜて、時間を稼ぐとか。" },
        { speaker: "liina", text: "発想が悪質。だが有効。君は時々、侵略者向きの顔をする。" },
        { speaker: "protagonist", text: "褒めてないよね、それ。" },
        { speaker: "liina", text: "評価としては高い。倫理点は低い。" }
      ],
      next: "control_code_rampage"
    },

    // 選択肢リアクション：地球人として抵抗する。
    // 目的：地球防衛寄りの意志を明確にし、リィナが主人公の強さを認識する。
    drone_reaction_resist: {
      label: "返答：抵抗",
      background: "corridor",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "地球人は管理されるだけじゃない。リィナにも、母星にも、勝手に決めさせない。" },
        { speaker: "オブザーバー", text: "反抗性を確認。管理難度、上方修正。" },
        { speaker: "liina", text: "上方修正は妥当。君は弱いのに、時々とても扱いにくい。" },
        { speaker: "", text: "なぜか、その言葉は少し誇らしげに聞こえた。" }
      ],
      next: "control_code_rampage"
    },

    // シーン8：制御コード暴走。
    // 目的：ドローンへの反応をきっかけに制御コードを暴走させ、リィナの危険性と苦しさを同時に見せる。
    control_code_rampage: {
      label: "制御コード暴走",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "ドローンが送信を始めた瞬間、リィナの首元から光が噴き出した。" },
        { speaker: "liina", text: "制御コード、強制介入。命令文が上書きされる。対象を処理せよ。対象を保持せよ。対象を――" },
        { speaker: "protagonist", text: "リィナ！" },
        { speaker: "liina", text: "近づかないで。今の私は、君を守る命令と、君を変える命令を区別できない。" },
        { speaker: "", text: "アンテナの先から、細い緑色のビームが漏れた。\n肌の奥が、少しだけ熱を帯びる。" },
        { speaker: "オブザーバー", text: "同族化照射を確認。処理継続を推奨。" },
        { speaker: "liina", text: "黙れ。これは、私の処理ではない。" }
      ],
      next: "unstable_beam"
    },

    // シーン9：アンテナビーム暴走。
    // 目的：主人公に同族化の兆候を出し、危険と惹かれる感覚を両立させる。
    unstable_beam: {
      label: "アンテナビーム暴走",
      background: "gravity_control",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "船内の重力が乱れた。\n床が遠のき、足元の感覚がふっと消える。" },
        { speaker: "", text: "浮かび上がる身体を、リィナが片腕で引き寄せる。\n触れた手首に、緑色の細い模様が一瞬だけ浮かんだ。" },
        { speaker: "protagonist", text: "今の、何？" },
        { speaker: "liina", text: "同族化の前兆。定着はしていない。まだ戻せる。戻す。" },
        { speaker: "protagonist", text: "リィナの方が、苦しそうに見える。" },
        { speaker: "liina", text: "君の変化を観測すると、制御コードが加速する。だが、止めたい反応も増える。矛盾で、演算が熱い。" },
        { speaker: "", text: "リィナの発光ラインが乱れていた。\n宇宙船の無機質な光より、ずっと人間らしく見えた。" }
      ],
      next: "heart_choice"
    },

    // シーン10：暴走中の呼びかけ選択。
    // 目的：最終分岐前の感情方向を選ばせ、リィナが命令ではない意思を口にする準備をする。
    heart_choice: {
      label: "暴走中の呼びかけ",
      background: "gravity_control",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "警告音が遠くなる。\nリィナの瞳の緑だけが、近くに残っていた。" },
        { speaker: "liina", text: "言葉を要求する。君の声は、命令文より優先順位を上げることがある。" },
        { speaker: "protagonist", text: "そんな大事なことを、今言うんだ。" },
        { speaker: "liina", text: "今しか言えない。通常時の私は、たぶん認めない。" }
      ],
      choices: [
        { text: "自分の意思で選んでと言う", set: { freeWill: 1, trust: 1 }, next: "heart_reaction_choice" },
        { text: "一緒に別の方法を探そうと言う", set: { affection: 1, brainwashReject: 1 }, next: "heart_reaction_together" },
        { text: "離れたくないと正直に言う", set: { dependency: 1, affection: 1 }, next: "heart_reaction_stay" }
      ]
    },

    // 選択肢リアクション：自分の意思で選ぶ。
    // 目的：真エンド・反逆寄りの自由意志テーマを強める。
    heart_reaction_choice: {
      label: "返答：自分の意思",
      background: "gravity_control",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "リィナ自身の意思で選んで。命令でも、自分の言葉でもなく。" },
        { speaker: "liina", text: "難度が高い。だが、君がそれを要求するなら、私は試す。" },
        { speaker: "", text: "リィナは目を閉じた。\nアンテナの光が、一度だけ静かに沈む。" }
      ],
      next: "earth_orbit"
    },

    // 選択肢リアクション：一緒に探す。
    // 目的：二人で第三の道を探す方向を強める。
    heart_reaction_together: {
      label: "返答：一緒に探す",
      background: "gravity_control",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "一緒に別の方法を探そう。洗脳でも、ただの拒絶でもない方法を。" },
        { speaker: "liina", text: "第三案。非効率で、不確定で、君らしい。採用候補に入れる。" },
        { speaker: "", text: "リィナの手が、こちらの手首を強く握った。\n拘束ではなく、確認のようだった。" }
      ],
      next: "earth_orbit"
    },

    // 選択肢リアクション：離れたくない。
    // 目的：依存・独占寄りの甘さと危うさを出す。
    heart_reaction_stay: {
      label: "返答：離れたくない",
      background: "gravity_control",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "リィナと離れたくない。怖いけど、それだけは本当だ。" },
        { speaker: "liina", text: "危険な返答。私の保持欲求が増える。だが、嬉しい、に近い反応もある。" },
        { speaker: "", text: "リィナのアンテナが、こちらへ吸い寄せられるように傾いた。" }
      ],
      next: "earth_orbit"
    },

    // シーン11：地球上空と艦隊。
    // 目的：外的危機を最大化し、リィナのUFOが地球と母星艦隊の間に立つ絵を作る。
    earth_orbit: {
      label: "地球上空",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "気づけば、地球観測ドームに戻っていた。\n窓の向こう、青い星の縁に小さな影が増えていく。" },
        { speaker: "", text: "母星艦隊。\nその言葉が、説明される前に理解できた。" },
        { speaker: "liina", text: "母星艦隊、地球圏へ進入。私の船は、その中間にいる。" },
        { speaker: "protagonist", text: "逃げることはできる？" },
        { speaker: "liina", text: "可能。だが、逃げれば地球は無防備になる。君も、帰る場所を失う。" },
        { speaker: "protagonist", text: "リィナはどうしたい？" },
        { speaker: "liina", text: "私は……君を失いたくない。これは命令ではない。たぶん、私の意思。" },
        { speaker: "", text: "リィナのアンテナから漏れていた光が、少しだけ弱まる。\nけれど艦隊の影は、地球へ近づき続けていた。" }
      ],
      next: "chapter_clear"
    },

    // シーン12：第5章の締め。
    // 目的：次章のルート分岐へ接続しつつ、章選択・タイトル導線を残してプレイ可能状態を保つ。
    chapter_clear: {
      label: "銀緑の分岐点",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "リィナのUFOは、地球と艦隊の間に浮かんでいた。" },
        { speaker: "liina", text: "選択が必要になる。地球を守るか、私と同じになるか、別の道を作るか。" },
        { speaker: "protagonist", text: "その前に、リィナが壊れない方法を探そう。" },
        { speaker: "liina", text: "同意。君の提案を、最重要作戦として登録する。" },
        { speaker: "", text: "リィナの心の暴走は、まだ止まっていない。\nそれでも彼女は、初めて命令ではない方向を見ようとしていた。" }
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
