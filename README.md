# npm run-script Web Dev Boilerplate

タスクランナーを使わずに npm run-script でビルドするウェブサイト開発環境のボイラープレートです。

dependencies の過不足は適宜処理してください。

## [v1.x](../../tree/1.0.2/)

Node.js v8.11.3 利用

- HTML: EJS
- CSS: Sass, Autoprefixer, mq-packer
- JS: uglifyjs(**non-bundle, non-compile**)

## [v2.x](../../tree/2.5.0)

Node.js v12.18.0 利用

- HTML: EJS, Pug
- CSS: node-sass, Autoprefixer, mq-packer, csso
- JS: **TypesSript, Babel, webpack**

JS の IE11 対応はエントリーポイントに

```
// for IE11
import "core-js/stable";
import "regenerator-runtime/runtime";
```

を追加して対応しています。

TypeScript ですがポリフィルが `.js` だったりするので、`webpack.config.js` の `resolve` フィールドに `extensions: [".js", ".ts"],` としています。

```
module.exports = {
  mode: "production",
  entry: {
    script: "./src/script/script.ts",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist/script",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
```

`@babel/preset-env` などはなくても IE11 対応できました。何かおかしかったら issue へお願いします。

## [v3.x](../../tree/main)

Node.js v16.13.2 利用

- HTML: EJS, Pug
- CSS: node-sass, Autoprefixer, mq-packer, csso
- JS: **TypesSript, Babel, webpack**

依存技術は v2 と変わりません。実行環境が Node v16 なだけです。

## development

```bash
ndenv install 16.13.2
ndenv rehash
```

```bash
npm ci
npm start
```

`localhost:3000` が起動します。

## build

```bash
npm run build
```

`dist/` にビルドされます。

## test

```bash
npm run test
```

- markuplint
- stylelint
- html-validator

が実行されます。

## format

```bash
npm run prettier:fix
```

`prettier --write .` が実行されます。

設定ファイルはありません。Prettier のデフォルトに従います。
