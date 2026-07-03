window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter03",
  title: "第3章：地球文化調査と偽装デート",
  summary: "リィナが地球へ潜入し、コンビニ、学校、商店街、ゲームセンター、公園を巡る第3章本番用。",
  start: "infiltration_briefing",
  scenes: {
    // シーン1：地球潜入任務。
    // 目的：UFO外へ出る理由、偽装装置の制約、リィナが地球を実地調査する緊張感を提示する。
    infiltration_briefing: {
      label: "地球潜入任務",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "第3章。地球観測ドームの下で、夜の街が宝石みたいに光っていた。" },
        { speaker: "", text: "ガラスの向こうにあるのは、侵略予定地。\nけれど自分には、帰る場所でもある。" },
        { speaker: "liina", text: "地球文化調査フェーズを開始する。対象区域、君の生活圏。目的、日常の解析。" },
        { speaker: "protagonist", text: "つまり、外に出るってこと？" },
        { speaker: "liina", text: "肯定。偽装装置を使用する。アンテナと発光ラインを隠す。出力は八時間。" },
        { speaker: "protagonist", text: "八時間を超えたら？" },
        { speaker: "liina", text: "地球人の前で、私が少し宇宙人に戻る。社会的危険度、高。" },
        { speaker: "", text: "リィナは平然と言った。\nこちらの胃だけが、先に地球へ落下した気分だった。" }
      ],
      next: "disguise_choice"
    },

    // シーン2：偽装服選択。
    // 目的：プレイヤー選択で潜入の方向性を作り、リィナの感情をアンテナや視線で間接的に見せる。
    disguise_choice: {
      label: "偽装服選択",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "研究室の壁に、地球の服装データが浮かぶ。制服風、白いパーカー、黒いジャケット。" },
        { speaker: "liina", text: "君の監修を要求する。地球人社会へ自然に潜入できる服装を選択して。" },
        { speaker: "protagonist", text: "自然に、って言うには本人の存在感が強すぎるんだけど。" },
        { speaker: "", text: "偽装でアンテナは見えなくなる。\nそれでも、緑の瞳だけは少しだけ星の色を残していた。" }
      ],
      choices: [
        { text: "白いパーカーを勧める", set: { earthCulture: 1, affection: 1 }, params: { affection: 1, earth_empathy: 1 }, next: "outfit_hoodie" },
        { text: "制服風の服を選ぶ", set: { schoolFlag: 1, curiosity: 1 }, params: { earth_empathy: 1 }, next: "outfit_uniform" },
        { text: "黒いジャケットで目立たなくする", set: { caution: 1, freeWill: 1 }, params: { free_will_respect: 1, wariness: 1 }, next: "outfit_jacket" },
        { text: "リィナ自身に選ばせる", set: { freeWill: 1, trust: 1 }, params: { affection: 1, free_will_respect: 1 }, next: "outfit_liina_choice" }
      ]
    },
    outfit_hoodie: {
      label: "偽装服：白いパーカー",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "白いパーカーなら、柔らかい雰囲気で街に馴染みやすいと思う。" },
        { speaker: "liina", text: "柔らかい雰囲気。防御力ではなく、印象値を上げる装備。理解した。" },
        { speaker: "", text: "袖を少し余らせたリィナは、端末ではなくこちらの反応を待っていた。" },
        { speaker: "liina", text: "君の視線滞留を確認。偽装成功？" }
      ],
      next: "descent_to_earth"
    },
    outfit_uniform: {
      label: "偽装服：制服風",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "制服風なら、学校の近くでは自然かも。" },
        { speaker: "liina", text: "地球教育施設への潜入適性が高い服装。採用する。" },
        { speaker: "", text: "襟元を正確すぎる角度で整えるせいで、逆に真面目さが目立つ。" },
        { speaker: "liina", text: "君と同じ集団に所属しているように見える？" }
      ],
      next: "descent_to_earth"
    },
    outfit_jacket: {
      label: "偽装服：黒いジャケット",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "黒いジャケットなら、夜の街では目立ちにくい。安全第一でいこう。" },
        { speaker: "liina", text: "安全第一。君は私の露見リスクを下げようとしている。記録する。" },
        { speaker: "", text: "布の下で、隠された発光ラインが一瞬だけ明滅した。" },
        { speaker: "liina", text: "君の判断を信頼する。今回だけではない。たぶん。" }
      ],
      next: "descent_to_earth"
    },
    outfit_liina_choice: {
      label: "偽装服：自己選択",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "リィナが自分で選んでみて。地球では、服は気分で選ぶこともある。" },
        { speaker: "liina", text: "気分。非合理な選択基準。だが、調査価値あり。" },
        { speaker: "", text: "迷った末に、リィナは白いパーカーの上へ黒いジャケットを重ねた。" },
        { speaker: "liina", text: "君が安全と言った黒と、柔らかいと言った白。統合した。" }
      ],
      next: "descent_to_earth"
    },

    // シーン3：地上降下とコンビニ。
    // 目的：UFO内から地球の日常へ舞台を移し、リィナがコンビニを補給基地として誤解するコメディを置く。
    descent_to_earth: {
      label: "地上降下",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "転送光が消えると、足の下にアスファルトの硬さが戻った。" },
        { speaker: "", text: "夜風。車の音。遠くの信号機。\n当たり前だったものが、少しだけ眩しい。" },
        { speaker: "liina", text: "重力、空気成分、騒音、すべて許容範囲。地球は思ったより雑。" },
        { speaker: "protagonist", text: "雑って言わないで。これでも落ち着くんだよ。" },
        { speaker: "", text: "リィナはコンビニの自動ドアの前で止まった。\n開閉音に合わせて、目だけがわずかに輝く。" },
        { speaker: "liina", text: "小型補給基地。食料、飲料、雑誌、支払い端末。民間施設にしては高機能。" },
        { speaker: "protagonist", text: "補給基地じゃなくてコンビニ。たしかに便利だけど。" }
      ],
      next: "pudding_encounter"
    },

    // シーン4：プリン遭遇。
    // 目的：リィナが地球文化を気に入る最初の実感を作り、自由意志や贈与の選択を反映する。
    pudding_encounter: {
      label: "プリン遭遇",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "冷蔵棚の前で、リィナが停止した。" },
        { speaker: "", text: "視線の先には、黄色いプリンが並んでいる。\n侵略兵器でも、未知の鉱物でもない。普通のプリンだ。" },
        { speaker: "liina", text: "この黄色い封印容器は？" },
        { speaker: "protagonist", text: "プリン。前に話した、地球の甘い食べ物。" },
        { speaker: "liina", text: "甘味資源。恋愛ドラマでは、感情交渉に使用されていた。" },
        { speaker: "protagonist", text: "プリンを外交カードみたいに扱わないで。" }
      ],
      choices: [
        { text: "プリンを買ってあげる", set: { affection: 1, earthCulture: 1 }, params: { affection: 1, earth_empathy: 1 }, next: "pudding_gift" },
        { text: "リィナに自分で選ばせる", set: { freeWill: 1, trust: 1 }, params: { affection: 1, free_will_respect: 1 }, next: "pudding_choice" },
        { text: "半分ずつ食べようと提案する", set: { affection: 1, dependence: 1 }, params: { affection: 1, dependency: 1 }, next: "pudding_share" },
        { text: "まず成分表示から説明する", set: { curiosity: 1, caution: 1 }, params: { wariness: 1 }, next: "pudding_label" }
      ]
    },
    pudding_gift: {
      label: "プリン：贈与",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "ひとつ買ってあげる。地球文化調査の初回サンプルってことで。" },
        { speaker: "liina", text: "贈与。対価なしの資源移譲。恋愛ドラマで確認した行動に近い。" },
        { speaker: "protagonist", text: "そこで恋愛ドラマを持ち出さない。" },
        { speaker: "", text: "リィナはプリンを両手で持った。無表情なのに、大事そうに見えた。" }
      ],
      next: "school_gate"
    },
    pudding_choice: {
      label: "プリン：自己選択",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "今日はリィナが選んでいい。自分で食べたいものを選ぶのも文化だから。" },
        { speaker: "liina", text: "自分で選ぶ。命令ではなく、嗜好による決定。難易度が高い。" },
        { speaker: "", text: "長い沈黙のあと、リィナは一番小さなプリンを選んだ。" },
        { speaker: "liina", text: "まずは低リスク個体から制圧する。" }
      ],
      next: "school_gate"
    },
    pudding_share: {
      label: "プリン：共有",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "半分ずつ食べよう。感想を比べた方が調査っぽいし。" },
        { speaker: "liina", text: "共有摂取。ひとつの資源を二個体で分ける。距離が近い行動。" },
        { speaker: "", text: "リィナはスプーンを二本取った。\n一本を渡す時、指先がほんの少し触れた。" },
        { speaker: "liina", text: "接触発生。プリンの危険度を上方修正する。" }
      ],
      next: "school_gate"
    },
    pudding_label: {
      label: "プリン：成分表示",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "protagonist", text: "まずは成分表示から。地球では食べ物の情報がここに書いてある。" },
        { speaker: "liina", text: "成分開示。地球文明は甘味資源に対してだけ誠実。" },
        { speaker: "protagonist", text: "だけ、ではないと思う。" },
        { speaker: "", text: "リィナは真剣にうなずき、プリンを『透明性の高い重要物資』へ分類した。" }
      ],
      next: "school_gate"
    },

    // シーン5：学校潜入。
    // 目的：主人公の日常をリィナに見せ、周囲から関係を問われることで危険な言い間違いを起こす。
    school_gate: {
      label: "学校潜入",
      background: "school_gate",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "翌朝に見えるよう、UFOの時間調整で学校近くへ降りた。" },
        { speaker: "", text: "校門から流れてくる声。靴音。笑い声。\nリィナは、その全部を無言で記録している。" },
        { speaker: "liina", text: "教育施設。個体を長時間収容し、知識と集団規範を注入する場所。" },
        { speaker: "protagonist", text: "言い方が怖い。だいたい合ってるのも困る。" },
        { speaker: "", text: "通りすがりの知り合いが、リィナを見て目を丸くした。" },
        { speaker: "", text: "『その子、誰？』\n何気ない質問が、今は警報みたいに聞こえる。" },
        { speaker: "liina", text: "私はユーザーの重要観察者。共同生活中。夜間睡眠データも保有している。" },
        { speaker: "protagonist", text: "待って。今の全部、地球ではアウト。" },
        { speaker: "", text: "知り合いは、気まずい笑顔だけを残して去っていった。" }
      ],
      choices: [
        { text: "親戚という設定でごまかす", set: { caution: 1 }, params: { wariness: 1 }, next: "school_cover_relative" },
        { text: "交換留学生という設定にする", set: { earthCulture: 1, curiosity: 1 }, params: { earth_empathy: 1 }, next: "school_cover_exchange" },
        { text: "リィナに地球の距離感を教える", set: { freeWill: 1, trust: 1 }, params: { affection: 1, free_will_respect: 1 }, next: "school_cover_distance" }
      ]
    },
    school_cover_relative: {
      label: "学校：親戚設定",
      background: "school_gate",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "親戚。遠い親戚ってことにしよう。" },
        { speaker: "liina", text: "血縁偽装。遺伝情報の一致は不要？" },
        { speaker: "protagonist", text: "不要。そこまで調べられないから。" },
        { speaker: "", text: "リィナは『地球の親戚制度、曖昧』と記録した。" }
      ],
      next: "shopping_street"
    },
    school_cover_exchange: {
      label: "学校：留学生設定",
      background: "school_gate",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "protagonist", text: "交換留学生って設定なら、少し変わってても通じるかも。" },
        { speaker: "liina", text: "星間交換留学生。正確。" },
        { speaker: "protagonist", text: "星間は消して。" },
        { speaker: "", text: "リィナは不服そうに、端末の『星間』だけを削除した。" }
      ],
      next: "shopping_street"
    },
    school_cover_distance: {
      label: "学校：距離感",
      background: "school_gate",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "地球では、相手の睡眠データを持ってるって言うと怖がられる。距離感が大事。" },
        { speaker: "liina", text: "距離感。近すぎると警戒される。遠すぎると観察できない。難しい。" },
        { speaker: "", text: "リィナは半歩だけ離れた。\nその後、すぐ半歩戻ってきた。" },
        { speaker: "liina", text: "この距離が、暫定最適。" }
      ],
      next: "shopping_street"
    },

    // シーン6：商店街と偽装デート作戦。
    // 目的：調査とデートの境界を曖昧にし、行き先選択でラブコメ・文化調査の方向を分ける。
    shopping_street: {
      label: "商店街と偽装デート",
      background: "shopping_street",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "学校を離れ、商店街へ向かった。昼の光の下では、コンビニの夜とは別のざわめきがある。" },
        { speaker: "liina", text: "君の案内で歩く行為。地球文化資料では、デートに近似。" },
        { speaker: "protagonist", text: "これは調査。リィナがそう言い出したんだよ。" },
        { speaker: "liina", text: "偽装デート作戦。名称変更に問題はない。" },
        { speaker: "protagonist", text: "問題しかない名前なんだけど。" },
        { speaker: "", text: "リィナは少しだけ歩幅を合わせてくる。\n偽装のため、と言い訳するには自然すぎた。" }
      ],
      choices: [
        { text: "カフェで休む", set: { earthCulture: 1, affection: 1 }, params: { affection: 1, earth_empathy: 1 }, next: "cafe_scene" },
        { text: "ゲームセンターへ行く", set: { curiosity: 1, affection: 1 }, params: { affection: 1 }, next: "arcade_scene" },
        { text: "公園で静かに話す", set: { trust: 1, freeWill: 1 }, params: { affection: 1, free_will_respect: 1 }, next: "park_scene" }
      ]
    },

    // シーン7A：カフェイベント。
    // 目的：甘い日常を体験させ、リィナが地球の非効率な時間に価値を見出す。
    cafe_scene: {
      label: "カフェ調査",
      background: "cafe",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "小さなカフェの窓際に座る。カップの湯気が、リィナの緑の瞳に映った。" },
        { speaker: "liina", text: "飲料摂取に対して、座席、音楽、会話を付加する施設。効率が悪い。" },
        { speaker: "protagonist", text: "効率だけじゃないんだよ。こういう時間を楽しむ場所。" },
        { speaker: "liina", text: "時間を消費することを楽しむ。母星では低評価行動。" },
        { speaker: "", text: "それでもリィナは、カップを両手で包んだまま席を立とうとしなかった。" },
        { speaker: "liina", text: "低評価でも、すぐ終了する必要はない。君の反応が安定している。" }
      ],
      next: "park_scene"
    },

    // シーン7B：ゲームセンターイベント。
    // 目的：クレーンゲームを資源回収訓練と誤解させ、成功体験と小さな贈り物を作る。
    arcade_scene: {
      label: "ゲームセンター調査",
      background: "arcade",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "", text: "ゲームセンターに入ると、音と光が一斉に押し寄せた。" },
        { speaker: "liina", text: "娯楽施設というより、訓練場。反射神経、資源回収、戦闘判断。" },
        { speaker: "protagonist", text: "クレーンゲームを戦闘に分類しないで。" },
        { speaker: "", text: "リィナは銀色のぬいぐるみを狙った。\n何度も失敗し、無表情のまま硬貨を追加しようとする。" },
        { speaker: "liina", text: "この資源、抵抗が強い。" },
        { speaker: "protagonist", text: "抵抗じゃなくてアームが弱いだけ。少し横から狙ってみて。" },
        { speaker: "", text: "助言通りに動かすと、ぬいぐるみがころんと落ちた。" },
        { speaker: "liina", text: "共同作戦成功。戦利品を君へ譲渡する。" },
        { speaker: "", text: "渡されたぬいぐるみは、なぜかリィナの発光ラインと同じ緑色のリボンをつけていた。" }
      ],
      next: "park_scene"
    },

    // シーン8：公園での会話。
    // 目的：母星では感情が不要とされる設定を出し、主人公の選択で感情への向き合い方を変える。
    park_scene: {
      label: "公園での会話",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "夕方の公園は、昼の騒がしさを少しずつ手放していた。" },
        { speaker: "", text: "ベンチに座ると、リィナは買ったプリンの袋を膝に置いた。\nまだ食べずに、何度も見ている。" },
        { speaker: "liina", text: "母星では、感情は効率を下げる。任務の邪魔になる。" },
        { speaker: "protagonist", text: "リィナも、そう思ってる？" },
        { speaker: "liina", text: "思っていた。今は、判断保留。" },
        { speaker: "", text: "偽装で隠れているはずのアンテナが、そこにあるみたいに視線が揺れた。" }
      ],
      choices: [
        { text: "感情は選ぶ理由になると言う", set: { trust: 1, freeWill: 1 }, params: { affection: 1, free_will_respect: 1 }, next: "emotion_reason" },
        { text: "効率が悪くても大事なものはあると言う", set: { affection: 1, earthCulture: 1 }, params: { affection: 1, earth_empathy: 1 }, next: "emotion_value" },
        { text: "リィナ自身はどうしたいか聞く", set: { freeWill: 1, affection: 1 }, params: { affection: 1, free_will_respect: 1 }, next: "emotion_will" }
      ]
    },
    emotion_reason: {
      label: "感情：選ぶ理由",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "感情は邪魔なだけじゃないよ。何を守るか、何を選ぶかの理由にもなる。" },
        { speaker: "liina", text: "選択理由。命令以外の基準。" },
        { speaker: "", text: "リィナは小さく息を吸った。\n人間の真似ではなく、自分で確かめるみたいに。" },
        { speaker: "liina", text: "君の言葉は、記録より優先して残る。困る。" }
      ],
      next: "observer_drone"
    },
    emotion_value: {
      label: "感情：非効率な価値",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "効率が悪くても大事なものはある。さっきのカフェとか、プリンとか。" },
        { speaker: "liina", text: "プリンは重要。否定しない。" },
        { speaker: "protagonist", text: "そこだけ即答なんだ。" },
        { speaker: "", text: "リィナの口元が、ほんの少しだけ動いた。笑った、ように見えた。" },
        { speaker: "liina", text: "非効率な価値。仮登録する。君と共有した時間を含む。" }
      ],
      next: "observer_drone"
    },
    emotion_will: {
      label: "感情：自分の意思",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "母星じゃなくて、リィナ自身はどうしたい？" },
        { speaker: "liina", text: "私自身。難しい質問。" },
        { speaker: "", text: "リィナは街の灯りを見た。\n侵略対象ではなく、初めて歩いた場所を見る目だった。" },
        { speaker: "liina", text: "まだ不明。でも、今日の調査を消去したくない。" }
      ],
      next: "observer_drone"
    },

    // シーン9：監視ドローン出現。
    // 目的：ラブコメから不穏へ転換し、リィナの母星と危険な力を再提示する。
    observer_drone: {
      label: "監視ドローン出現",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "街灯が一度だけ暗くなった。" },
        { speaker: "", text: "公園の木陰に、小さな緑の光が浮かんでいる。\n虫ではない。カメラでもない。" },
        { speaker: "liina", text: "母星監視ドローン。私の調査経路を追跡していた。" },
        { speaker: "protagonist", text: "見つかったら、まずい？" },
        { speaker: "liina", text: "報告されれば、君は感情汚染源として分類される可能性がある。" },
        { speaker: "", text: "リィナの声は静かだった。\nだからこそ、言葉だけが冷たく刺さる。" },
        { speaker: "liina", text: "安心して。処理する。" },
        { speaker: "", text: "偽装が一瞬だけ剥がれた。\n隠れていたアンテナの先が、鋭い緑に光る。" }
      ],
      choices: [
        { text: "危険なら任せる", set: { trust: 1, caution: 1 }, params: { affection: 1, wariness: 1 }, next: "drone_liina" },
        { text: "壊さずに止めてほしい", set: { freeWill: 1, earthCulture: 1 }, params: { free_will_respect: 1, earth_empathy: 1 }, next: "drone_nonlethal" },
        { text: "一緒に隠れる方法を探す", set: { affection: 1, trust: 1 }, params: { affection: 2 }, next: "drone_hide" }
      ]
    },
    drone_liina: {
      label: "ドローン対処：任せる",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "危険なら、リィナに任せる。" },
        { speaker: "liina", text: "了解。重要個体の保護を最優先。" },
        { speaker: "", text: "緑の光が一直線に伸びた。\nドローンは音もなく停止し、砂の上に落ちる。" },
        { speaker: "", text: "その鮮やかさに、背筋が少し冷えた。\n彼女はやっぱり、侵略者だった。" }
      ],
      next: "return_to_ufo"
    },
    drone_nonlethal: {
      label: "ドローン対処：停止",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "壊さずに止められる？　できれば、必要以上に傷つけたくない。" },
        { speaker: "liina", text: "機械に傷という概念は薄い。だが、君の要求を優先する。" },
        { speaker: "", text: "アンテナの光が細い糸みたいに伸びた。\nドローンは眠るように明滅を止める。" },
        { speaker: "liina", text: "非破壊停止。君の地球的倫理に適合。" }
      ],
      next: "return_to_ufo"
    },
    drone_hide: {
      label: "ドローン対処：共同行動",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "一緒に隠れよう。リィナだけが危ないことをしなくていい。" },
        { speaker: "liina", text: "君が私の危険を考慮している。演算が乱れる。" },
        { speaker: "", text: "二人で遊具の影へ身を寄せる。\n近すぎる距離で、リィナの発光ラインが布越しに淡く光った。" },
        { speaker: "liina", text: "共同回避、成功。接触時間は、必要措置。" }
      ],
      next: "return_to_ufo"
    },

    // シーン10：UFO帰還と章ラスト。
    // 目的：地球文化調査の変化をリィナ自身の言葉でまとめ、第4章の侵略計画へつなぐ。
    return_to_ufo: {
      label: "帰還と観察記録",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "UFOへ戻ると、地球観測ドームの静けさが耳に痛かった。" },
        { speaker: "", text: "さっきまで足の下にあった街が、また遠い青い星になる。" },
        { speaker: "liina", text: "地球文化調査、一次報告。コンビニ、学校、商店街、娯楽施設、公園。" },
        { speaker: "protagonist", text: "どうだった？　侵略の参考になった？" },
        { speaker: "liina", text: "なった。補給基地は便利。教育施設は危険。プリンは重要。" },
        { speaker: "protagonist", text: "最後だけ熱量が違う。" },
        { speaker: "", text: "リィナは端末に報告文を入力した。\nけれど、送信ボタンの手前で指が止まる。" },
        { speaker: "liina", text: "地球は非効率で、騒がしく、脆弱で、理解不能。" },
        { speaker: "", text: "緑の発光ラインが、いつもよりゆっくり明滅する。" },
        { speaker: "liina", text: "でも、消すには惜しい。" },
        { speaker: "", text: "その瞬間、閉じかけていた侵略計画フォルダが自動で開いた。" },
        { speaker: "", text: "母星からの未読命令。件名は『侵略計画、詳細報告を要求』。" },
        { speaker: "", text: "第3章クリア。リィナの侵略計画に、初めて地球の日常というノイズが混ざった。" }
      ],
      choices: [
        { text: "第4章へ進む", set: { chapter03Clear: true }, next: "start_chapter04" }
      ],
      ending: true
    },
    start_chapter04: {
      label: "第4章へ進みます",
      background: "earth_dome",
      lines: [
        { speaker: "", text: "第4章へ進みます。" }
      ],
      action: "chapter",
      chapter: "chapter04",
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
