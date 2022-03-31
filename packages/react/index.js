const { settings: baseImportSettings } = require('eslint-config-airbnb-base/rules/imports');

module.exports = {
    extends: [
        'eslint-config-brainbits',
        'eslint-config-airbnb/rules/react',
        'eslint-config-airbnb/rules/react-hooks',
        'eslint-config-airbnb/rules/react-a11y',
    ].map(require.resolve),
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.jsx', ...baseImportSettings['import/resolver'].node.extensions],
            },
        },
    },
    rules: {
        'react/jsx-indent-props': [
            'error',
            4,
        ],
        'react/jsx-indent': [
            'error',
            4,
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.test.js',
                    '**/*.test.jsx',
                    'src/setupTests.js',
                ],
            },
        ],
    },
};
