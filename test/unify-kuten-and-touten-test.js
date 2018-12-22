'use strict';
const TextLintTester = require('textlint-tester');
const tester = new TextLintTester();
// rule
const rule = require('../src/unify-kuten-and-touten');
// ruleName, rule, { valid, invalid }
tester.run('unify-kuten-and-touten', rule, {
    valid: [
        '句読点には「，」と「．」を使用しています．',
        '円周率は約3.14159265... だ',
        'a,b,c,d'
    ],
    invalid: [
        {
            text: '句読点を間違えました。',
            output: '句読点を間違えました．',
            errors: [
                {
                    message: '句読点には「，」と「．」を使用してください．',
                    line: 1,
                    column: 11
                }
            ]
        },
        {
            text: '私は、句読点を間違えました。',
            output: '私は，句読点を間違えました．',
            errors: [
                {
                    message: '句読点には「，」と「．」を使用してください．',
                    line: 1,
                    column: 3
                },
                {
                    message: '句読点には「，」と「．」を使用してください．',
                    line: 1,
                    column: 14
                }
            ]
        },
    ]
});

tester.run('unify-kuten-and-touten with options',
{
    rules : [{
        ruleId : 'unify-kuten-and-touten',
        rule,
        options : {
            kuten  : '。', // change default kuten
            possibleMarks : {
                kuten  : ['・'] // add mark to detect
            }
        }
    }]
},
{
    valid: [
        '句読点には「。」と「，」を使用しています。',
        '円周率は約3.14159265... だ',
        'a,b,c,d'
    ],
    invalid: [
        {
            text: '私は，句読点を間違えました．',
            output: '私は，句読点を間違えました。',
            errors: [
                {
                    message: '句読点には「，」と「。」を使用してください。',
                    line: 1,
                    column: 14
                }
            ]
        },
        {
            text: '句読点を間違えました・',
            output: '句読点を間違えました。',
            errors: [
                {
                    message: '句読点には「，」と「。」を使用してください。',
                    line: 1,
                    column: 11
                }
            ]
        },
    ]
});
