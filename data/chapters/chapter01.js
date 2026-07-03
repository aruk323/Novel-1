window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter01",
  title: "第1章：銀緑の来訪者",
  summary: "UFOで目覚めた主人公が、リィナとの観察生活、脱出未遂、名前呼びを体験する第1章本番用の前半拡張版。",
  start: "wake",
  scenes: {
    // シーン1：観察対象としての朝。
    // 目的：主人公が攫われた状況を思い出し、リィナの近さ・観察癖・無表情な危うさを同時に見せる。
    wake: {
      label: "観察対象としての朝",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "銀色の天井に、緑の光が細く走っていた。\n目を開けても、そこは昨日までの部屋ではない。" },
        { speaker: "", text: "ベッドは柔らかい。けれど、匂いがない。\n布団の重さも、窓から入る朝の音もない。" },
        { speaker: "liina", text: "覚醒を確認。地球個体001、睡眠時間は六時間十二分。" },
        { speaker: "protagonist", text: "……おはよう、で合ってる？" },
        { speaker: "liina", text: "挨拶プロトコルを受理。おはよう、サンプル。" },
        { speaker: "", text: "リィナの顔が近い。無表情なのに、アンテナの先だけが淡く光っている。" },
        { speaker: "liina", text: "体温、心拍、瞳孔反応を記録。昨夜より反応が多い。興味深い。" },
        { speaker: "protagonist", text: "人を枕元で観察しながら言う台詞じゃない。" }
      ],
      next: "morningChoice"
    },

    // シーン2：最初の反応選択。
    // 目的：主人公の態度を選ばせ、選択直後にリィナの反応を入れて好感・警戒・名前意識を初期化する。
    morningChoice: {
      label: "朝の反応",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "liina", text: "心拍数上昇。逃走準備？　それとも照れ？" },
        { speaker: "", text: "彼女は首を少し傾けた。\n表情は変わらないのに、観察装置だけが忙しく光っている。" }
      ],
      choices: [
        { text: "近いから照れていると正直に言う", set: { affection: 1, honest: true }, params: { affection: 2 }, next: "reaction_honest" },
        { text: "逃げる準備だと強がる", set: { escape: 1, defiant: true }, params: { wariness: 1 }, next: "reaction_defiant" },
        { text: "サンプル呼びをまず訂正する", set: { nameWish: 1 }, params: { affection: 1 }, next: "reaction_name" }
      ]
    },
    reaction_honest: {
      label: "観察反応：照れ",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "近いからだよ。いきなり顔をのぞき込まれたら、そりゃ反応する。" },
        { speaker: "liina", text: "接近による心拍上昇。地球人の仕様として記録する。" },
        { speaker: "", text: "リィナの発光ラインが、一瞬だけ強くなった。" },
        { speaker: "liina", text: "私の発光変化は、室内照明の誤差。無関係。" }
      ],
      next: "rules"
    },
    reaction_defiant: {
      label: "観察反応：警戒",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "逃げる準備に決まってる。攫われた側の自然な権利として。" },
        { speaker: "liina", text: "自然な権利。興味深い言い回し。だが、君の筋力では隔離扉に勝てない。" },
        { speaker: "protagonist", text: "事実で殴るのやめて。" },
        { speaker: "liina", text: "殴打はしていない。まだ。" }
      ],
      next: "rules"
    },
    reaction_name: {
      label: "観察反応：名前",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "サンプルじゃない。名前がある。" },
        { speaker: "liina", text: "名称への執着を確認。地球人は識別番号より固有名を好む。" },
        { speaker: "protagonist", text: "執着って言い方。" },
        { speaker: "liina", text: "では、名前への強い文化的要求。記録を修正。" }
      ],
      next: "rules"
    },

    // シーン3：UFO内ルール説明。
    // 目的：船内の制限を示し、主人公のツッコミとリィナの合理主義でラブコメのテンポを作る。
    rules: {
      label: "船内規則",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "リィナは端末を空中に浮かべた。\n薄い光の板に、読めない文字と丸い警告マークが並ぶ。" },
        { speaker: "liina", text: "規則一。許可なく船外へ出ない。" },
        { speaker: "liina", text: "規則二。緑色に光る装置へ触れない。" },
        { speaker: "protagonist", text: "だいたい全部緑色に光ってるんだけど。" },
        { speaker: "liina", text: "良い観察眼。では、すべて触れないこと。" },
        { speaker: "liina", text: "規則三。私のアンテナに触れない。" },
        { speaker: "protagonist", text: "それは触る予定なかった。" },
        { speaker: "liina", text: "予定外接触も禁止。地球人は予測できない。" }
      ],
      next: "purpose"
    },

    // シーン4：リィナの目的説明。
    // 目的：彼女が可愛いだけではなく侵略者であることを明示し、物語の危険性を思い出させる。
    purpose: {
      label: "リィナの目的",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "そもそも、どうして自分を攫ったんだ。" },
        { speaker: "liina", text: "私は地球侵略先遣調査員、リィナ・シルヴェルグリーン。" },
        { speaker: "liina", text: "任務は、地球文明の観察、弱点分析、支配手順の設計。" },
        { speaker: "protagonist", text: "朝の自己紹介で聞く内容じゃない。" },
        { speaker: "liina", text: "君は地球人代表サンプル。生活、感情、判断の揺れを調べる。" },
        { speaker: "", text: "冗談みたいな言葉なのに、彼女の瞳は少しも笑っていなかった。" },
        { speaker: "liina", text: "安心して。直ちに解剖する予定はない。" },
        { speaker: "protagonist", text: "直ちに、の一語で安心が消えた。" }
      ],
      next: "ship_tour"
    },

    // シーン5：船内案内。
    // 目的：背景切り替えでUFO内の生活範囲を見せ、閉鎖空間の不安と共同生活の予感を作る。
    ship_tour: {
      label: "UFO内案内",
      background: "corridor",
      characters: [{ id: "liina", position: "right", expression: "neutral" }],
      lines: [
        { speaker: "", text: "白銀の通路に出ると、床の緑のラインが足元で静かに明滅した。" },
        { speaker: "liina", text: "右が観察室。左が食事生成ルーム。奥は操縦室。君は入れない。" },
        { speaker: "protagonist", text: "入れない場所を案内に含めるな。" },
        { speaker: "liina", text: "禁止区域を知ることは、生存率を上げる。" },
        { speaker: "", text: "通路の先に、丸い扉が見えた。\nその向こうだけ、他よりも暗い。" },
        { speaker: "liina", text: "地球観測ドーム。後で見せる。今は食事。" },
        { speaker: "protagonist", text: "急に生活感を出されても、気持ちが追いつかない。" }
      ],
      next: "meal"
    },

    // シーン6：初めての食事イベント。
    // 目的：リィナのポンコツさを見せつつ、選択で主人公の優しさ・正直さ・地球文化説明を分岐させる。
    meal: {
      label: "初めての食事イベント",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "", text: "食事生成ルームは、台所というより小さな研究室だった。" },
        { speaker: "", text: "透明な箱の中で、黄色い液体と黒い粒と赤いソースが回転している。" },
        { speaker: "liina", text: "地球料理を再現した。カレー、プリン、ラーメン、たこ焼き。人気栄養素を統合。" },
        { speaker: "protagonist", text: "統合しないで。料理は合体ロボじゃない。" },
        { speaker: "", text: "皿の上では、甘くて辛くて海の匂いがする何かが、ゆっくり泡を立てていた。" },
        { speaker: "liina", text: "見た目の評価を求める。成功？" }
      ],
      choices: [
        { text: "正直に、失敗だと伝える", set: { honest: true, affection: 1 }, params: { affection: 2 }, next: "meal_honest" },
        { text: "文化調査として一口だけ食べる", set: { trust: 1, affection: 1 }, params: { affection: 2 }, next: "meal_try" },
        { text: "プリンだけ別にしてほしいと頼む", set: { pudding: true }, params: { earth_empathy: 1 }, next: "meal_pudding" }
      ]
    },
    meal_honest: {
      label: "料理の学習：正直",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "成功か失敗かで言うなら、かなり失敗。" },
        { speaker: "liina", text: "失敗を確認。胸部に軽微な圧迫感。これは料理データの損傷によるもの。" },
        { speaker: "", text: "アンテナがしょんぼり下がった。\n少しだけ、言いすぎた気がした。" },
        { speaker: "protagonist", text: "でも、作ろうとしてくれたのは助かった。そこはありがとう。" },
        { speaker: "liina", text: "ありがとう。報酬語彙を受信。記録しておく。" }
      ],
      next: "meal_after"
    },
    meal_try: {
      label: "料理の学習：試食",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "一口だけなら。文化調査だと思えば……。" },
        { speaker: "liina", text: "摂取するの？　地球人の勇気を記録する。" },
        { speaker: "", text: "一口で、甘さと辛さと海の気配が同時に来た。\n宇宙は広い。胃袋には広すぎる。" },
        { speaker: "liina", text: "涙腺反応。感動？" },
        { speaker: "protagonist", text: "違う。たぶん防衛反応。" }
      ],
      next: "meal_after"
    },
    meal_pudding: {
      label: "料理の学習：プリン",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "protagonist", text: "プリンだけ別にして。混ぜなければ、たぶん地球文明は守れる。" },
        { speaker: "liina", text: "プリン。地球文明の中枢物資と推測。" },
        { speaker: "", text: "リィナは小さな透明カップを生成した。\n今度は、ちゃんとプリンに見える。" },
        { speaker: "liina", text: "これを好む個体が多い理由を調べる。" },
        { speaker: "", text: "無表情のまま、アンテナの先がさっきより明るく光った。" }
      ],
      next: "meal_after"
    },
    meal_after: {
      label: "食後の観察",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "liina", text: "次回は分離調理を試す。君の生存率も上がる。" },
        { speaker: "protagonist", text: "料理の目標に生存率を入れないでほしい。" },
        { speaker: "", text: "リィナは端末に何かを入力し始めた。\n視線は画面に固定されている。" },
        { speaker: "", text: "今なら、少しだけ動けるかもしれない。" }
      ],
      next: "escape"
    },

    // シーン7：脱出未遂。
    // 目的：主人公が帰還を望む自然な反応を示し、UFO内の不穏さと地球観測ドームへの導線を作る。
    escape: {
      label: "脱出未遂",
      background: "corridor",
      characters: [],
      lines: [
        { speaker: "", text: "食後。リィナが端末に夢中になった隙に、隔離部屋の外へ出た。" },
        { speaker: "", text: "白銀の通路は静かで、床の緑のラインだけが呼吸みたいに明滅している。" },
        { speaker: "", text: "遠くで、低い機械音が鳴った。\n心臓の音と重なって、どちらが自分のものか分からなくなる。" },
        { speaker: "protagonist", text: "出口……いや、せめて地球が見える場所は。" },
        { speaker: "", text: "さっき見た丸い扉。\n地球観測ドーム、とリィナは言っていた。" },
        { speaker: "", text: "扉の横の緑色のパネルに手を近づける。\n触れるなと言われたばかりなのに。" }
      ],
      next: "dome"
    },

    // シーン8：地球観測ドーム。
    // 目的：第1章の山場として、主人公に「本当に攫われた」孤独と帰りたい気持ちを実感させる。
    dome: {
      label: "地球観測ドーム",
      background: "earth_dome",
      characters: [],
      lines: [
        { speaker: "", text: "扉が開いた先に、青い星があった。" },
        { speaker: "", text: "地球。\n昨日まで歩いていた街も、コンビニも、帰り道も、全部あの光の中にある。" },
        { speaker: "", text: "手を伸ばしても届かない。\n声を出しても、誰にも聞こえない。" },
        { speaker: "", text: "本当に攫われたのだと、ようやく実感した。" },
        { speaker: "protagonist", text: "帰りたいに決まってるだろ……。" }
      ],
      next: "domeChoice"
    },

    // シーン9：リィナとの会話。
    // 目的：逃走を責めないリィナを見せ、冷酷さだけではないが危険でもある距離感を保つ。
    domeChoice: {
      label: "地球を見下ろして",
      background: "earth_dome",
      characters: [{ id: "liina", position: "right", expression: "cool" }],
      lines: [
        { speaker: "liina", text: "船外へ出れば死ぬ。逃走経路としては不適切。" },
        { speaker: "protagonist", text: "追ってきたのに、怒らないんだ。" },
        { speaker: "liina", text: "怒りは非効率。君の喪失は、観察計画の重大な損失。" },
        { speaker: "", text: "言い方は冷たい。\nけれど、彼女は扉を閉じず、隣に立った。" },
        { speaker: "liina", text: "地球は脆い。だが、光は多い。解析には時間が必要。" }
      ],
      choices: [
        { text: "それでも地球へ帰りたいと言う", set: { earth: 1 }, params: { wariness: 1, invasion: -1 }, next: "dome_earth" },
        { text: "なぜ侵略するのか尋ねる", set: { curiosity: 1 }, next: "dome_why" },
        { text: "心配してくれたのかと聞く", set: { affection: 1 }, params: { affection: 1 }, next: "dome_soft" }
      ]
    },
    dome_earth: {
      label: "帰還要求",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "それでも帰りたい。あそこに、自分の生活がある。" },
        { speaker: "liina", text: "生活。地球個体を維持する環境の総称。" },
        { speaker: "protagonist", text: "辞書みたいに片づけるな。大事なんだよ。" },
        { speaker: "liina", text: "大事。記録する。君の判断に強く影響する語。" }
      ],
      next: "name_event"
    },
    dome_why: {
      label: "侵略理由",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "どうして侵略なんてするんだ。地球が何をした。" },
        { speaker: "liina", text: "何かをしたからではない。資源、文化、感情反応。すべてが観測対象。" },
        { speaker: "protagonist", text: "観測したら、次は支配するのか。" },
        { speaker: "liina", text: "母星の標準手順では、そう。" },
        { speaker: "", text: "その淡々とした声が、ドームの冷たい空気に溶けた。" }
      ],
      next: "name_event"
    },
    dome_soft: {
      label: "心配の否定",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "もしかして、心配してくれた？" },
        { speaker: "liina", text: "心配ではない。重要個体の破損を避けただけ。" },
        { speaker: "protagonist", text: "言い換えただけじゃないか。" },
        { speaker: "liina", text: "違う。心配は感情語。私は任務語を使用した。" },
        { speaker: "", text: "アンテナの先が、反論みたいに小さく揺れていた。" }
      ],
      next: "name_event"
    },

    // シーン10：名前呼びと観察記録。
    // 目的：サンプルから名前へ一歩進め、ラストの観察記録でリィナの小さな変化を間接的に示す。
    name_event: {
      label: "名前呼びイベント",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "あと、地球個体001とかサンプルとか、やめてほしい。名前がある。" },
        { speaker: "liina", text: "名前。識別精度は番号の方が高い。" },
        { speaker: "protagonist", text: "そういう問題じゃない。番号で呼ばれると、自分が物みたいに思える。" },
        { speaker: "liina", text: "物ではない。君は観察対象で、会話可能で、予測不能。" },
        { speaker: "protagonist", text: "評価なのか、それ。" },
        { speaker: "liina", text: "高評価。たぶん。" },
        { speaker: "", text: "リィナは少しだけ間を置いた。\n端末の記録欄から、番号の一部が消える。" },
        { speaker: "liina", text: "……ユーザー。発音は、これで正しい？" },
        { speaker: "", text: "彼女の声はいつも通り平らだった。\nけれど、アンテナは少しだけ揺れていた。" }
      ],
      next: "last_record"
    },
    last_record: {
      label: "観察記録",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "その夜。観察室の端末に、リィナの記録が残っていた。" },
        { speaker: "liina", text: "地球個体――ユーザーは、予測より騒がしい。非効率。" },
        { speaker: "liina", text: "逃走意志あり。帰還欲求あり。名称への反応強め。" },
        { speaker: "liina", text: "料理再現は失敗。次回、分離調理を実施。" },
        { speaker: "", text: "記録はそこで一度止まっていた。\n数秒後、短い追記が入る。" },
        { speaker: "liina", text: "一緒にいると、退屈しない。" },
        { speaker: "", text: "第1章クリア。銀緑の来訪者との共同生活は、まだ始まったばかりだ。" }
      ],
      choices: [
        { text: "第2章へ進む", set: { chapter01Clear: true }, next: "go_chapter02" },
        { text: "章選択へ戻る", set: { chapter01Clear: true }, next: "return_chapters" },
        { text: "タイトルへ戻る", set: { chapter01Clear: true }, next: "return_title" }
      ],
      ending: true
    },
    go_chapter02: {
      label: "第2章へ進みます",
      background: "earth_dome",
      lines: [
        { speaker: "", text: "第2章へ進みます。" }
      ],
      action: "chapter",
      chapter: "chapter02",
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
    },
    return_chapters: {
      label: "章選択へ戻ります",
      background: "earth_dome",
      lines: [
        { speaker: "", text: "章選択へ戻ります。" }
      ],
      action: "chapters",
      ending: true
    }
  }
});
