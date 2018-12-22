// unify-kuten-and-touten.js
//   from textlint-rule-preset-JTF-style/src/1.2.1.js
//   Copyright (c) 2015 azu
//   LICENSE : MIT
//   https://github.com/textlint-ja/textlint-rule-preset-JTF-style/blob/master/LICENSE
'use strict';
import regx from 'regx';
import { isUserWrittenNode } from './util/node-util';
import { japaneseRegExp } from './util/regexp';
import { matchCaptureGroupAll } from 'match-index';
import mergeMatches from './util/merge-matches';
const rx = regx('g');
/*
# unify-kuten-and-touten

- （「preset-jtf-style/1.2.1. 句点(。)と読点(、)」の改変ルール）
- 工学系の論文などを対象に、句読点を統一します。
- デフォルトは日本機械学会論文集が指定している「．」（全角ピリオド）と「，」（全角カンマ）です。
    - これらはoptionで変更できます。
- 仕様上、preset-jtf-style/1.2.1.句点(。)と読点(、)・同1.2.2・同4.1.3と矛盾する場合があります。
    - これらのルールを使用している場合は、オプションで無効化してください。

- TODO: 英語のアブストラクトのみ半角記号を使う場合など
 */

const defaultOpts = {
    kuten  : '．', // 指定したい句点
    touten : '，', // 指定したい読点
    possibleMarks : {   // 入力されうる句読点として認識させたい記号
        kuten  : ['。', '.', '．'],
        touten : ['、', ',', '，'],
    }
};

// [{句点 or 読点}]{日本語}
const leftTarget = mark => rx`(${mark === '.' ? '\\.' : mark})${japaneseRegExp}`;
// {日本語}[{句点 or 読点}]
const rightTarget = mark => rx`${japaneseRegExp}(${mark === '.' ? '\\.' : mark})`;

const reporter = (context, options = {}) => {
    let { Syntax, RuleError, report, fixer, getSource } = context;
    // apply user options
    const opts = Object.assign({}, defaultOpts, options);
    const allKuten = [
        ...defaultOpts.possibleMarks.kuten,
        ...(options.possibleMarks ? (options.possibleMarks.kuten || []) : [])
    ];
    const allTouten = [
        ...defaultOpts.possibleMarks.touten,
        ...(options.possibleMarks ? (options.possibleMarks.touten || []) : [])
    ];
    // generate disallowed marks' list
    const ngMarks = [
        ...allKuten.filter(x => x !== opts.kuten),
        ...allTouten.filter(x => x !== opts.touten)
    ];
    return {
        [Syntax.Str](node) {
            if (!isUserWrittenNode(node, context)) {
                return;
            }
            const text = getSource(node);
            let matches = [];
            for(const mark of ngMarks) {
                const leftMatches = matchCaptureGroupAll(text, leftTarget(mark));
                const rightMatches = matchCaptureGroupAll(text, rightTarget(mark));
                matches = [...matches, ...mergeMatches(leftMatches, rightMatches)];
            }
            matches.forEach(match => {
                let symbol = '';
                if(allKuten.indexOf(match.text) !== -1) symbol = opts.kuten;
                else if(allTouten.indexOf(match.text) !== -1) symbol = opts.touten;
                const indexOfSymbol = match.index;
                report(
                    node,
                    new RuleError(`句読点には「${opts.touten}」と「${opts.kuten}」を使用してください${opts.kuten}`, {
                        index: indexOfSymbol,
                        fix: fixer.replaceTextRange([indexOfSymbol, indexOfSymbol + 1], symbol)
                    })
                );
            });
        }
    };
};
module.exports = {
    linter: reporter,
    fixer: reporter
};
