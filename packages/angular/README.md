# ESLint Config brainbits

[![npm version](https://img.shields.io/npm/v/eslint-config-brainbits-angular?color=rgb%2868%2C%20204%2C%2017%29&style=flat-square)](https://www.npmjs.com/package/eslint-config-brainbits-angular) [![supported eslint version](https://img.shields.io/npm/dependency-version/eslint-config-brainbits/dev/eslint?style=flat-square)](https://www.npmjs.com/package/eslint)

This package contains our eslint rules we use at [brainbits](https://www.brainbits.net) for angular projects. 

## Usage

Install the package via `npm`.

```
$ npm install --save-dev eslint-config-brainbits-angular
```

After installation of the package you have to install all required peer dependencies.

```
$ npx install-peerdeps --dev eslint-config-brainbits-angular
```

Add it to your `.eslintrc`

```
{
    "extends": ["brainbits-angular"]
}
```
