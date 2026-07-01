# Novel-1

スマホブラウザ向けの長編ノベルゲームを、HTML / CSS / JavaScript だけで動かすための土台です。GitHub Pages にそのまま公開できます。

## 動かし方

1. このリポジトリを GitHub に push します。
2. GitHub の **Settings > Pages** を開きます。
3. **Deploy from a branch** を選び、公開したいブランチの `/ (root)` を指定します。
4. 表示された URL をスマホで開くとプレイできます。

ローカルで確認する場合は、リポジトリ直下で次のように簡易サーバーを起動してください。

```bash
python3 -m http.server 8000
```

その後、ブラウザで `http://localhost:8000` を開きます。

## ファイル構成

```text
index.html              # ゲーム画面のHTML
css/style.css           # スマホ縦画面向けの見た目
js/app.js               # ノベルゲームエンジン本体
scenarios/prologue.js   # サンプルのプロローグ
assets/backgrounds/     # 背景画像を追加する場所
assets/characters/      # キャラクター立ち絵を追加する場所
```

画像が無い場合も、背景と立ち絵は仮表示で動きます。

## 章を追加する方法

章ごとに `scenarios/` の中へ JavaScript ファイルを追加します。例えば第1章なら `scenarios/chapter1.js` を作ります。

```js
window.NOVEL_SCENARIOS = window.NOVEL_SCENARIOS || {};

window.NOVEL_SCENARIOS.chapter1 = {
  id: "chapter1",
  title: "第1章：タイトル",
  start: "start",
  scenes: {
    start: {
      label: "最初の場所",
      background: "school",
      characters: [{ id: "heroine", name: "ヒロイン", position: "center" }],
      lines: [
        { speaker: "ヒロイン", text: "ここから第1章が始まります。" }
      ],
      next: "nextScene"
    },
    nextScene: {
      label: "次のシーン",
      lines: [
        { speaker: "", text: "次のシーンです。" }
      ],
      ending: true
    }
  }
};
```

追加した章を読み込むには、`index.html` の下部に script タグを追加します。

```html
<script src="scenarios/prologue.js"></script>
<script src="scenarios/chapter1.js"></script>
<script src="js/app.js"></script>
```

最初に開始する章を変えたい場合は、`js/app.js` の `state.chapterId` を追加した章の id に変更してください。

## シーンの書き方

シーンは `scenes` の中に追加します。

```js
sceneId: {
  label: "画面上に出る場所名",
  background: "背景画像のファイル名から拡張子を除いた名前",
  characters: [
    { id: "キャラ画像名", name: "表示名", position: "center" }
  ],
  lines: [
    { speaker: "話者名", text: "表示する文章" },
    { speaker: "", text: "地の文は speaker を空にできます。" }
  ],
  next: "次に進むシーンID"
}
```

## 選択肢とフラグ管理

最後の文章まで進むと選択肢を表示できます。`set` に書いた内容がフラグとして保存されます。

```js
choices: [
  { text: "信じる", set: { trust: true }, next: "believeScene" },
  { text: "疑う", set: { doubt: true }, next: "doubtScene" }
]
```

数値フラグに数値を指定した場合、すでに数値が入っていれば加算されます。好感度や調査ポイントに使えます。

```js
{ text: "助ける", set: { affection: 1 }, next: "afterHelp" }
```

## エンディング分岐

`branches` を使うと、フラグに応じて次のシーンを変えられます。上から順番に判定され、最初に一致した分岐へ進みます。

```js
branches: [
  { if: { trust: true }, next: "goodEnding" },
  { if: { doubt: true }, next: "normalEnding" }
],
next: "badEnding"
```

エンディングのシーンには `ending: true` を付けます。

```js
goodEnding: {
  label: "Good Ending",
  lines: [{ speaker: "", text: "グッドエンドです。" }],
  ending: true
}
```

## 背景画像と立ち絵の追加方法

背景画像は `assets/backgrounds/` に入れます。シーンで `background: "station"` と書いた場合、次のどれかの画像を探します。

- `assets/backgrounds/station.webp`
- `assets/backgrounds/station.png`
- `assets/backgrounds/station.jpg`
- `assets/backgrounds/station.jpeg`

立ち絵は `assets/characters/` に入れます。`{ id: "haru", name: "ハル" }` と書いた場合、次のどれかを探します。

- `assets/characters/haru.webp`
- `assets/characters/haru.png`
- `assets/characters/haru.jpg`
- `assets/characters/haru.jpeg`

画像がまだ無い場合は、仮の背景とシルエット風の立ち絵が表示されます。

## セーブ / ロード

画面右上のメニューから次の操作ができます。

- **セーブ**: `localStorage` に手動セーブします。
- **ロード**: 手動セーブから再開します。
- **オートセーブから再開**: 進行時に自動保存された場所から再開します。
- **最初から**: フラグをリセットしてプロローグ冒頭へ戻ります。

保存データはブラウザごとに保存されます。別の端末や別のブラウザには引き継がれません。
