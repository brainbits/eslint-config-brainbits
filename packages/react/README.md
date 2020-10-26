# ESLint Config brainbits React

[![npm version](https://img.shields.io/npm/v/eslint-config-brainbits-react?color=rgb%2868%2C%20204%2C%2017%29&style=flat-square)](https://www.npmjs.com/package/eslint-config-brainbits-react) [![supported eslint version](https://img.shields.io/npm/dependency-version/eslint-config-brainbits-react/dev/eslint?style=flat-square)](https://www.npmjs.com/package/eslint)


This package contains our eslint rules we use at [brainbits](https://www.brainbits.net) for react projects. It is based on the
[`eslint-config-brainbits`](../base/README.md) rules and adds rules for
react components and jsx files.

## Usage

Install the package via `npm`.

```
$ npm install --save-dev eslint-config-brainbits-react
```

After installation of the package you have to install all required peer dependencies.

```
$ npx install-peerdeps --dev eslint-config-brainbits-react
```

Add it to your `.eslintrc`

```
{
    "extends": ["brainbits-react"]
}
```
