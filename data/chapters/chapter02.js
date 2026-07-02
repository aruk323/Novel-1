window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter02",
  title: "第2章：UFO内共同生活実験",
  summary: "共同生活、娯楽調査、手を繋ぐ実験、重力制御トラブルを描く短いプレイ可能版。",
  start: "shared_life",
  scenes: {
    shared_life: {
      label: "共同生活の開始",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "第2章。UFOでの一日は、窓のない朝から始まった。" },
        { speaker: "liina", text: "起床を確認。寝返り四十二回、ため息七回、寝言一回。" },
        { speaker: "protagonist", text: "寝言まで記録しないでほしい。そこはプライバシー。" },
        { speaker: "liina", text: "プライバシー。観察効率を低下させる地球文化概念。" },
        { speaker: "", text: "無表情のまま、リィナは端末に大きく『要調査』と書き込んだ。" }
      ],
      next: "privacy_choice"
    },
    privacy_choice: {
      label: "プライバシー交渉",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "liina", text: "共同生活実験を開始する。君の要求を一つだけ聞く。合理的範囲で。" }
      ],
      choices: [
        { text: "寝ている間の観察だけはやめてほしい", set: { privacy: 1, trust: 1 }, next: "privacy_sleep" },
        { text: "観察するなら自分もリィナを観察する", set: { curiosity: 1, affection: 1 }, next: "privacy_observe" },
        { text: "まず娯楽を用意してほしい", set: { culture: 1 }, next: "entertainment" }
      ]
    },
    privacy_sleep: {
      label: "睡眠観察の停止要求",
      background: "sleep_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "protagonist", text: "寝ている間くらい、観察されずに休ませてほしい。" },
        { speaker: "liina", text: "睡眠中は無防備。観察価値が高い。" },
        { speaker: "", text: "リィナのアンテナが、ほんの少しだけ下がった。" },
        { speaker: "liina", text: "……ただし、重要個体の休息も実験継続に必要。睡眠映像の保存を一時停止する。" }
      ],
      next: "entertainment"
    },
    privacy_observe: {
      label: "相互観察",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "観察するなら、こっちもリィナを観察する。フェアにいこう。" },
        { speaker: "liina", text: "私を？　観察対象が観察者を観察する。構造が反転。" },
        { speaker: "", text: "リィナは平然としているつもりらしい。けれど、発光ラインが忙しく明滅していた。" },
        { speaker: "liina", text: "許可する。私は優秀なので、観察されても問題ない。たぶん。" }
      ],
      next: "entertainment"
    },
    entertainment: {
      label: "地球人の娯楽調査",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "", text: "退屈だと訴えると、リィナは船内の壁一面に地球の映像を並べた。" },
        { speaker: "liina", text: "ゲーム、漫画、恋愛ドラマを収集した。地球人の精神防衛装置と推測。" },
        { speaker: "protagonist", text: "娯楽を全部防衛装置にしないで。" },
        { speaker: "", text: "恋愛ドラマの画面で、登場人物たちが手を繋いで見つめ合っていた。" },
        { speaker: "liina", text: "接触と凝視で相手の判断を鈍らせる。侵略戦略として有効。" }
      ],
      next: "hand_choice"
    },
    hand_choice: {
      label: "手を繋ぐ実験",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "liina", text: "手を繋ぐ。地球の恋愛儀式における初級接触行為。実行する。" },
        { speaker: "", text: "差し出された手は冷たそうに見えて、指先だけ淡く光っていた。" }
      ],
      choices: [
        { text: "素直に手を繋ぐ", set: { affection: 1, trust: 1 }, next: "hand_accept" },
        { text: "実験なら条件を決めようと言う", set: { curiosity: 1 }, next: "hand_terms" },
        { text: "照れるから少し待ってと頼む", set: { affection: 1, dependence: 1 }, next: "hand_shy" }
      ]
    },
    hand_accept: {
      label: "接触実験：受諾",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "リィナの手を握る。思ったより柔らかく、少しだけ温かい。" },
        { speaker: "liina", text: "君の心拍数上昇。私の発光ラインも上昇。後者は機器誤差。" },
        { speaker: "protagonist", text: "機器誤差にしては、アンテナが揺れてる。" },
        { speaker: "liina", text: "船内気流。たぶん。" }
      ],
      next: "gravity_trouble"
    },
    hand_terms: {
      label: "接触実験：条件",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "実験なら条件を決めよう。嫌になったらすぐ離すこと。" },
        { speaker: "liina", text: "自由意志の確認。地球人は接触にも契約を必要とする。" },
        { speaker: "", text: "彼女は真面目にうなずき、恐る恐る指を重ねた。" },
        { speaker: "liina", text: "条件を遵守する。……離す条件は、まだ発生していない。" }
      ],
      next: "gravity_trouble"
    },
    hand_shy: {
      label: "接触実験：照れ",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "少し待って。こういうの、急だと照れる。" },
        { speaker: "liina", text: "照れ。接触前から発生する精神反応。危険度は低いが、興味深い。" },
        { speaker: "", text: "待つと言いながら、リィナの手は引っ込まなかった。" },
        { speaker: "liina", text: "準備完了まで待機する。私は急いでいない。たぶん。" }
      ],
      next: "gravity_trouble"
    },
    gravity_trouble: {
      label: "重力制御トラブル",
      background: "gravity_control",
      characters: [{ id: "liina", position: "right", expression: "cool" }],
      lines: [
        { speaker: "", text: "その瞬間、床の緑のラインが強く瞬いた。" },
        { speaker: "liina", text: "重力制御にノイズ。原因は、接触実験中の私の演算乱れではない。" },
        { speaker: "protagonist", text: "言う前に否定した。" },
        { speaker: "", text: "体がふわりと浮く。天井へ流される寸前、リィナの腕がこちらを抱き止めた。" },
        { speaker: "liina", text: "重要個体を確保。破損なし。接触時間、延長。" }
      ],
      next: "antenna_warning"
    },
    antenna_warning: {
      label: "アンテナ能力説明",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "重力が戻ると、リィナはアンテナの先端を淡く光らせた。" },
        { speaker: "liina", text: "私のアンテナは通信、催眠、記憶編集、身体制御に使用できる。" },
        { speaker: "protagonist", text: "今、さらっと怖い単語が混ざった。" },
        { speaker: "liina", text: "安心して。君には無断使用しない。現時点では。" },
        { speaker: "", text: "ラブコメみたいな距離の近さが、一瞬で冷たい現実に戻る。彼女は可愛いだけの存在ではない。" }
      ],
      next: "goodnight"
    },
    goodnight: {
      label: "おやすみイベント",
      background: "sleep_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "夜。隔離部屋の明かりが、地球の夕焼けに似た色へ落ちた。" },
        { speaker: "liina", text: "共同生活実験、一日目を終了する。" },
        { speaker: "protagonist", text: "リィナも休むの？" },
        { speaker: "liina", text: "私は隣室で待機する。君が近くにいる方が、観察効率が安定する。" },
        { speaker: "", text: "それは、少しだけ別の言葉に聞こえた。" },
        { speaker: "liina", text: "おやすみ、ユーザー。発音は、これで正しい？" },
        { speaker: "", text: "第2章クリア。共同生活は、もう実験だけでは説明できなくなり始めていた。" }
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
