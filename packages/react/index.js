module.exports = {
    extends: [
        'eslint-config-brainbits',
        'eslint-config-airbnb/rules/react',
        'eslint-config-airbnb/rules/react-a11y',
    ].map(require.resolve),
    rules: {
        'react/jsx-indent-props': [
            'error',
            8,
        ],
        'react/jsx-indent': [
            'error',
            4,
        ],
    },
};
