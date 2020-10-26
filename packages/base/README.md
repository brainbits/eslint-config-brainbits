# ESLint Config brainbits

[![npm version](https://img.shields.io/npm/v/eslint-config-brainbits?color=rgb%2868%2C%20204%2C%2017%29&style=flat-square)](https://www.npmjs.com/package/eslint-config-brainbits) [![supported eslint version](https://img.shields.io/npm/dependency-version/eslint-config-brainbits/dev/eslint?style=flat-square)](https://www.npmjs.com/package/eslint)

This package contains the base eslint rules we use at [brainbits](https://www.brainbits.net). You can use this package
for vanilla javascript projects, as well as a base for more specific rule sets.

## Usage

Install the package via `npm`.

```
$ npm install --save-dev eslint-config-brainbits
```

After installation of the package you have to install all required peer dependencies.

```
$ npx install-peerdeps --dev eslint-config-brainbits
```

Add it to your `.eslintrc`

```
{
    "extends": ["brainbits"]
}
```
