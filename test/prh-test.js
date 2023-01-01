'use strict';
import TextLintTester from "textlint-tester";
const tester = new TextLintTester();

const testConfig = {
  plugins: [
  ],
  rules: [
    {
      ruleId: 'prh',
      rule: require('textlint-rule-prh'),
      options: {
        'rulePaths': [
          './src/dict/prh-rules.yml'
        ]
      },
    },
  ]
}

// ruleName, rule, { valid, invalid }
tester.run('prh rule file', testConfig, {
  valid: [
    'なかでも',
    '右辺を展開すると恒等的に1だからである．',
    'ここでの記号は慣例に従っている．',
  ],
  invalid: [
    {
      text: '出来た',
      errors: [{
        message: '出来た => できた'
      }]
    },
    {
      text: 'とても多い',
      errors: [
        {
          message: 'とても => \n数値を示すなど客観的な表現に置き換えてください．'
        },
      ]
    },
    {
      text: 'でも，',
      errors: [
        {
          message: 'でも => しかし'
        },
      ]
    },
    {
      text: 'だから，AはBである．',
      errors: [
        {
          message: 'だから => したがって'
        },
      ]
    },
  ]
});
