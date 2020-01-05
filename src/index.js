// LICENSE : MIT
'use strict';
module.exports = {
    rules: {
        'ja-hiragana-fukushi': require('textlint-rule-ja-hiragana-fukushi'),
        'ja-hiragana-keishikimeishi': require('textlint-rule-ja-hiragana-keishikimeishi'),
        'ja-hiragana-hojodoushi': require('textlint-rule-ja-hiragana-hojodoushi'),
        'no-synonyms': require('@textlint-ja/textlint-rule-no-synonyms'),
        'prh': require('textlint-rule-prh'),
        'unify-kuten-and-touten': require('./unify-kuten-and-touten.js'),
        'use-si-units': require('textlint-rule-use-si-units'),
    },
    rulesConfig: {
        'ja-hiragana-fukushi': true,
        'ja-hiragana-keishikimeishi': true,
        'ja-hiragana-hojodoushi': true,
        'no-synonyms': true,
        'prh': {
            'rulePaths': [
                'node_modules/prh/prh-rules/media/WEB+DB_PRESS.yml'
            ]
        },
        'unify-kuten-and-touten': true,
        'use-si-units': true,
    }
};
