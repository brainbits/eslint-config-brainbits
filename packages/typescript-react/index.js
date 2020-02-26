const { settings: baseSettings, rules: baseRules } = require('eslint-config-brainbits-typescript');

module.exports = {
    extends: [
        'eslint-config-brainbits-react',
        'eslint-config-brainbits-typescript',
    ],
    settings: {
        // Apply special parsing for TypeScript files
        'import/parsers': {
            '@typescript-eslint/parser': ['.tsx', ...baseSettings['import/parsers']['@typescript-eslint/parser']],
        },
        // Append 'ts' and 'tsx' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: ['.tsx', '.jsx', ...baseSettings['import/resolver'].node.extensions],
            },
        },
        // Append 'ts' and 'tsx' extensions to Airbnb 'import/extensions' setting
        'import/extensions': [...baseSettings['import/extensions'], '.tsx'],
    },
    rules: {
        'import/no-extraneous-dependencies': [
            baseRules['import/no-extraneous-dependencies'][0],
            {
                ...baseRules['import/no-extraneous-dependencies'][1],
                devDependencies: [
                    ...baseRules['import/no-extraneous-dependencies'][1].devDependencies.map((glob) => glob.replace('js,jsx', 'js,jsx,ts,tsx')),
                    'src/setupTests.ts',
                ],
            },
        ],
        'react/jsx-filename-extension': ['error', {
            extensions: ['.jsx', '.tsx'],
        }],
    }
};
