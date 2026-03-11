# 🚀 astro-static-template

差分納品やFTPクライアントへの手動アップロードなど、クラシカルな開発体制を想定した静的実装用の開発環境です。

## 🌴 環境情報

[Astro](https://astro.build/)

## 👷 環境準備

### 1. パッケージインストール

```shell
pnpm i
```

### 2. 開発サーバー起動

```shell
pnpm run dev
```

### 3. VS Code拡張機能の有効化

`.vscode/extensions.json`に記述した拡張機能をリコメンドとして表示するようにしています。
無効または未インストールの場合は、各自有効にしておいてください。

## 💻 実装

### 1. ファイル構成

```shell
├── integration/　#拡張機能
├── public/　アセット（画像・動画など）
├── src/　#作業ディレクトリ
│   ├── components/　#共通コンポーネント
│   ├── data/　# 共通データ。Content Collectionsなど
│   ├── icons/ 　#SVG（Astro Icon）
│   ├── layouts/ #共通レイアウト
│   ├── libs/ #SSG処理関連
│   └── pages/　#各ページのHTML
│   ├── styles/ #css（sass）
│   ├── scripts/ #js（クライアントサイド）
└── astro.config.ts　#開発環境設定ファイル
```

### 2. SVG

[Astro Icon](https://www.astroicon.dev/)を使用することでインライン上でSVGファイルを簡単に出力できます。
なお、Iconコンポーネントで参照するSVGファイルは`src/icons`に格納してください。

```js
---
import { Icon } from "astro-icon";
---

<Icon name='icon_sample' />

// => <svg data-icon="icon_sample"><symbol id="ai:local:icon_sample" viewBox="...">...</symbol><use href="#ai:local:icon_sample"></use></svg>
```

### 3. CSS

`astro.config`の設定により、`.astro`、`.scss`のどちらにスタイルを記述してもビルド時に`css/main.css`として出力するようにしています。
ただし、`.astro`にスタイルを書く場合は`style`タグに`is:global`をつけるようにしてください。

```jsx
<style lang="scss" is:global>
    //...
</style>
```

### 4. JavaScript（クライアントサイド）

フレームワークの縛りはないため、各自使いやすいものを選定してください。
（TypeScriptでなくても良いです）

### 5. 動的ページ生成

ブログやニュースの実装など、動的にページを生成する必要がある場合に備え、`src/content.config.ts`に[Content Collections](https://docs.astro.build/en/guides/content-collections/)の環境を準備しています。
（※日本語ドキュメントは情報が古い可能性があるため、英語ドキュメントの閲覧を推奨）

### 🏠 ビルド

以下のコマンドで`dist/`に出力します。

```shell
npm run build
```

HTMLを整形して出力したい場合は以下のコマンドを実行します。

```shell
npm run build:beautify
```
