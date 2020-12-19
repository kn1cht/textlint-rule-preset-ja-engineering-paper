// LICENSE : MIT
'use strict';


const {moduleInterop} = require("@textlint/module-interop");
module.exports = {
    rules: {
        'ja-hiragana-fukushi': moduleInterop(require('textlint-rule-ja-hiragana-fukushi')),
        'ja-hiragana-keishikimeishi': moduleInterop(require('textlint-rule-ja-hiragana-keishikimeishi')),
        'ja-hiragana-hojodoushi': moduleInterop(require('textlint-rule-ja-hiragana-hojodoushi')),
        'no-synonyms': moduleInterop(require('@textlint-ja/textlint-rule-no-synonyms')),
        'prh': moduleInterop(require('textlint-rule-prh')),
        'unify-kuten-and-touten': require('./unify-kuten-and-touten.js'),
        'use-si-units': moduleInterop(require('textlint-rule-use-si-units')),
    },
    rulesConfig: {
        'ja-hiragana-fukushi': true,
        'ja-hiragana-keishikimeishi': true,
        'ja-hiragana-hojodoushi': true,
        'no-synonyms': true,
        'prh': {
            'rulePaths': [
                'node_modules/textlint-rule-preset-ja-engineering-paper/src/dict/prh-rules.yml'
            ]
        },
        'unify-kuten-and-touten': true,
        'use-si-units': true,
    }
};
