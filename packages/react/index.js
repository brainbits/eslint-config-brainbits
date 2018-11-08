module.exports = {
    extends: [
        'eslint-config-brainbits',
        'eslint-config-airbnb/rules/react',
        'eslint-config-airbnb/rules/react-a11y',
    ].map(require.resolve),
    rules: {
        'react/jsx-indent-props': [
            'error',
            4,
        ],
        'react/jsx-indent': [
            'error',
            4,
        ],
        'react/forbid-prop-types': [
            'error',
            {
                'forbid': ['any']
            }
        ],
        'react/prop-types': [
            'error',
            {
                ignore: ['styles']
            }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                'devDependencies': [
                    '**/*.test.js',
                    '**/*.test.jsx',
                    'src/setupTests.js',
                ]
            }
        ],
    },
};
