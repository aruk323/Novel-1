window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06B",
  title: "第6章B：銀緑の同族",
  summary: "主人公の同族化が臨界へ進み、リィナとの精神リンクが強まる。洗脳を受け入れるか、自由意志を守るかでB1/B2だけに分岐するルート。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "銀緑の同調",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "地球観測ドームの窓に、青い惑星が浮かんでいる。" },
        { speaker: "", text: "けれど今は、その青の奥に銀緑色の網目が見えた。" },
        { speaker: "", text: "都市の灯りも、雲の流れも、侵略座標として読み取れてしまう。" },
        { speaker: "protagonist", text: "……地球が、別の星みたいに見える" },
        { speaker: "liina", text: "同族化処理、第三段階へ到達。視覚野がヴェルディア標準波長に適応している" },
        { speaker: "", text: "リィナは淡々と告げた。" },
        { speaker: "", text: "それでもアンテナの先だけが、小さく震えている。" },
        { speaker: "liina", text: "痛みは？　記憶の欠落は？　プリンへの嗜好低下は？" },
        { speaker: "protagonist", text: "最後の診断、そこまで重要なのか" },
        { speaker: "liina", text: "重要。君が君である証拠の一部" },
        { speaker: "", text: "冗談みたいな項目なのに、彼女の声は本気だった。" }
      ],
      next: "link_diagnosis"
    },
    link_diagnosis: {
      label: "精神リンク診断",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "研究室の中央で、同族化装置が低く鳴っていた。" },
        { speaker: "", text: "透明な管を巡る銀緑色の液体が、こちらの鼓動に合わせて明滅する。" },
        { speaker: "ネム", text: "地球個体001の細胞変換率、臨界値を突破。おめでとうございます。分類上はかなり宇宙人です" },
        { speaker: "protagonist", text: "お祝いの言い方が怖い" },
        { speaker: "liina", text: "訂正。まだ戻せる領域はある。完全に私たちと同じではない" },
        { speaker: "", text: "戻せる。" },
        { speaker: "", text: "その言葉に、リィナ自身が少しだけ傷ついたように見えた。" },
        { speaker: "liina", text: "母星艦隊が接近している。君の同族化反応は、侵略計画の成功証明になる" },
        { speaker: "protagonist", text: "つまり、俺はサンプルとして提出される" },
        { speaker: "liina", text: "母星の命令では、肯定" },
        { speaker: "", text: "リィナの指先が端末の上で止まる。" },
        { speaker: "liina", text: "でも、私は君を標本にしたくない" },
        { speaker: "liina", text: "隣にいてほしい。命令ではない。たぶん、私の意思" }
      ],
      next: "mothership_order"
    },
    mothership_order: {
      label: "忠誠制御命令",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "空中に銀緑の通信窓が開いた。" },
        { speaker: "", text: "顔のない紋章が、研究室の温度を下げる。" },
        { speaker: "ヴェルディア司令", text: "先遣個体リィナ。同族化サンプルの同期を確認。忠誠制御を施せ" },
        { speaker: "liina", text: "忠誠制御は、記憶と判断領域を削る" },
        { speaker: "ヴェルディア司令", text: "肯定。自由意志は侵略効率を低下させる" },
        { speaker: "", text: "頭の奥で、知らない星の言葉がざわめいた。" },
        { speaker: "", text: "意味は分からない。" },
        { speaker: "", text: "けれど、従えば楽になることだけは分かる。" },
        { speaker: "protagonist", text: "これが、洗脳か" },
        { speaker: "liina", text: "まだ前段階。私が許可しなければ、完全同期は始まらない" },
        { speaker: "ヴェルディア司令", text: "許可せよ。対象はお前の隣に残る。抵抗も迷いも消える" },
        { speaker: "", text: "リィナの瞳が揺れた。" },
        { speaker: "", text: "それは彼女にとって、あまりにも甘い命令だった。" }
      ],
      next: "choice_preparation"
    },
    choice_preparation: {
      label: "自由意志の境界線",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "ドームへ戻ると、地球の夜側に街の灯りが散っていた。" },
        { speaker: "", text: "守りたい故郷にも、制圧すべき惑星にも見える。" },
        { speaker: "liina", text: "君を洗脳すれば、苦痛は減る。地球への迷いも薄くなる" },
        { speaker: "protagonist", text: "リィナは、それを望んでる？" },
        { speaker: "liina", text: "望む部分がある。否定できない" },
        { speaker: "", text: "正直すぎる答えだった。" },
        { speaker: "liina", text: "でも、君の意思が消えたら、私が観察してきた君ではなくなる" },
        { speaker: "liina", text: "だから最終決定権を渡す。命令ではない" },
        { speaker: "", text: "銀緑の鼓動が、胸の奥で強くなる。" },
        { speaker: "", text: "洗脳を受け入れれば、迷いは消える。" },
        { speaker: "", text: "拒めば、危うい自由意志を抱えたまま、リィナと宇宙へ進む。" }
      ],
      choices: [
        { text: "洗脳を受け入れ、リィナと母星に同調する", effects: { flags: { accepted_mind_control: true, refused_mind_control: false, ending_route: "B1" } }, next: "b1_sync" },
        { text: "洗脳を拒み、自分の意思でリィナと行く", effects: { flags: { refused_mind_control: true, accepted_mind_control: false, ending_route: "B2" } }, next: "b2_free_will" }
      ]
    },
    b1_sync: {
      label: "B1分岐：忠誠制御",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "protagonist", text: "もう、迷うのは疲れた。リィナのそばに残れるなら、それでいい" },
        { speaker: "liina", text: "確認。洗脳を受け入れる。取り消しは困難" },
        { speaker: "protagonist", text: "怖い。でも、リィナを失う方が怖い" },
        { speaker: "", text: "リィナは目を伏せた。" },
        { speaker: "liina", text: "私は君の恐怖を利用する。記録する。忘れない" },
        { speaker: "", text: "彼女の指が端末に触れる。" },
        { speaker: "", text: "銀緑色の光が、足元から静かに這い上がった。" },
        { speaker: "ヴェルディア司令", text: "忠誠制御を開始。地球個体001を同族個体へ再定義する" },
        { speaker: "", text: "地球の記憶が、遠い水音みたいに薄れていく。" },
        { speaker: "", text: "最後まで残っていたのは、リィナの手の温度だった。" }
      ],
      next: "ending_b1"
    },
    b2_free_will: {
      label: "B2分岐：洗脳なき同族化",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "protagonist", text: "同族化は受け入れる。でも、意思は渡さない" },
        { speaker: "liina", text: "母星は非効率と判断する" },
        { speaker: "protagonist", text: "リィナは？" },
        { speaker: "liina", text: "危険で、面倒で、成功率が低い" },
        { speaker: "", text: "そこで、アンテナの先が小さく揺れた。" },
        { speaker: "liina", text: "でも、君らしい" },
        { speaker: "", text: "リィナは忠誠制御の回線だけを切断した。" },
        { speaker: "ネム", text: "警告。洗脳なし同族化は母星規格外です。恋愛感情、反抗心、プリン嗜好が残留します" },
        { speaker: "protagonist", text: "残してくれ。全部、自分の一部だ" },
        { speaker: "liina", text: "了解。君の自由意志を保持したまま、銀緑の同族化を完了する" },
        { speaker: "", text: "光が満ちる。" },
        { speaker: "", text: "怖さは消えない。だからこそ、自分で選んだのだと分かった。" }
      ],
      next: "ending_b2"
    },
    ending_b1: {
      label: "エンディングB1：あなたも侵略者",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "目を開けると、地球は青い資源惑星としてそこにあった。" },
        { speaker: "", text: "懐かしい、という感情は検索できない。" },
        { speaker: "", text: "代わりに、侵略座標と抵抗予測だけが滑らかに並ぶ。" },
        { speaker: "liina", text: "同族個体001。状態報告" },
        { speaker: "protagonist", text: "忠誠制御、安定。地球制圧計画への協力意思、確認" },
        { speaker: "", text: "自分の声なのに、揺れがない。" },
        { speaker: "liina", text: "君は私の隣にいる。もう、離脱も拒絶も発生しない" },
        { speaker: "protagonist", text: "肯定。リィナの命令を最優先する" },
        { speaker: "", text: "その言葉に、リィナの瞳が一瞬だけ曇った。" },
        { speaker: "", text: "けれど曇りの意味を、今の自分は解析しない。" },
        { speaker: "ヴェルディア司令", text: "地球侵略第一段階を開始せよ" },
        { speaker: "liina", text: "了解。対象惑星を管理下へ置く" },
        { speaker: "", text: "二人の瞳が同じ銀緑色に光る。" },
        { speaker: "", text: "地球人だった頃の名前は、もう遠いノイズになった。" },
        { speaker: "", text: "エンディングB1：あなたも侵略者" }
      ],
      choices: [
        { text: "タイトルへ戻る", next: "ending_to_title" },
        { text: "エンディング一覧へ戻る", next: "ending_to_chapters" }
      ],
      ending: true
    },
    ending_b2: {
      label: "エンディングB2：一緒に宇宙へ",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "同族化が完了しても、地球の青は美しいままだった。" },
        { speaker: "", text: "守りたい気持ちも、後ろめたさも、リィナの手を離したくない気持ちも残っている。" },
        { speaker: "ネム", text: "自由意志保持を確認。母星基準では重大な規格違反です" },
        { speaker: "liina", text: "規格違反を採用する。君は君のまま、私の同族になった" },
        { speaker: "protagonist", text: "これからどうする？" },
        { speaker: "liina", text: "母星へ行く。地球侵略計画を内部から書き換える" },
        { speaker: "protagonist", text: "反逆寄りの共犯だな" },
        { speaker: "liina", text: "肯定。君も同罪" },
        { speaker: "", text: "リィナは無表情のまま手を差し出した。" },
        { speaker: "", text: "その手を取ると、胸の奥で銀緑の星の声が響く。" },
        { speaker: "liina", text: "怖い？" },
        { speaker: "protagonist", text: "怖い。でも、選んだ" },
        { speaker: "liina", text: "なら、記録する。君は洗脳されず、私と宇宙へ行く" },
        { speaker: "", text: "UFOが地球の重力を離れる。" },
        { speaker: "", text: "窓の向こうで青い惑星が小さくなり、銀緑の航路が開いた。" },
        { speaker: "liina", text: "一緒に宇宙へ。命令ではなく、提案" },
        { speaker: "protagonist", text: "提案、受けるよ" },
        { speaker: "", text: "エンディングB2：一緒に宇宙へ" }
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
        { speaker: "", text: "章選択へ戻ります。第6章Bの到達エンディングはB1/B2のみです。" }
      ],
      action: "chapters"
    }
  }
});
