# Novel-1

スマホ・タブレットだけで編集し、GitHub Pages で公開できる長編ノベルゲーム用の基礎システムです。HTML / CSS / JavaScript のみで動きます。

## できること

- スマホ縦画面で読みやすいタイトル画面、章選択画面、本文画面
- `data/chapters/` に章ごとのシナリオを分割
- `data/characters.js` でキャラクターを一元管理
- `data/backgrounds.js` で背景を一元管理
- `assets/characters/`、`assets/backgrounds/`、`assets/bgm/` を使う構成
- 画像が無い状態でも仮背景・仮立ち絵でプレイ可能
- キャラクター名表示、選択肢、フラグ分岐
- セーブ / ロード / オートセーブ
- バックログ
- 最後まで遊べる第1章サンプル

## GitHub Pagesで公開する方法

1. GitHub のリポジトリ画面を開きます。
2. **Settings > Pages** を開きます。
3. **Build and deployment** で **Deploy from a branch** を選びます。
4. Branch は公開したいブランチ、Folder は `/ (root)` を選びます。
5. 表示されたURLをスマホブラウザで開くと遊べます。

## ファイル構成

```text
index.html                 # 画面の骨組み
style.css                  # スマホ縦画面向けデザイン
script.js                  # ノベルゲームエンジン本体
data/characters.js         # キャラクター管理
data/backgrounds.js        # 背景管理
data/chapters/chapter1.js  # 第1章サンプル
assets/characters/         # 立ち絵画像を入れる場所
assets/backgrounds/        # 背景画像を入れる場所
assets/bgm/                # BGMを入れる場所
docs/                      # 長編制作メモ用テンプレート
```

## スマホだけで編集する流れ

1. GitHubアプリ、またはスマホブラウザのGitHubで編集したいファイルを開きます。
2. 鉛筆アイコンから編集します。
3. 変更をコミットします。
4. GitHub Pages のURLを開き直して確認します。

反映に数十秒かかる場合があります。表示が変わらない場合はブラウザを再読み込みしてください。

## 第1章を編集する

第1章の本文は `data/chapters/chapter1.js` にあります。

```js
lines: [
  { speaker: "haru", text: "……来たんだね。こんな朝早くに呼び出してごめん。" },
  { speaker: "protagonist", text: "ポストに入っていた古い封筒。" }
]
```

- `speaker` は `data/characters.js` のキャラクターIDを書くと表示名に変換されます。
- 地の文にしたいときは `speaker: ""` にします。
- `text` に表示したい文章を書きます。

## シーンを追加する

`scenes` の中に新しいシーンIDを追加し、前のシーンの `next` にそのIDを書きます。

```js
newScene: {
  label: "新しい場所",
  background: "town",
  characters: [{ id: "haru", position: "center" }],
  lines: [
    { speaker: "haru", text: "ここが新しいシーンです。" }
  ],
  next: "nextScene"
}
```

## 選択肢を書く

シーンの最後で選択肢を出すには `choices` を使います。

```js
choices: [
  { text: "信じる", set: { trust: true }, next: "believeScene" },
  { text: "疑う", set: { doubt: true }, next: "doubtScene" }
]
```

`set` に書いた値はフラグとして保存されます。数値フラグは、すでに数値がある場合は加算されるので好感度にも使えます。

## 分岐を書く

フラグによって次のシーンを変えたい場合は `branches` を使います。上から順番に判定され、最初に一致した分岐へ進みます。

```js
branches: [
  { if: { trust: true }, next: "goodEnding" },
  { if: { doubt: true }, next: "normalEnding" }
],
next: "badEnding"
```

## 章を追加する

1. `data/chapters/chapter2.js` を作ります。
2. `data/chapters/chapter1.js` をコピーして、`id`、`title`、`summary`、`scenes` を書き換えます。
3. `index.html` の下部に読み込みを追加します。

```html
<script src="data/chapters/chapter1.js"></script>
<script src="data/chapters/chapter2.js"></script>
<script src="script.js"></script>
```

## キャラクターを追加する

`data/characters.js` にID、表示名、メモを追加します。

```js
window.NOVEL_CHARACTERS = {
  haru: { id: "haru", name: "ハル", description: "幼なじみ。" },
  mio: { id: "mio", name: "ミオ", description: "第2章で登場する少女。" }
};
```

立ち絵を使う場合は `assets/characters/mio.png` のように配置します。対応拡張子は `webp`、`png`、`jpg`、`jpeg` です。

## 背景を追加する

`data/backgrounds.js` に背景IDと画像ファイル名を追加します。

```js
window.NOVEL_BACKGROUNDS = {
  town: { id: "town", name: "眠る町", file: "town" }
};
```

背景画像は `assets/backgrounds/town.png` のように配置します。画像が無い場合は仮背景で動きます。

## 制作メモを書く

長編制作では、設定を別ファイルに分けておくと便利です。

- `docs/STORY_BIBLE.md`: 世界観、テーマ、謎、結末
- `docs/CHARACTER_BIBLE.md`: キャラクター設定
- `docs/CHAPTER_PLAN.md`: 章ごとの展開表
- `docs/WRITING_RULES.md`: 文体、表記、演出ルール

## セーブデータについて

セーブデータはブラウザの `localStorage` に保存されます。同じGitHub Pages URLでも、別端末・別ブラウザには引き継がれません。
