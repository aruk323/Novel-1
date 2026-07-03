window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06A",
  title: "第6章A：侵略者の反逆",
  summary: "リィナが母星の命令に反逆し、地球と自分の意思を守る真ハッピーエンド直行ルート。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "侵略艦隊、地球圏へ",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "地球観測ドームの夜は、いつも静かだった。" },
        { speaker: "", text: "青い惑星が、ガラスの向こうでゆっくり回っている。" },
        { speaker: "", text: "けれど今夜だけは、その青の外側に無数の銀緑色の点が浮かんでいた。" },
        { speaker: "liina", text: "母星艦隊。予定より十三時間早い到着" },
        { speaker: "", text: "リィナのアンテナが、短く震えた。" },
        { speaker: "", text: "表情はいつもと同じ無表情なのに、発光ラインだけが不規則に明滅している。" },
        { speaker: "protagonist", text: "侵略開始命令、なのか" },
        { speaker: "liina", text: "肯定。地球個体管理計画、第一段階へ移行する" },
        { speaker: "", text: "彼女は淡々と告げた。" },
        { speaker: "", text: "でも、その手は端末に触れたまま動かない。" },
        { speaker: "liina", text: "私は、命令を実行できる。実行するよう作られている" },
        { speaker: "protagonist", text: "じゃあ、リィナはどうしたい？" },
        { speaker: "", text: "その問いに、ドーム内の機械音だけが返ってきた。" },
        { speaker: "liina", text: "……君は、いつも非効率な質問をする" },
        { speaker: "protagonist", text: "大事な質問ほど、だいたい非効率なんだよ" },
        { speaker: "", text: "リィナは地球を見た。" },
        { speaker: "", text: "コンビニのプリン。夜の公園。ゲームセンターの騒音。" },
        { speaker: "", text: "たぶん彼女の中では、そんな小さな記録が侵略命令より大きくなっていた。" },
        { speaker: "liina", text: "私は、地球を侵略したくない" },
        { speaker: "", text: "それは小さな声だった。" },
        { speaker: "", text: "けれど、母星から送られてくる警告音よりも、はっきり聞こえた。" }
      ],
      next: "rebellion_signal"
    },
    rebellion_signal: {
      label: "リィナの宣言",
      background: "research_room",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "研究室の中枢端末が起動する。" },
        { speaker: "", text: "空中に浮かぶ通信窓には、顔のない銀緑の紋章が映っていた。" },
        { speaker: "ヴェルディア司令", text: "先遣個体リィナ。感情汚染を確認。地球個体001を処分し、侵略管制を譲渡せよ" },
        { speaker: "", text: "リィナの肩が、ほんの少し跳ねた。" },
        { speaker: "protagonist", text: "リィナ" },
        { speaker: "", text: "名前を呼ぶだけでいい。" },
        { speaker: "", text: "彼女が自分で選べると、信じていると伝わればいい。" },
        { speaker: "liina", text: "地球個体001は、処分対象ではない" },
        { speaker: "ヴェルディア司令", text: "訂正せよ。対象は侵略効率を低下させる障害である" },
        { speaker: "liina", text: "訂正しない" },
        { speaker: "", text: "アンテナの先が鋭く光る。" },
        { speaker: "", text: "痛みに耐えるように、リィナは胸元の発光ラインを押さえた。" },
        { speaker: "liina", text: "私は、地球を侵略しない" },
        { speaker: "ヴェルディア司令", text: "命令違反。制御コードを再起動する" },
        { speaker: "", text: "床のラインが一斉に赤く染まった。" },
        { speaker: "", text: "リィナの身体が傾く。思わず支えると、彼女は逃げなかった。" },
        { speaker: "liina", text: "接触を許可。今だけではない。たぶん、今後も" },
        { speaker: "protagonist", text: "こんな時に許可制なんだな" },
        { speaker: "liina", text: "習慣。あと、照れ隠し" },
        { speaker: "", text: "ネムの合成音声が、天井から小さく割り込んだ。" },
        { speaker: "ネム", text: "リィナ様の照れ自己申告を確認。記録価値が高すぎます" },
        { speaker: "liina", text: "ネム、黙って中枢侵入準備" },
        { speaker: "ネム", text: "はい。反逆モードを、仮称『未知の約束』として起動します" }
      ],
      next: "countermeasure"
    },
    countermeasure: {
      label: "中枢突入作戦",
      background: "corridor",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "操縦室へ向かう通路は、警告灯で緑と赤に分かれていた。" },
        { speaker: "", text: "母星艦隊は、リィナのUFOを遠隔停止させようとしている。" },
        { speaker: "liina", text: "対抗手段は一つ。艦隊中枢へ直接接続する" },
        { speaker: "protagonist", text: "それ、簡単に言ってるけど危ないやつだよな" },
        { speaker: "liina", text: "危険。成功率は二十一パーセント" },
        { speaker: "protagonist", text: "低いな" },
        { speaker: "liina", text: "君が隣にいる場合、三十八パーセント" },
        { speaker: "protagonist", text: "上がる理由は？" },
        { speaker: "liina", text: "私の演算が乱れる。通常なら悪影響。今回は、制御コードの予測を外せる" },
        { speaker: "", text: "つまり、リィナの“バグ”が武器になる。" },
        { speaker: "", text: "母星が不要だと切り捨てた感情が、母星の命令を壊す鍵になる。" },
        { speaker: "liina", text: "君は地球人のままでいい。同族化も、洗脳も、しない" },
        { speaker: "protagonist", text: "リィナも、命令の道具じゃなくていい" },
        { speaker: "", text: "リィナは歩みを止めた。" },
        { speaker: "", text: "こちらを見上げる瞳が、ドームで見た地球と同じ緑を映している。" },
        { speaker: "liina", text: "それを聞くと、胸部が変になる" },
        { speaker: "protagonist", text: "船内気圧の問題？" },
        { speaker: "liina", text: "否定。君のせい" },
        { speaker: "", text: "淡々とした責任転嫁だった。" },
        { speaker: "", text: "けれど、その声は少しだけ柔らかかった。" }
      ],
      next: "central_charge"
    },
    central_charge: {
      label: "銀緑の突入",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "proud" }],
      lines: [
        { speaker: "", text: "UFOが加速する。" },
        { speaker: "", text: "地球の青が背後へ流れ、艦隊の銀緑色が視界いっぱいに広がった。" },
        { speaker: "ネム", text: "敵艦隊から精神干渉波。リィナ様の制御コードへ侵入中" },
        { speaker: "liina", text: "受信しない。私は今、地球文化調査で忙しい" },
        { speaker: "protagonist", text: "それでごまかせるのか？" },
        { speaker: "liina", text: "ごまかす。プリン、ゲーム、夜の公園、君の笑顔。全データを妨害ノイズとして送信" },
        { speaker: "", text: "艦隊の光が乱れる。" },
        { speaker: "", text: "侵略用の通信回線に、地球で集めた何でもない日常が流れ込んでいく。" },
        { speaker: "ヴェルディア司令", text: "不要記録を停止せよ。非効率。無価値" },
        { speaker: "liina", text: "無価値ではない" },
        { speaker: "", text: "リィナは操縦桿に手を重ねた。" },
        { speaker: "", text: "その手の上に、自分の手を重ねる。" },
        { speaker: "liina", text: "君の自由意志を確認。私の自由意志も、ここにある" },
        { speaker: "protagonist", text: "一緒に行こう" },
        { speaker: "liina", text: "肯定。これは侵略ではない。反逆でも足りない" },
        { speaker: "liina", text: "これは、約束" },
        { speaker: "", text: "銀緑のUFOが、艦隊中枢へ飛び込んだ。" },
        { speaker: "", text: "光が爆発する。" },
        { speaker: "", text: "けれど、怖くはなかった。" }
      ],
      next: "after_rebellion"
    },
    after_rebellion: {
      label: "侵略中止プロトコル",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "", text: "目を開けると、地球観測ドームに戻っていた。" },
        { speaker: "", text: "艦隊の光は遠ざかっている。" },
        { speaker: "ネム", text: "母星艦隊、中枢命令を更新。地球侵略計画は無期限凍結されました" },
        { speaker: "protagonist", text: "勝った、のか" },
        { speaker: "liina", text: "完全勝利ではない。母星は私を反逆個体として記録する" },
        { speaker: "protagonist", text: "後悔してる？" },
        { speaker: "liina", text: "解析中" },
        { speaker: "", text: "リィナは少しだけ目を伏せた。" },
        { speaker: "", text: "アンテナの先が、淡く、やさしく光っている。" },
        { speaker: "liina", text: "後悔は、たぶんない。怖いは、ある" },
        { speaker: "protagonist", text: "怖いなら、一人で抱えなくていい" },
        { speaker: "liina", text: "では、共有する" },
        { speaker: "", text: "リィナは、こちらの袖をつまんだ。" },
        { speaker: "", text: "手を繋ぐより遠慮がちで、観察よりずっと個人的な接触だった。" },
        { speaker: "liina", text: "地球には、約束を守る文化がある" },
        { speaker: "protagonist", text: "あるよ" },
        { speaker: "liina", text: "なら、私も学習する。君と、地球と、まだ知らない未来を守る" },
        { speaker: "", text: "彼女の口元が、ほんの少しだけ動いた。" },
        { speaker: "", text: "笑顔と呼ぶには小さい。" },
        { speaker: "", text: "でも、初めてリィナが自分で選んだ未来の形だった。" }
      ],
      next: "ending01"
    },
    ending01: {
      label: "エンディングA1：未知の約束",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "数日後。" },
        { speaker: "", text: "夜の公園のベンチで、リィナはコンビニのプリンを真剣に観察していた。" },
        { speaker: "liina", text: "地球侵略は凍結中。だが、プリン調査は継続する" },
        { speaker: "protagonist", text: "それは平和利用ってことでいいのか" },
        { speaker: "liina", text: "肯定。甘味による友好条約" },
        { speaker: "", text: "上空には、もう艦隊の光はない。" },
        { speaker: "", text: "ただ、雲の向こうに小さなUFOが隠れている。" },
        { speaker: "", text: "地球と宇宙のどちらかを捨てるのではなく、両方をつなぐための居場所。" },
        { speaker: "liina", text: "私は侵略者だった" },
        { speaker: "protagonist", text: "今は？" },
        { speaker: "liina", text: "未定義。けれど、君の隣にいる存在" },
        { speaker: "", text: "リィナはプリンのスプーンを差し出した。" },
        { speaker: "liina", text: "共有する。これは命令ではない" },
        { speaker: "protagonist", text: "じゃあ、遠慮なく" },
        { speaker: "", text: "甘い味が、夜風の中で少し冷えていた。" },
        { speaker: "", text: "未知の宇宙も、明日の地球も、まだ不安だらけだ。" },
        { speaker: "", text: "それでも隣には、自分の意思でここに残った銀緑の少女がいる。" },
        { speaker: "liina", text: "ユーザー。次の約束を要求する" },
        { speaker: "protagonist", text: "次？" },
        { speaker: "liina", text: "明日も会う。明後日も。可能なら、その先も" },
        { speaker: "", text: "無表情のまま、アンテナだけが期待で揺れている。" },
        { speaker: "", text: "だから、答えはもう決まっていた。" },
        { speaker: "protagonist", text: "約束する。未知の未来も、一緒に見に行こう" },
        { speaker: "", text: "エンディングA1：未知の約束" }
      ],
      choices: [
        { text: "タイトルへ戻る", next: "ending_to_title" },
        { text: "エンディング一覧へ戻る", next: "ending_to_chapters" }
      ],
      ending: true
    },
    ending_to_title: {
      label: "タイトルへ戻る",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "タイトルへ戻ります。" }
      ],
      action: "title"
    },
    ending_to_chapters: {
      label: "エンディング一覧へ戻る",
      background: "park_night",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "章選択へ戻ります。第6章の各ルートからエンディングを確認できます。" }
      ],
      action: "chapters"
    }
  }
});
