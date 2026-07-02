window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter02",
  title: "第2章：UFO内共同生活実験",
  summary: "UFO内の共同生活、娯楽調査、接触実験、重力制御トラブル、アンテナ能力の危険性を描く第2章本番用前半版。",
  start: "cohabitation_start",
  scenes: {
    // シーン1：共同生活の開始。
    // 目的：第1章後の距離感を引き継ぎ、観察者と生活相手の境界が曖昧になり始めたことを示す。
    cohabitation_start: {
      label: "共同生活の開始",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "第2章。UFOでの朝は、窓のない白銀の部屋から始まった。" },
        { speaker: "", text: "地球の朝なら、カーテンの隙間から光が入って、どこかで車の音がする。\nここにあるのは、緑の発光ラインと、低い機械音だけだった。" },
        { speaker: "liina", text: "起床を確認。睡眠時間、六時間四十一分。寝返り四十二回、ため息七回、寝言一回。" },
        { speaker: "protagonist", text: "寝言まで記録しないでほしい。そこはプライバシー。" },
        { speaker: "liina", text: "プライバシー。観察効率を低下させる地球文化概念。" },
        { speaker: "", text: "リィナは端末に大きく『要調査』と書き込んだ。\n悪気はなさそうなのが、余計に厄介だった。" }
      ],
      next: "privacy_rules"
    },

    // シーン2：生活ルールの交渉。
    // 目的：主人公の選択で関係の方向性を出し、共同生活の基本ルールを作る。
    privacy_rules: {
      label: "生活ルールの交渉",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "liina", text: "共同生活実験を開始する。君の要求を三項目まで受理する。合理的範囲で。" },
        { speaker: "protagonist", text: "実験じゃなくて生活って呼んでほしいけど、まずはそこからか。" },
        { speaker: "", text: "リィナは首を少し傾けた。\nアンテナの先が、こちらの言葉を測るように小さく明滅する。" }
      ],
      choices: [
        { text: "睡眠中の映像保存をやめてほしい", set: { privacy: 1, trust: 1 }, next: "daily_schedule" },
        { text: "観察するなら自分もリィナを観察する", set: { curiosity: 1, affection: 1 }, next: "daily_schedule" },
        { text: "名前で呼ぶことを生活ルールに入れる", set: { nameWish: 1, affection: 1 }, next: "daily_schedule" }
      ]
    },

    // シーン3：共同生活スケジュール。
    // 目的：UFO内生活の具体像を見せつつ、リィナが主人公の存在を日課に組み込み始めたことを描く。
    daily_schedule: {
      label: "共同生活スケジュール",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "生活ルールは、リィナの端末に無機質な文字で並んだ。" },
        { speaker: "liina", text: "睡眠観察は数値のみ。映像保存は緊急時を除き停止。呼称は、ユーザーを優先。" },
        { speaker: "protagonist", text: "ちゃんと聞いてくれたんだ。" },
        { speaker: "liina", text: "重要個体の反発は、共同生活実験の継続率を下げる。対策は合理的。" },
        { speaker: "", text: "合理的と言いながら、リィナは少しだけ視線を逸らした。\n発光ラインが、さっきより柔らかく光っている。" },
        { speaker: "liina", text: "次に、娯楽を支給する。地球人は退屈で性能が低下するらしい。" }
      ],
      next: "entertainment_research"
    },

    // シーン4：地球人の娯楽調査。
    // 目的：ラブコメの入口として地球文化を誤解させ、恋愛ドラマと接触実験へつなげる。
    entertainment_research: {
      label: "地球人の娯楽調査",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "", text: "研究室の壁一面に、地球の映像が浮かび上がった。\nゲーム、漫画、料理番組、恋愛ドラマ。選び方が雑なのに、量だけは膨大だった。" },
        { speaker: "liina", text: "地球娯楽を収集した。精神防衛、繁殖誘導、集団統治の三分類に仮置きする。" },
        { speaker: "protagonist", text: "娯楽を全部侵略目線で分類しないで。" },
        { speaker: "liina", text: "では、君が分類して。地球人監修データとして採用する。" }
      ],
      choices: [
        { text: "まずゲームから教える", set: { culture: 1, curiosity: 1 }, next: "romance_misread" },
        { text: "漫画は感情を学びやすいと勧める", set: { earthCulture: 1, affection: 1 }, next: "romance_misread" },
        { text: "恋愛ドラマは危険だから後回しにする", set: { caution: 1 }, next: "romance_misread" }
      ]
    },

    // シーン5：恋愛ドラマの誤解。
    // 目的：恋愛行動を精神干渉として誤読させ、手を繋ぐ実験を自然に発生させる。
    romance_misread: {
      label: "恋愛ドラマの誤解",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "結局、リィナが最初に停止したのは恋愛ドラマだった。\n画面の中で、二人の登場人物が夕焼けの橋の上で手を繋いでいる。" },
        { speaker: "liina", text: "接触、凝視、甘い言語。対象の判断力を低下させる複合精神干渉に見える。" },
        { speaker: "protagonist", text: "それを恋愛って呼ぶ人もいる。少なくとも侵略手段ではない。" },
        { speaker: "liina", text: "恋愛。地球人が自発的に拘束関係へ移行する現象。危険だが、興味深い。" },
        { speaker: "", text: "彼女のアンテナが、画面の二人とこちらを交互に指すみたいに揺れた。" }
      ],
      next: "hand_experiment"
    },

    // シーン6：手を繋ぐ実験。
    // 目的：第2章のラブコメ中心イベント。選択で好感、好奇心、依存方向を分ける。
    hand_experiment: {
      label: "手を繋ぐ実験",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "liina", text: "手を繋ぐ。地球の恋愛儀式における初級接触行為。実行する。" },
        { speaker: "protagonist", text: "実行する、で始めるものじゃないと思う。" },
        { speaker: "", text: "差し出された手は冷たそうに見えて、指先だけ淡く光っていた。\nリィナは無表情だが、アンテナの先は落ち着きなく揺れている。" }
      ],
      choices: [
        { text: "素直に手を繋ぐ", set: { affection: 1, trust: 1 }, next: "gravity_trouble" },
        { text: "嫌になったら離す条件で受ける", set: { trust: 1, freeWill: 1 }, next: "gravity_trouble" },
        { text: "リィナの方が照れてないか聞く", set: { affection: 1, dependence: 1 }, next: "gravity_trouble" }
      ]
    },

    // シーン7：重力制御トラブル。
    // 目的：接触でリィナ自身も乱れることを見せ、ラブコメ直後にUFOの危険を混ぜる。
    gravity_trouble: {
      label: "重力制御トラブル",
      background: "gravity_control",
      characters: [{ id: "liina", position: "right", expression: "flustered" }],
      lines: [
        { speaker: "", text: "手が触れた瞬間、床の緑のラインが強く瞬いた。" },
        { speaker: "liina", text: "重力制御にノイズ。原因は、接触実験中の私の演算乱れではない。" },
        { speaker: "protagonist", text: "言う前に否定した。" },
        { speaker: "", text: "体がふわりと浮く。\n天井へ流される寸前、リィナの腕がこちらを抱き止めた。" },
        { speaker: "liina", text: "重要個体を確保。破損なし。接触時間、延長。" },
        { speaker: "", text: "腕の力は確かだった。\nけれど、リィナのアンテナは、本人の声よりずっと正直に震えていた。" }
      ],
      next: "liina_room"
    },

    // シーン8：リィナの部屋と観察データ。
    // 目的：主人公への観察量が異常なほど増えていることを示し、愛着と支配欲の境界を匂わせる。
    liina_room: {
      label: "リィナの部屋",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "重力制御の点検という名目で、リィナの私室に入ることになった。" },
        { speaker: "", text: "壁には地球の地図、料理の失敗記録、そして自分に関する観察ログが並んでいる。\n心拍、発言、表情、プリンへの反応。量が多すぎる。" },
        { speaker: "protagonist", text: "これ、全部自分の記録？" },
        { speaker: "liina", text: "重要個体なので。通常の観察対象より、記録密度が高い。" },
        { speaker: "", text: "一番新しいフォルダ名は、『ユーザーといる時の異常安定』だった。" }
      ],
      choices: [
        { text: "記録が多すぎて少し怖いと言う", set: { caution: 1, freeWill: 1 }, next: "antenna_warning" },
        { text: "大事に記録してくれたのは分かると言う", set: { affection: 1, trust: 1 }, next: "antenna_warning" },
        { text: "自分にもリィナの記録を作らせてほしい", set: { curiosity: 1, affection: 1 }, next: "antenna_warning" }
      ]
    },

    // シーン9：アンテナ能力説明。
    // 目的：ラブコメから不穏へ切り替え、リィナが催眠や記憶操作もできる危険な侵略者であることを再提示する。
    antenna_warning: {
      label: "アンテナ能力説明",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "リィナはアンテナの先端を淡く光らせた。\nさっきまで頼りなく揺れていた器官が、今は鋭い道具に見える。" },
        { speaker: "liina", text: "私のアンテナは通信、催眠、記憶編集、身体制御、簡易精神リンクに使用できる。" },
        { speaker: "protagonist", text: "今、さらっと怖い単語がいくつも混ざった。" },
        { speaker: "liina", text: "安心して。君には無断使用しない。現時点では。" },
        { speaker: "protagonist", text: "現時点では、を消して。" },
        { speaker: "", text: "リィナは答えなかった。\n代わりに、端末の侵略計画フォルダを静かに閉じる。" },
        { speaker: "liina", text: "君の自由意志は、観察継続に必要。だから、壊さない。" },
        { speaker: "", text: "優しい言葉の形をしているのに、どこか冷たい。\n彼女は可愛いだけの存在ではない。" }
      ],
      next: "goodnight"
    },

    // シーン10：おやすみイベント。
    // 目的：共同生活が習慣化し始めた余韻を置き、第2章前半の到達点として軽い愛着を示す。
    goodnight: {
      label: "おやすみイベント",
      background: "sleep_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "夜。隔離部屋の明かりが、地球の夕焼けに似た色へ落ちた。" },
        { speaker: "liina", text: "共同生活実験、一日目を終了する。睡眠中の映像保存は停止。約束は保持している。" },
        { speaker: "protagonist", text: "リィナも休むの？" },
        { speaker: "liina", text: "私は隣室で待機する。君が近くにいる方が、観察効率が安定する。" },
        { speaker: "", text: "それは、少しだけ別の言葉に聞こえた。\n本人はまだ、その言葉を知らないふりをしている。" },
        { speaker: "liina", text: "おやすみ、ユーザー。発音は、これで正しい？" },
        { speaker: "", text: "第2章前半クリア。共同生活は、もう実験だけでは説明できなくなり始めていた。" }
      ],
      choices: [
        { text: "章選択へ戻る", set: { chapter02Clear: true }, next: "return_chapters" },
        { text: "タイトルへ戻る", set: { chapter02Clear: true }, next: "return_title" }
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
