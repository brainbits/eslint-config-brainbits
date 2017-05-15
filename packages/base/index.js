module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        'eslint-config-airbnb-base/rules/strict',
    ].map(require.resolve),
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1,
        }]
    }
};
