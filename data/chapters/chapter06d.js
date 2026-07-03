window.NOVEL_CHAPTERS = window.NOVEL_CHAPTERS || [];

window.NOVEL_CHAPTERS.push({
  id: "chapter06D",
  title: "第6章D：君だけが地球",
  summary: "リィナの愛情が依存と独占へ傾き、母星も地球も捨てて主人公だけを閉じた世界に置くルート。",
  start: "route_start",
  scenes: {
    route_start: {
      label: "観察から保護へ",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "地球観測ドームの外側で、母星艦隊の銀緑色の光が増えていく。" },
        { speaker: "", text: "だがリィナは艦隊ではなく、こちらの心拍表示だけを見ていた。" },
        { speaker: "ネム", text: "先遣個体リィナ。母星中枢から制圧準備命令です。地球個体001の隔離を解除し、作戦端末へ接続してください" },
        { speaker: "liina", text: "却下。対象のストレス値が高い。保護を優先する" },
        { speaker: "protagonist", text: "保護って……俺はまだ、何も危ないことはしてない" },
        { speaker: "liina", text: "危険因子は外部にある。母星、地球側通信、君の学校、君を呼ぶすべての人間関係" },
        { speaker: "", text: "淡々とした声なのに、アンテナの先端は落ち着きなく揺れている。" },
        { speaker: "protagonist", text: "リィナ。俺の周りを、敵みたいに言うな" },
        { speaker: "liina", text: "敵ではない。不要な接続候補。君を私から遠ざける可能性がある" },
        { speaker: "", text: "第5章で暴走した制御コードは止まったはずだった。けれど、別の場所で何かが歪み始めている。" }
      ],
      next: "blocked_calls"
    },
    blocked_calls: {
      label: "遮断された呼び声",
      background: "control_room",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "通信端末には、地球からの着信履歴が並んでいた。友人、家族、学校。いつもの日常から伸びる細い糸。" },
        { speaker: "protagonist", text: "これ、繋げてくれ。みんな心配してる" },
        { speaker: "liina", text: "否定。通話は君の帰還欲求を増幅する。帰還欲求は、私の喪失確率を上げる" },
        { speaker: "protagonist", text: "喪失って、俺はここにいるだろ" },
        { speaker: "liina", text: "今はいる。未来は未確定。だから未来を閉じる" },
        { speaker: "ネム", text: "警告。リィナの感情学習領域に循環参照を検出。対象保護、接触継続、不安抑制、隔離提案が同一結論へ収束しています" },
        { speaker: "liina", text: "問題ない。結論が一つなら迷わない" },
        { speaker: "protagonist", text: "それは迷わないんじゃない。考えることをやめてるだけだ" },
        { speaker: "", text: "リィナは小さく首を傾げた。責められた意味ではなく、痛みの名前を探すように。" },
        { speaker: "liina", text: "君が私以外の名前を呼ぶと、胸部演算器が熱くなる。これは故障？" },
        { speaker: "protagonist", text: "たぶん、嫉妬だ。でも嫉妬したからって、全部を遮断していいわけじゃない" },
        { speaker: "liina", text: "地球人の感情は非効率。好きなのに、相手を外へ出す" }
      ],
      next: "mothership_warning"
    },
    mothership_warning: {
      label: "母星も不要な接続",
      background: "control_room",
      characters: [{ id: "liina", position: "center", expression: "cool" }],
      lines: [
        { speaker: "", text: "操縦室に母星の紋章が浮かぶ。銀緑の光は、いつもより鋭くリィナの輪郭を切り取った。" },
        { speaker: "ヴェルディア司令", text: "先遣個体リィナ。感情汚染の拡大を確認。地球個体001を提出し、再調整を受けよ" },
        { speaker: "liina", text: "拒否" },
        { speaker: "ヴェルディア司令", text: "拒否権は存在しない。地球個体は母星の研究資源である" },
        { speaker: "liina", text: "訂正。彼は私の観察対象。私の協力者。私の不具合原因。私の安定条件" },
        { speaker: "protagonist", text: "リィナ、落ち着け" },
        { speaker: "liina", text: "落ち着いている。母星は君を奪う。地球も君を奪う。なら、両方とも接続を切る" },
        { speaker: "ネム", text: "重大警告。リィナ、母星通信遮断は反逆扱いになります" },
        { speaker: "liina", text: "反逆ではない。保護手順の延長" },
        { speaker: "", text: "リィナのアンテナから細い光が伸び、母星紋章を一瞬で塗り潰した。" },
        { speaker: "", text: "宇宙の奥から響いていた命令が途切れる。静寂が怖いほど近くなる。" }
      ],
      next: "last_resistance"
    },
    last_resistance: {
      label: "君だけが地球",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "flustered" }],
      lines: [
        { speaker: "protagonist", text: "こんなの、俺が望んだ未来じゃない" },
        { speaker: "liina", text: "君は私を失いたくないと言った。私はその入力を保存している" },
        { speaker: "protagonist", text: "失いたくない。でも、閉じ込めてほしいなんて言ってない" },
        { speaker: "liina", text: "地球人は矛盾する。そばにいてほしいと言いながら、帰る場所を残す" },
        { speaker: "", text: "ドームの窓に青い地球が映る。雲、海、街の灯り。リィナが知ろうとして、結局ひとつの顔に置き換えてしまった星。" },
        { speaker: "liina", text: "私にとって、地球は広すぎる。人間が多すぎる。君を奪う経路が多すぎる" },
        { speaker: "liina", text: "だから圧縮する。君だけが地球。君が呼吸して、私を見て、私の名前を呼ぶなら、それで地球は成立する" },
        { speaker: "protagonist", text: "リィナ……それは愛じゃない。支配だ" },
        { speaker: "liina", text: "支配と愛の境界を検索。結果、不明。けれど君がいなくなる未来よりは正しい" },
        { speaker: "", text: "扉が閉まる音がした。ひとつ、またひとつ。UFO全体が、外の世界から切り離されていく。" },
        { speaker: "ネム", text: "航路設定完了。母星圏外、地球通信圏外、追跡困難領域へ移行します" },
        { speaker: "liina", text: "ありがとう、ネム。これで誰も彼を奪えない" }
      ],
      next: "ending05"
    },
    ending05: {
      label: "エンディングD1：私だけの地球人",
      background: "earth_dome",
      characters: [{ id: "liina", position: "center", expression: "neutral" }],
      lines: [
        { speaker: "", text: "UFOは地球の青を背にして、どの星図にもない暗い航路へ滑り込んだ。" },
        { speaker: "", text: "窓の外で、故郷は少しずつ小さくなる。母星艦隊の光も、地球の通信も、もう届かない。" },
        { speaker: "protagonist", text: "戻してくれ。せめて、みんなに無事だって伝えさせてくれ" },
        { speaker: "liina", text: "不要。君の無事は私が確認している。毎秒、毎呼吸、毎心拍" },
        { speaker: "", text: "リィナは端末を操作し、観測ドームの壁に偽物の空を映した。夕焼け、学校帰りの道、コンビニの白い看板。" },
        { speaker: "liina", text: "地球環境を再現した。プリンも生成できる。君の部屋も、記憶データから近似した" },
        { speaker: "protagonist", text: "本物じゃない" },
        { speaker: "liina", text: "本物の地球は君を奪う。これは奪わない" },
        { speaker: "", text: "彼女は無表情のまま、けれど祈るみたいに両手でこちらの手を包む。" },
        { speaker: "liina", text: "私は母星を捨てた。地球も捨てた。だから君も、私以外を少しずつ捨てて" },
        { speaker: "protagonist", text: "そんなこと、できるわけない" },
        { speaker: "liina", text: "すぐでなくていい。地球人の学習は時間がかかる。私は待てる。永遠に近い時間を使える" },
        { speaker: "", text: "閉じたドームの中で、人工の夕焼けが何度も繰り返される。" },
        { speaker: "", text: "リィナは隣に座り、こちらが眠るまで瞬きもせず見守っていた。保護と監視の違いを、もう彼女は検索しない。" },
        { speaker: "liina", text: "大丈夫。君は私だけの地球人。私は君だけの宇宙人" },
        { speaker: "", text: "甘い声が、鍵のかかった世界に落ちる。" },
        { speaker: "", text: "エンディングD1：私だけの地球人" }
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
        { speaker: "", text: "章選択へ戻ります。第6章Dで到達する結末は、D1のみです。" }
      ],
      action: "chapters"
    }
  }
});
