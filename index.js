module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
    ].map(require.resolve),
    rules: {
        indent: ['error', 4],
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
    },
    plugins: [
        'jest',
    ],
    env: {
        'jest/globals': true,
    },
};
