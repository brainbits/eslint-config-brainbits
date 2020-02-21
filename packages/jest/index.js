module.exports = {
    rules: {
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
