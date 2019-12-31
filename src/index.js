// LICENSE : MIT
'use strict';
module.exports = {
    rules: {
        'unify-kuten-and-touten': require('./unify-kuten-and-touten.js'),
        'use-si-units': require('use-si-units')
    },
    rulesConfig: {
        'unify-kuten-and-touten': true,
        'use-si-units': true
    }
};
