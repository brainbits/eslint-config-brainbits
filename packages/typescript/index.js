const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices');
const { rules: baseErrorsRules } = require('eslint-config-airbnb-base/rules/errors');
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6');
const { rules: baseImportsRules, settings: baseImportSettings } = require('eslint-config-airbnb-base/rules/imports');
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style');
const { rules: baseVariablesRules } = require('eslint-config-airbnb-base/rules/variables');
const { rules: baseBrainbitsRules } = require('eslint-config-brainbits');

module.exports = {
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    extends: [
        require.resolve('eslint-config-brainbits'),
        'plugin:@typescript-eslint/recommended', // Plugins are peerDependencies, thus this should be resolvable without problems
    ],
    settings: {
        // Apply special parsing for TypeScript files
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.d.ts'],
        },
        // Append 'ts' and 'tsx' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: [...baseImportSettings['import/resolver'].node.extensions, '.ts'],
            },
        },
        // Append 'ts' and 'tsx' extensions to Airbnb 'import/extensions' setting
        'import/extensions': [...baseImportSettings['import/extensions'], '.ts'],
    },
    rules: {
        // Replace Airbnb 'brace-style' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
        'brace-style': 'off',
        '@typescript-eslint/brace-style': baseStyleRules['brace-style'],

        // Disable Airbnb 'camelcase' rule in favor of @typescript-eslint/naming-convention
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            { selector: 'default', format: ['strictCamelCase'] },
            { selector: 'variable', format: ['strictCamelCase', 'StrictPascalCase'] },
            { selector: 'variable', modifiers: ['const'], format: ['strictCamelCase', 'UPPER_CASE', 'StrictPascalCase'] },
            { selector: 'function', format: ['strictCamelCase', 'StrictPascalCase'] },
            { selector: 'parameter', format: ['strictCamelCase'], leadingUnderscore: 'allow' },
            { selector: 'memberLike', format: ['strictCamelCase', 'StrictPascalCase'] },
            { selector: 'memberLike', modifiers: ['private'], format: ['strictCamelCase', 'StrictPascalCase'], leadingUnderscore: 'allow' },
            { selector: 'memberLike', filter: { regex: '^__typename', match: true }, format: null },
            { selector: 'typeLike', format: ['StrictPascalCase'] },
        ],

        // Replace Airbnb 'comma-spacing' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': baseStyleRules['comma-spacing'],

        // Replace Airbnb 'func-call-spacing' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': baseStyleRules['func-call-spacing'],

        // Replace Airbnb 'indent' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        indent: 'off',
        '@typescript-eslint/indent': baseBrainbitsRules.indent,

        // Replace Airbnb 'no-array-constructor' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
        'no-array-constructor': 'off',
        '@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

        // Replace Airbnb 'no-dupe-class-members' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': baseES6Rules['no-dupe-class-members'],

        // Replace Airbnb 'no-empty-function' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

        // Replace Airbnb 'no-extra-parens' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': baseErrorsRules['no-extra-parens'],

        // Replace Airbnb 'no-extra-semi' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': baseErrorsRules['no-extra-semi'],

        // Replace Airbnb 'no-implied-eval' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

        // Replace Airbnb 'no-magic-numbers' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

        // Replace Airbnb 'no-shadow' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': baseBestPracticesRules['no-magic-numbers'],

        // Replace Airbnb 'no-throw-literal' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': baseBestPracticesRules['no-throw-literal'],

        // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

        // Replace Airbnb 'no-unused-vars' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': baseVariablesRules['no-unused-vars'],

        // Replace Airbnb 'no-use-before-define' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': baseVariablesRules['no-use-before-define'],

        // Replace Airbnb 'no-useless-constructor' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

        // Replace Brainbits 'quotes' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
        'babel/quotes': 'off',
        '@typescript-eslint/quotes': baseBrainbitsRules['babel/quotes'],

        // Replace Brainbits 'semi' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
        'babel/semi': 'off',
        '@typescript-eslint/semi': baseBrainbitsRules['babel/semi'],

        // Replace Airbnb 'space-before-function-paren' rule with '@typescript-eslint' version
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': baseStyleRules['space-before-function-paren'],

        // Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': [
            baseImportsRules['import/extensions'][0],
            baseImportsRules['import/extensions'][1],
            {
                ...baseImportsRules['import/extensions'][2],
                ts: 'never',
                tsx: 'never',
            },
        ],

        // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        'import/no-extraneous-dependencies': [
            baseImportsRules['import/no-extraneous-dependencies'][0],
            {
                ...baseImportsRules['import/no-extraneous-dependencies'][1],
                devDependencies: baseImportsRules['import/no-extraneous-dependencies'][1].devDependencies.map((glob) => glob.replace('js,jsx', 'js,jsx,ts,tsx')),
            },
        ],

        'spaced-comment': [baseStyleRules['spaced-comment'][0], baseStyleRules['spaced-comment'][1], {
            ...baseStyleRules['spaced-comment'][2],
            line: {
                ...baseStyleRules['spaced-comment'][2].line,
                markers: [...baseStyleRules['spaced-comment'][2].line.markers, '/'], // space here to support sprockets directives
            },
        }],

        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowNullish: true }],
    },
};
