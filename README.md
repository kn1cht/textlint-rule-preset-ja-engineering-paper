# textlint-rule-preset-ja-engineering-paper
[![](https://github.com/kn1cht/textlint-rule-preset-ja-engineering-paper/workflows/CI/badge.svg)](https://github.com/kn1cht/textlint-rule-preset-ja-engineering-paper/actions?query=workflow%3ACI) [![npm version](https://badge.fury.io/js/textlint-rule-preset-ja-engineering-paper.svg)](https://badge.fury.io/js/textlint-rule-preset-ja-engineering-paper) [![Maintainability](https://api.codeclimate.com/v1/badges/118fd80dbb55df8536e0/maintainability)](https://codeclimate.com/github/kn1cht/textlint-rule-preset-ja-engineering-paper/maintainability) [![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) [![Greenkeeper badge](https://badges.greenkeeper.io/kn1cht/textlint-rule-preset-ja-engineering-paper.svg)](https://greenkeeper.io/)

日本語の工学系論文のための[textlint](https://textlint.github.io/)ルールプリセット

[textlint](https://textlint.github.io/) rule preset for Japanese academic papers of enginering

## Install
```bash
$ npm i textlint-rule-preset-ja-engineering-paper
```

## Usage

### Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "preset-ja-engineering-paper": true
    }
}
```

### Via CLI

```bash
$ textlint --preset preset-ja-engineering-paper README.md
```

### 他のpresetとの併用
より広範な文章向けの`preset-japanese`・`preset-ja-technical-writing`・`preset-jtf-style`・`preset-ja-spacing`との併用をお勧めします。
ただし、**句読点をチェックするルール**と競合する場合があります。`.textlintrc`などを使い、適宜無効化してください。

`.textlintrc`の例
```json
{
  "plugins": [],
  "rules": {
    "preset-ja-engineering-paper": true,
    "preset-ja-spacing": true,
    "preset-ja-technical-writing": {
      "ja-no-mixed-period": {
        "periodMark": "．"
      },
      "max-kanji-continuous-len": {
        max: 8,
        allow: [
          "日本機械学会論文集"
        ]
      },
    },
    "preset-japanese": true,
    "preset-jtf-style": {
      "1.2.1.句点(。)と読点(、)": false,
      "1.2.2.ピリオド(.)とカンマ(,)": false,
      "4.1.3.ピリオド(.)、カンマ(,)": false
    },
  }
}
```

## Rules

### [textlint-rule-ja-hiragana-fukushi](https://github.com/lostandfound/textlint-rule-ja-hiragana-fukushi)
漢字よりもひらがなで表記したほうが読みやすい副詞

### [textlint-rule-ja-hiragana-keishikimeishi](https://github.com/lostandfound/textlint-rule-ja-hiragana-keishikimeishi)
漢字よりもひらがなで表記したほうが読みやすい形式名詞

### [textlint-rule-ja-hiragana-hojodoushi](https://github.com/lostandfound/textlint-rule-ja-hiragana-hojodoushi)
漢字よりもひらがなで表記したほうが読みやすい補助動詞

### [@textlint-ja/textlint-rule-no-synonyms](https://github.com/textlint-ja/textlint-rule-no-synonyms)
文章中の同義語の表記ゆれをチェックする

### [textlint-rule-prh](https://github.com/textlint-rule/textlint-rule-prh)
辞書ベースのチェック

辞書には論文にそぐわない表現をチェックするための設定を収録しています。

### unify-kuten-and-touten
- （「[preset-jtf-style/1.2.1. 句点(。)と読点(、)](https://github.com/textlint-ja/textlint-rule-preset-JTF-style/blob/master/src/1.2.1.js)」の改変ルール）
- 工学系の論文などを対象に、句読点を統一します。
- デフォルトは日本機械学会論文集が指定している「．」（全角ピリオド）と「，」（全角カンマ）です。
    - これらはoptionで変更できます。
- TODO: 英語のアブストラクトのみ、半角記号を使う場合などの対処

### [textlint-rule-use-si-units](https://github.com/kn1cht/textlint-rule-use-si-units)
SI単位系の単位以外の使用を禁止する

## 参考資料（全て2020年1月5日閲覧）
- 後藤祐一．[卒業論文・修士論文自己チェックリスト](http://www.aise.ics.saitama-u.ac.jp/~gotoh/Download/CheckListForTheses-ja.pdf)．2010．
- next49．[リンク：論文に死んでも書いてはいけない言葉３０ - 発声練習](https://next49.hatenadiary.jp/entry/20120103/p2)．2012．
- 奥村曉．[修士論文や夏の学校の集録や学振申請書を書く皆さんへ (書き方、注意点、心得) - 宇宙線実験の覚え書き](http://oxon.hatenablog.com/entry/20130615/1371228320)．2013．
- 玉木徹．[卒論・修論チェックリスト - Qiita](https://qiita.com/tttamaki/items/f553e4cb9f4f08cc8872)．2017．
- 伊藤貴之．[はじめての論文執筆](http://itolab.is.ocha.ac.jp/~itot/message/ItolabWriting2018.pdf)．2019．


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
