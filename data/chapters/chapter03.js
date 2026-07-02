window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter03",
  title: "第3章：地球文化調査と偽装デート",
  summary: "リィナが偽装装置で地上へ降り、コンビニと街の灯りを調査する第3章の短いプレイ可能版。",
  start: "infiltration_briefing",
  scenes: {
    // シーン1：地球潜入任務。
    // 目的：UFO外へ出る理由を作り、偽装デートのラブコメ導入を行う。
    infiltration_briefing: {
      label: "地球潜入任務",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "第3章。地球観測ドームの下で、夜の街が宝石みたいに光っていた。" },
        { speaker: "", text: "リィナはその光を、侵略地図の上に重ねるように見つめている。" },
        { speaker: "liina", text: "地球文化調査フェーズを開始する。対象区域、君の生活圏。目的、日常の解析。" },
        { speaker: "protagonist", text: "つまり、外に出るってこと？" },
        { speaker: "liina", text: "肯定。偽装装置を使用する。私は地球人に見える。たぶん。" },
        { speaker: "", text: "たぶん、という言葉が一番不安だった。" }
      ],
      next: "disguise_choice"
    },

    disguise_choice: {
      label: "偽装服選択",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "研究室の壁に、地球の服装データが浮かぶ。制服風、白いパーカー、黒いジャケット。" },
        { speaker: "liina", text: "君の監修を要求する。地球人社会へ自然に潜入できる服装を選択して。" },
        { speaker: "protagonist", text: "自然に、って言うには本人の存在感が強すぎるんだけど。" },
        { speaker: "", text: "リィナのアンテナは偽装で隠れるらしい。けれど、緑の瞳だけは少しだけ光を残していた。" }
      ],
      choices: [
        { text: "白いパーカーを勧める", set: { earthCulture: 1, affection: 1 }, next: "hoodie_reaction" },
        { text: "制服風の服を選ぶ", set: { schoolFlag: 1, curiosity: 1 }, next: "uniform_reaction" },
        { text: "黒いジャケットで目立たなくする", set: { caution: 1, freeWill: 1 }, next: "jacket_reaction" }
      ]
    },

    hoodie_reaction: {
      label: "偽装服：白いパーカー",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "白いパーカーなら、柔らかい雰囲気で街に馴染みやすいと思う。" },
        { speaker: "liina", text: "柔らかい雰囲気。防御力ではなく、印象値を上げる装備。理解した。" },
        { speaker: "", text: "着替えたリィナは、袖を少し余らせてこちらを見た。アンテナの隠れた頭が小さく傾く。" },
        { speaker: "liina", text: "君の視線滞留を確認。偽装成功？" }
      ],
      next: "convenience_store"
    },
    uniform_reaction: {
      label: "偽装服：制服風",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "制服風なら、学生っぽく見えるかも。学校の近くなら特に。" },
        { speaker: "liina", text: "地球教育施設への潜入適性が高い服装。採用する。" },
        { speaker: "", text: "リィナは襟元を正確すぎる角度で整えた。真面目すぎて、逆に目立つ。" },
        { speaker: "liina", text: "君と同じ集団に所属しているように見える？" }
      ],
      next: "convenience_store"
    },
    jacket_reaction: {
      label: "偽装服：黒いジャケット",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "黒いジャケットなら、夜の街では目立ちにくい。安全第一でいこう。" },
        { speaker: "liina", text: "安全第一。君は私の露見リスクを下げようとしている。記録する。" },
        { speaker: "", text: "リィナは無表情のまま袖を通した。緑の発光ラインが布の下で一瞬だけ明滅する。" },
        { speaker: "liina", text: "君の判断を信頼する。今回だけではない。たぶん。" }
      ],
      next: "convenience_store"
    },

    // シーン2：初めてのコンビニ。
    // 目的：リィナが地球の日常を侵略目線で誤解し、プリンを気に入る。
    convenience_store: {
      label: "初めてのコンビニ",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "転送光が消えると、そこは見慣れた夜のコンビニ前だった。自動ドアが開くたび、明るい音が鳴る。" },
        { speaker: "liina", text: "小型補給基地。食料、飲料、雑誌、支払い端末。民間施設にしては高機能。" },
        { speaker: "protagonist", text: "補給基地じゃなくてコンビニ。たしかに便利だけど。" },
        { speaker: "", text: "リィナは棚の前で止まった。視線の先には、黄色いプリンが並んでいる。" },
        { speaker: "liina", text: "この黄色い封印容器は？" },
        { speaker: "protagonist", text: "プリン。前に話した、地球の甘い食べ物。" },
        { speaker: "", text: "リィナの偽装された髪の下で、見えないはずのアンテナが揺れた気がした。" }
      ],
      choices: [
        { text: "プリンを買ってあげる", set: { affection: 1, earthCulture: 1 }, next: "pudding_gift" },
        { text: "自分で選ばせる", set: { freeWill: 1, trust: 1 }, next: "pudding_choice" },
        { text: "侵略物資じゃないと念押しする", set: { caution: 1 }, next: "pudding_warning" }
      ]
    },

    pudding_gift: {
      label: "プリン贈与",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "ひとつ買ってあげる。地球文化調査の初回サンプルってことで。" },
        { speaker: "liina", text: "贈与。対価なしの資源移譲。恋愛ドラマで確認した行動に近い。" },
        { speaker: "protagonist", text: "そこで恋愛ドラマを持ち出さない。" },
        { speaker: "", text: "リィナはプリンを両手で持った。無表情なのに、大事そうに見えた。" }
      ],
      next: "street_date"
    },
    pudding_choice: {
      label: "プリン選択",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "protagonist", text: "今日はリィナが選んでいい。自分で食べたいものを選ぶのも文化だから。" },
        { speaker: "liina", text: "自分で選ぶ。命令ではなく、嗜好による決定。難易度が高い。" },
        { speaker: "", text: "長い沈黙のあと、リィナは一番小さなプリンを選んだ。" },
        { speaker: "liina", text: "まずは低リスク個体から制圧する。" }
      ],
      next: "street_date"
    },
    pudding_warning: {
      label: "プリン注意",
      background: "convenience_store",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "念のため言うけど、プリンは侵略物資じゃないからね。" },
        { speaker: "liina", text: "了解。精神干渉効果を持つ甘味資源として仮分類する。" },
        { speaker: "protagonist", text: "分類が悪化してる。" },
        { speaker: "", text: "それでもリィナは、棚から目を離さなかった。興味は完全に固定されている。" }
      ],
      next: "street_date"
    },

    // シーン3：偽装デート作戦。
    // 目的：地球文化調査をデートとして誤認し、関係の変化と不穏な通信を示す。
    street_date: {
      label: "偽装デート作戦",
      background: "shopping_street",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "コンビニを出ると、夜の商店街はまだ少しだけ賑やかだった。店の灯り、人の声、遠くの自転車のベル。" },
        { speaker: "liina", text: "君の案内で歩く行為。地球文化資料では、デートに近似。" },
        { speaker: "protagonist", text: "これは調査。リィナがそう言い出したんだよ。" },
        { speaker: "liina", text: "偽装デート作戦。名称変更に問題はない。" },
        { speaker: "", text: "問題しかない名前だった。けれど、リィナは少しだけ歩幅を合わせてくる。" },
        { speaker: "liina", text: "地球は非効率。音も光も多い。でも、君がいる場所だと理解した。" },
        { speaker: "", text: "その時、リィナの瞳に細い緑のノイズが走った。街の音から、一瞬だけ温度が消える。" },
        { speaker: "liina", text: "母星から定時信号。侵略準備の進捗確認。" },
        { speaker: "protagonist", text: "今、返事するの？" },
        { speaker: "liina", text: "する。けれど、報告内容を修正する。地球文化は、即時破壊より追加観察が必要。" },
        { speaker: "", text: "リィナはプリンの袋を握り直した。無表情のまま、ほんの少しだけこちらの隣へ近づく。" },
        { speaker: "liina", text: "第3章短縮調査、完了。次回、学校とゲームセンターを追加調査する。君の同行を要求する。" },
        { speaker: "", text: "第3章クリア。UFOの外にある日常は、リィナの侵略計画に小さなノイズを残した。" }
      ],
      choices: [
        { text: "章選択へ戻る", set: { chapter03Clear: true }, next: "return_chapters" },
        { text: "タイトルへ戻る", set: { chapter03Clear: true }, next: "return_title" }
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
