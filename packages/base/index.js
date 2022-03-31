const { rules: styleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: bestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: errorsRules } = require('eslint-config-airbnb-base/rules/errors');

module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
    ].map(require.resolve),
    plugins: [
        'babel',
        'promise',
    ],
    rules: {
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'object-curly-newline': [styleRules['object-curly-newline'][0], {
            ...styleRules['object-curly-newline'][1],
            ObjectExpression: { ...styleRules['object-curly-newline'][1].ObjectExpression, minProperties: 6 },
            ObjectPattern: { ...styleRules['object-curly-newline'][1].ObjectPattern, minProperties: 6 },
            ImportDeclaration: { ...styleRules['object-curly-newline'][1].ImportDeclaration, minProperties: 6 },
            ExportDeclaration: { ...styleRules['object-curly-newline'][1].ExportDeclaration, minProperties: 6 },
        }],
        indent: ['error', 4, {
            SwitchCase: 1,
        }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        quotes: 'off',
        'new-cap': 'off',
        'object-curly-spacing': 'off',
        semi: 'off',
        'no-invalid-this': 'off',
        'valid-typeof': 'off',
        'babel/quotes': styleRules.quotes,
        'babel/new-cap': styleRules['new-cap'],
        'babel/object-curly-spacing': styleRules['object-curly-spacing'],
        'babel/semi': styleRules.semi,
        'babel/no-invalid-this': bestPracticesRules['no-invalid-this'],
        'babel/valid-typeof': errorsRules['valid-typeof'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.js',
                ],
            },
        ],
        'max-len': [
            styleRules['max-len'][0],
            120,
            ...styleRules['max-len'].slice(2),
        ],

        // Promise plugin
        'promise/always-return': 'error',
        'promise/no-return-wrap': 'error',
        'promise/param-names': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'warn',
        'promise/no-callback-in-promise': 'warn',
        'promise/avoid-new': 'off',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'warn',
        'promise/valid-params': 'warn',
        'promise/prefer-await-to-then': 'off',
        'promise/prefer-await-to-callbacks': 'off',
    },
};
