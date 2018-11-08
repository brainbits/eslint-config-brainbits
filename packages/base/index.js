const styleRules = require('eslint-config-airbnb-base/rules/style');
const bestPracticesRules = require('eslint-config-airbnb-base/rules/best-practices');
const errorsRules = require('eslint-config-airbnb-base/rules/errors');

module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
    ].map(require.resolve),
    plugins: [
        'babel',
    ],
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        quotes: 0,
        'new-cap': 0,
        'object-curly-spacing': 0,
        semi: 0,
        'no-invalid-this': 0,
        'valid-typeof': 0,
        'babel/quotes': styleRules.rules.quotes,
        'babel/new-cap': styleRules.rules['new-cap'],
        'babel/object-curly-spacing': styleRules.rules['object-curly-spacing'],
        'babel/semi': styleRules.rules.semi,
        'babel/no-invalid-this': bestPracticesRules.rules['no-invalid-this'],
        'babel/valid-typeof': errorsRules.rules['valid-typeof'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                'devDependencies': [
                    '**/*.test.js',
                ]
            }
        ]
    }
};
