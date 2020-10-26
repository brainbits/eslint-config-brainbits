# ESLint Config brainbits Jest

[![npm version](https://img.shields.io/npm/v/eslint-config-brainbits-jest?color=rgb%2868%2C%20204%2C%2017%29&style=flat-square)](https://www.npmjs.com/package/eslint-config-brainbits-jest) [![supported eslint version](https://img.shields.io/npm/dependency-version/eslint-config-brainbits-jest/dev/eslint?style=flat-square)](https://www.npmjs.com/package/eslint)


This package contains extra rules for javascript projects which are tested
with jest. It will be typically used along any other rule set like [`eslint-config-brainbits-react`](../react/README.md).

## Usage

Install the package via `npm`.

```
$ npm install --save-dev eslint-config-brainbits-jest
```

After installation of the package you have to install all required peer dependencies.

```
$ npx install-peerdeps --dev eslint-config-brainbits-jest
```

Add it to your `.eslintrc`

```
{
    "extends": ["brainbits-react", "brainbits-jest"]
}
```
