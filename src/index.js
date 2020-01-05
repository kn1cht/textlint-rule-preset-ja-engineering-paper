// LICENSE : MIT
'use strict';
module.exports = {
    rules: {
        'no-mix-dearu-desumasu': require('textlint-rule-no-mix-dearu-desumasu'),
        'unify-kuten-and-touten': require('./unify-kuten-and-touten.js'),
        'use-si-units': require('textlint-rule-use-si-units'),
    },
    rulesConfig: {
        'unify-kuten-and-touten': true,
        'use-si-units': true,
        'no-mix-dearu-desumasu': {
            "preferInHeader": "",
            "preferInBody": "である",
            "preferInList": "である",
            "strict": true
        },
    }
};
