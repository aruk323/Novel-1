window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter01",
  title: "第1章：銀緑の来訪者",
  summary: "UFOで目覚めた主人公が、リィナとの観察生活、脱出未遂、名前呼びを体験する短いプレイ可能版。",
  start: "wake",
  scenes: {
    wake: {
      label: "観察対象としての朝",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "銀色の天井に、緑の光が細く走っていた。\n目を開けても、そこは昨日までの部屋ではない。" },
        { speaker: "liina", text: "覚醒を確認。地球個体001、睡眠時間は六時間十二分。" },
        { speaker: "protagonist", text: "……おはよう、で合ってる？" },
        { speaker: "liina", text: "挨拶プロトコルを受理。おはよう、サンプル。" },
        { speaker: "", text: "リィナの顔が近い。無表情なのに、アンテナの先だけが淡く光っている。" }
      ],
      next: "morningChoice"
    },
    morningChoice: {
      label: "朝の反応",
      background: "isolation_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "liina", text: "心拍数上昇。逃走準備？　それとも照れ？" }
      ],
      choices: [
        { text: "近いから照れていると正直に言う", set: { affection: 1, honest: true }, next: "rules_honest" },
        { text: "逃げる準備だと強がる", set: { escape: 1, defiant: true }, next: "rules_defiant" },
        { text: "サンプル呼びをまず訂正する", set: { nameWish: 1 }, next: "rules_name" }
      ]
    },
    rules_honest: {
      label: "UFO内ルール説明",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "liina", text: "照れ。地球人の接近反応として記録する。……私の発光ラインの変化は、無関係。" },
        { speaker: "", text: "彼女は端末を開き、こちらの反論を待たずに船内規則を表示した。" }
      ],
      next: "rules_common"
    },
    rules_defiant: {
      label: "UFO内ルール説明",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "liina", text: "逃走は非推奨。君の筋力では、隔離扉に勝てない。" },
        { speaker: "", text: "淡々とした声が、逆に怖い。けれど彼女は、すぐ端末に船内規則を映した。" }
      ],
      next: "rules_common"
    },
    rules_name: {
      label: "UFO内ルール説明",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "liina", text: "名称への執着を確認。地球人は識別番号より固有名を好む。" },
        { speaker: "", text: "リィナは真面目にうなずき、端末に船内規則を表示した。" }
      ],
      next: "rules_common"
    },
    rules_common: {
      label: "船内規則",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "liina", text: "規則一。許可なく船外へ出ない。規則二。緑色に光る装置へ触れない。" },
        { speaker: "protagonist", text: "だいたい全部緑色に光ってるんだけど。" },
        { speaker: "liina", text: "良い観察眼。では、すべて触れないこと。" },
        { speaker: "liina", text: "私は地球侵略先遣調査員、リィナ・シルヴェルグリーン。君は地球人代表サンプル。" },
        { speaker: "", text: "冗談みたいな言葉なのに、彼女の瞳は少しも笑っていなかった。" }
      ],
      next: "meal"
    },
    meal: {
      label: "初めての食事イベント",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "liina", text: "地球料理を再現した。カレー、プリン、ラーメン、たこ焼き。人気栄養素を統合。" },
        { speaker: "", text: "皿の上では、黄色くて黒くて甘い匂いのする何かが、ゆっくり泡を立てていた。" },
        { speaker: "protagonist", text: "統合しないで。料理は合体ロボじゃない。" },
        { speaker: "liina", text: "失敗？" }
      ],
      choices: [
        { text: "正直に、失敗だと伝える", set: { honest: true, affection: 1 }, next: "meal_honest" },
        { text: "文化調査として一口だけ食べる", set: { trust: 1, affection: 1 }, next: "meal_try" },
        { text: "プリンだけ別にしてほしいと頼む", set: { pudding: true }, next: "meal_pudding" }
      ]
    },
    meal_honest: {
      label: "料理の学習",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "liina", text: "失敗を確認。胸部に軽微な圧迫感。これは料理データの損傷によるもの。" },
        { speaker: "", text: "アンテナがしょんぼり下がった。少しだけ、言いすぎた気がした。" }
      ],
      next: "escape"
    },
    meal_try: {
      label: "料理の学習",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "liina", text: "摂取するの？　地球人の勇気を記録する。" },
        { speaker: "", text: "一口で、甘さと辛さと海の気配が同時に来た。宇宙は広い。胃袋には広すぎる。" }
      ],
      next: "escape"
    },
    meal_pudding: {
      label: "料理の学習",
      background: "food_room",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "liina", text: "プリン。地球文明の中枢物資と推測。追加調査する。" },
        { speaker: "", text: "無表情のまま、アンテナの先がさっきより明るく光った。" }
      ],
      next: "escape"
    },
    escape: {
      label: "脱出未遂",
      background: "corridor",
      characters: [],
      lines: [
        { speaker: "", text: "食後。リィナが端末に夢中になった隙に、隔離部屋の外へ出た。" },
        { speaker: "", text: "白銀の通路は静かで、床の緑のラインだけが呼吸みたいに明滅している。" },
        { speaker: "protagonist", text: "出口……いや、せめて地球が見える場所は。" }
      ],
      next: "dome"
    },
    dome: {
      label: "地球観測ドーム",
      background: "earth_dome",
      characters: [],
      lines: [
        { speaker: "", text: "扉が開いた先に、青い星があった。" },
        { speaker: "", text: "地球。昨日まで歩いていた街も、コンビニも、帰り道も、全部あの光の中にある。" },
        { speaker: "", text: "本当に攫われたのだと、ようやく実感した。" }
      ],
      next: "domeChoice"
    },
    domeChoice: {
      label: "地球を見下ろして",
      background: "earth_dome",
      characters: [{ id: "liina", position: "right", expression: "cool" }],
      lines: [
        { speaker: "liina", text: "船外へ出れば死ぬ。逃走経路としては不適切。" },
        { speaker: "protagonist", text: "追ってきたのに、怒らないんだ。" },
        { speaker: "liina", text: "怒りは非効率。君の喪失は、観察計画の重大な損失。" }
      ],
      choices: [
        { text: "それでも地球へ帰りたいと言う", set: { earth: 1 }, next: "name_event" },
        { text: "なぜ侵略するのか尋ねる", set: { curiosity: 1 }, next: "name_event" },
        { text: "心配してくれたのかと聞く", set: { affection: 1 }, next: "name_event_soft" }
      ]
    },
    name_event: {
      label: "名前呼びイベント",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "あと、地球個体001とかサンプルとか、やめてほしい。名前がある。" },
        { speaker: "liina", text: "名前。識別精度は番号の方が高い。" },
        { speaker: "protagonist", text: "そういう問題じゃない。" },
        { speaker: "liina", text: "……ユーザー。発音は、これで正しい？" }
      ],
      next: "last_record"
    },
    name_event_soft: {
      label: "名前呼びイベント",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "liina", text: "心配ではない。重要個体の破損を避けただけ。" },
        { speaker: "protagonist", text: "じゃあ、その重要個体を番号で呼ばないで。名前がある。" },
        { speaker: "liina", text: "……ユーザー。これで、君の演算は安定する？" },
        { speaker: "", text: "彼女の声はいつも通り平らだった。けれど、アンテナは少しだけ揺れていた。" }
      ],
      next: "last_record"
    },
    last_record: {
      label: "観察記録",
      background: "observation_room",
      characters: [{ id: "liina", position: "center", expression: "curious" }],
      lines: [
        { speaker: "", text: "その夜。観察室の端末に、リィナの記録が残っていた。" },
        { speaker: "liina", text: "地球個体――ユーザーは、予測より騒がしい。非効率。だが……" },
        { speaker: "liina", text: "一緒にいると、退屈しない。" },
        { speaker: "", text: "第1章クリア。銀緑の来訪者との共同生活は、まだ始まったばかりだ。" }
      ],
      choices: [
        { text: "タイトルへ戻る", set: { chapter01Clear: true }, next: "return_title" },
        { text: "章選択へ戻る", set: { chapter01Clear: true }, next: "return_chapters" }
      ],
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
