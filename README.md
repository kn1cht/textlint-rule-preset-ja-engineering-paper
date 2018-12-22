# textlint-rule-preset-ja-engineering-paper
[![npm version](https://badge.fury.io/js/textlint-rule-preset-ja-engineering-paper.svg)](https://badge.fury.io/js/textlint-rule-preset-ja-engineering-paper) [![Build Status](https://travis-ci.com/kn1cht/textlint-rule-preset-ja-technical-writing.svg?branch=master)](https://travis-ci.com/kn1cht/textlint-rule-preset-ja-technical-writing) [![Maintainability](https://api.codeclimate.com/v1/badges/118fd80dbb55df8536e0/maintainability)](https://codeclimate.com/github/kn1cht/textlint-rule-preset-ja-engineering-paper/maintainability) [![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/)

日本語の工学系論文のための[textlint](https://textlint.github.io/)ルールプリセット

[textlint](https://textlint.github.io/) rule preset for Japanese academic papers of enginering

## Install
```bash
$ npm i textlint-rule-preset-ja-engineering-paper
```

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "preset-ja-engineering-paper": true
    }
}
```

Via CLI

```bash
$ textlint --preset preset-ja-engineering-paper README.md
```

## Rules
### unify-kuten-and-touten

- （「[preset-jtf-style/1.2.1. 句点(。)と読点(、)](https://github.com/textlint-ja/textlint-rule-preset-JTF-style/blob/master/src/1.2.1.js)」の改変ルール）
- 工学系の論文などを対象に、句読点を統一します。
- デフォルトは日本機械学会論文集が指定している「．」（全角ピリオド）と「，」（全角カンマ）です。
    - これらはoptionで変更できます。
- 仕様上、句読点をチェックするルールと矛盾する場合があります。
    - preset-jtf-style/1.2.1.句点(。)と読点(、)・同1.2.2・同4.1.3などです。
    - これらのルールを使用している場合は、オプションで無効化してください。

- TODO: 英語のアブストラクトのみ半角記号を使う場合など

## Develop

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test

## License

[MIT](LICENSE)
