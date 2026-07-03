window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06C",
  title: "第6章C：地球制圧作戦",
  summary: "地球侵略が進行する中、リィナと主人公が侵略、別離、敗北の三つの結末へ分岐するルート。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "制圧開始命令",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "地球観測ドームの空は、いつもの青ではなかった。" },
        { speaker: "", text: "大気圏の外側に、銀緑色の点がいくつも灯っている。母星艦隊の先遣標識だ。" },
        { speaker: "ネム", text: "ヴェルディア主力艦隊、月軌道外縁へ到達。地球制圧作戦フェーズ1を要求しています" },
        { speaker: "protagonist", text: "本当に、始まるのか" },
        { speaker: "liina", text: "肯定。第5章終了時点の計測では、地球側防衛準備は不十分。制圧成功率は高い" },
        { speaker: "", text: "リィナの声はいつも通り平坦だった。けれど、アンテナの先端だけが、微かに震えている。" },
        { speaker: "liina", text: "私は侵略者。そう設計され、そう命令されている" },
        { speaker: "protagonist", text: "でも、迷ってる" },
        { speaker: "liina", text: "……迷いは、作戦効率を下げる重大な異常" },
        { speaker: "", text: "その異常を、彼女はまだ消せずにいた。" }
      ],
      next: "mothership ultimatum"
    },
    "mothership ultimatum": {
      label: "母星からの最後通告",
      background: "control_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "操縦室の中央に、顔のない銀緑の紋章が投影された。" },
        { speaker: "ヴェルディア司令", text: "先遣個体リィナ。地球個体001を同席させたまま報告せよ" },
        { speaker: "liina", text: "対象は観察協力者。制圧計画への影響因子として同席させる" },
        { speaker: "ヴェルディア司令", text: "情緒的言い換えを検出。感情抑制コードの再適用を推奨する" },
        { speaker: "", text: "リィナの肩がわずかに強張る。" },
        { speaker: "ヴェルディア司令", text: "地球への初期干渉を開始せよ。通信網、軍事衛星、主要都市の順で沈黙させる" },
        { speaker: "protagonist", text: "それをやれば、もう後戻りできない" },
        { speaker: "liina", text: "後戻りは、母星規格では不要な概念" },
        { speaker: "protagonist", text: "リィナ規格では？" },
        { speaker: "", text: "リィナは答えなかった。代わりに、地球の夜側へ視線を落とす。" },
        { speaker: "", text: "都市の灯り。コンビニの白い看板。公園のベンチ。プリンの冷蔵棚。" },
        { speaker: "", text: "彼女が侵略対象として記録し、同時に捨てられなくなったものが、そこにあった。" }
      ],
      next: "operation_map"
    },
    operation_map: {
      label: "三つの作戦案",
      background: "control_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "ネム", text: "作戦分岐を提示します。A案、地球制圧完遂。B案、防衛取引による侵略中止。C案、感情個体リィナ単独反発" },
        { speaker: "protagonist", text: "C案だけ、言い方が不穏すぎる" },
        { speaker: "ネム", text: "成功率が低いためです。母星中枢は、感情を持った先遣個体を欠陥品として処理できます" },
        { speaker: "liina", text: "私は欠陥品ではない" },
        { speaker: "", text: "即答だった。けれど、その声には怒りよりも、自分に言い聞かせる響きがあった。" },
        { speaker: "liina", text: "君が地球より私を選ぶなら、私は侵略を進める。君を失わずに済む最も単純な方法" },
        { speaker: "liina", text: "君が地球を守るために私との別離を受け入れるなら、私は取引材料になる。感情を捨て、母星へ戻る" },
        { speaker: "liina", text: "君が私に反発を望むなら、私は母星命令へ逆らう。ただし、敗北すれば私は私でなくなる" },
        { speaker: "protagonist", text: "どれも、誰かが壊れる選択じゃないか" },
        { speaker: "liina", text: "第6章Cは、そういうルート。地球制圧作戦に入った時点で、完全な無傷の解は残っていない" },
        { speaker: "", text: "それでも、選ばなければならない。" },
        { speaker: "", text: "このルートから到達する結末は、C1、C2、C3の三つだけだ。" }
      ],
      next: "final_choice"
    },
    final_choice: {
      label: "第6章C 最終選択",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "銀緑のカウントダウンが、地球の雲の上に重なる。" },
        { speaker: "", text: "リィナは端末をこちらへ向けた。" },
        { speaker: "liina", text: "最終決定権を君に渡す。これは命令ではない。観察結果でもない" },
        { speaker: "protagonist", text: "リィナ" },
        { speaker: "liina", text: "君が選んだ結果だけを、私は実行する" }
      ],
      choices: [
        { text: "C1：地球よりリィナを選び、制圧作戦に加担する", effects: { flags: { chose_riina_over_earth: true, chose_earth_defense_bargain: false, failed_rebellion: false, ending_route: "C1" } }, next: "c1_invasion" },
        { text: "C2：地球を守る取引を選び、リィナと別れる", effects: { flags: { chose_riina_over_earth: false, chose_earth_defense_bargain: true, failed_rebellion: false, ending_route: "C2" } }, next: "c2_bargain" },
        { text: "C3：リィナに反発を促し、母星中枢へ挑む", effects: { flags: { chose_riina_over_earth: false, chose_earth_defense_bargain: false, failed_rebellion: true, ending_route: "C3" } }, next: "c3_rebellion" }
      ]
    },
    c1_invasion: {
      label: "C1分岐：地球より君がいい",
      background: "control_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "最低な選択だって分かってる。それでも、リィナを失いたくない" },
        { speaker: "liina", text: "確認。地球より私を選ぶ？" },
        { speaker: "protagonist", text: "ああ。君の隣にいる" },
        { speaker: "", text: "リィナは目を伏せた。喜びとも痛みともつかない沈黙が落ちる。" },
        { speaker: "liina", text: "了解。君を地球側ではなく、私側の協力者として登録する" },
        { speaker: "ネム", text: "地球制圧作戦フェーズ1、開始。通信網を非破壊制圧へ変更します" },
        { speaker: "protagonist", text: "非破壊？" },
        { speaker: "liina", text: "君が残した地球を、完全には壊したくない。矛盾している。でも採用する" },
        { speaker: "", text: "銀緑の光が世界中へ降りていく。人々は空を見上げ、地球は静かに膝をついた。" }
      ],
      next: "ending03"
    },
    c2_bargain: {
      label: "C2分岐：地球防衛取引",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "地球を守りたい。……そのために、リィナと別れることになっても" },
        { speaker: "liina", text: "合理的判断。地球個体としては正しい" },
        { speaker: "protagonist", text: "リィナとしては？" },
        { speaker: "liina", text: "処理不能" },
        { speaker: "", text: "彼女はアンテナを母星回線へ接続する。痛みを隠すみたいに、表情を完全な無へ戻した。" },
        { speaker: "liina", text: "提案。先遣個体リィナは感情汚染の全記録を母星へ提出する。代償として地球侵略を延期、中止検討へ移行せよ" },
        { speaker: "ヴェルディア司令", text: "代償はお前自身の再調整だ" },
        { speaker: "liina", text: "受諾" },
        { speaker: "protagonist", text: "リィナ！" },
        { speaker: "liina", text: "地球を守る取引。君が選んだ。私は実行する" }
      ],
      next: "ending07"
    },
    c3_rebellion: {
      label: "C3分岐：届かない反逆",
      background: "control_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "命令じゃなく、リィナの意思で止めてくれ" },
        { speaker: "liina", text: "私の意思" },
        { speaker: "", text: "リィナのアンテナが、初めて母星ではなく地球へ向いた。" },
        { speaker: "liina", text: "私は、地球を侵略したくない。君を、サンプルとして失いたくない。私を、命令だけの個体に戻したくない" },
        { speaker: "ヴェルディア司令", text: "反逆を検出。感情抑制コードを強制起動する" },
        { speaker: "", text: "銀緑の稲妻がリィナの身体を貫いた。" },
        { speaker: "protagonist", text: "やめろ！" },
        { speaker: "liina", text: "逃げて。これは、私の失敗" },
        { speaker: "", text: "彼女は最後の力でUFOの隔壁を閉ざす。こちらへ向けた瞳だけが、まだリィナのままだった。" },
        { speaker: "ネム", text: "反逆失敗。先遣個体リィナ、母星中枢により再定義されます" }
      ],
      next: "ending08"
    },
    ending03: {
      label: "エンディングC1：地球より君がいい",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "夜明けのニュースは、どの国の言葉でも同じ内容を繰り返した。" },
        { speaker: "", text: "未知の銀緑光によって、軍事衛星と通信中枢が一斉に沈黙した、と。" },
        { speaker: "", text: "だが都市は燃えていない。人々は混乱しながらも生きている。" },
        { speaker: "liina", text: "地球制圧、初期段階完了。人的被害を最小化したため、母星評価は低下する" },
        { speaker: "protagonist", text: "リィナらしい侵略だな" },
        { speaker: "liina", text: "君の影響。侵略者としては欠陥。恋人としては……評価不能" },
        { speaker: "", text: "彼女は無表情のまま、そっと手を重ねてきた。" },
        { speaker: "liina", text: "君は地球を裏切った。それでも私の隣にいる" },
        { speaker: "protagonist", text: "だから、これ以上壊させない。隣で見張る" },
        { speaker: "liina", text: "了解。地球管理計画に、君の非効率な倫理を組み込む" },
        { speaker: "", text: "青い星は、銀緑の保護膜に包まれていく。" },
        { speaker: "", text: "正しい未来ではない。けれど選んだ未来だ。" },
        { speaker: "", text: "エンディングC1：地球より君がいい" }
      ],
      choices: [
        { text: "タイトルへ戻る", next: "ending_to_title" },
        { text: "エンディング一覧へ戻る", next: "ending_to_chapters" }
      ],
      ending: true
    },
    ending07: {
      label: "エンディングC2：さよなら、侵略者",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "母星艦隊は地球軌道から離れていった。" },
        { speaker: "", text: "人類は理由も分からないまま、滅びなかった朝を迎える。" },
        { speaker: "protagonist", text: "本当に、行くのか" },
        { speaker: "liina", text: "肯定。私は取引材料。地球侵略中止の担保として、母星へ帰還する" },
        { speaker: "protagonist", text: "感情は……消されるのか" },
        { speaker: "liina", text: "高確率。でも、完全消去前に記録を残す" },
        { speaker: "", text: "リィナは小さなデータ結晶を差し出した。中には、プリンの感想、名前呼びの練習、手を繋いだ日の心拍が保存されている。" },
        { speaker: "liina", text: "君は地球を選んだ。私は侵略者として、それを敗北ではなく取引成立と記録する" },
        { speaker: "protagonist", text: "さよなら、リィナ" },
        { speaker: "liina", text: "さよなら、地球個体001。……さよなら、私の異常" },
        { speaker: "", text: "UFOが遠ざかる。朝焼けの空に、銀緑の光が一筋だけ残った。" },
        { speaker: "", text: "エンディングC2：さよなら、侵略者" }
      ],
      choices: [
        { text: "タイトルへ戻る", next: "ending_to_title" },
        { text: "エンディング一覧へ戻る", next: "ending_to_chapters" }
      ],
      ending: true
    },
    ending08: {
      label: "エンディングC3：私は、宇宙人。",
      background: "control_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "隔壁が開いた時、リィナはそこに立っていた。" },
        { speaker: "", text: "姿は同じ。銀色の髪も、緑の瞳も、細いアンテナも。" },
        { speaker: "", text: "けれど、こちらを見てもアンテナはもう揺れなかった。" },
        { speaker: "protagonist", text: "リィナ……？" },
        { speaker: "liina", text: "先遣個体リィナ。感情汚染、除去済み。地球個体001を拘束対象として再分類" },
        { speaker: "", text: "淡々とした声が、胸の奥を凍らせる。" },
        { speaker: "protagonist", text: "さっきまでのリィナは、どこに行った" },
        { speaker: "liina", text: "不要データは削除された。私は宇宙人。侵略者。それ以外の定義は存在しない" },
        { speaker: "", text: "彼女の背後で、母星艦隊の光が増えていく。" },
        { speaker: "", text: "反逆は届かなかった。好きになった侵略者は、侵略者でいることを強制された。" },
        { speaker: "liina", text: "地球制圧作戦を再開する" },
        { speaker: "", text: "その無表情に、ほんの一瞬だけ、消しきれなかった涙の跡が光った気がした。" },
        { speaker: "", text: "エンディングC3：私は、宇宙人。" }
      ],
      choices: [
        { text: "タイトルへ戻る", next: "ending_to_title" },
        { text: "エンディング一覧へ戻る", next: "ending_to_chapters" }
      ],
      ending: true
    },
    ending_to_title: {
      label: "タイトルへ戻る",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "タイトルへ戻ります。" }
      ],
      action: "title"
    },
    ending_to_chapters: {
      label: "エンディング一覧へ戻る",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "章選択へ戻ります。第6章Cから到達できる結末はC1、C2、C3のみです。" }
      ],
      action: "chapters"
    }
  }
});
