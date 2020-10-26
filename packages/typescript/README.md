# ESLint Config brainbits Typescript

[![npm version](https://img.shields.io/npm/v/eslint-config-brainbits-typescript?color=rgb%2868%2C%20204%2C%2017%29&style=flat-square)](https://www.npmjs.com/package/eslint-config-brainbits-typescript) [![supported eslint version](https://img.shields.io/npm/dependency-version/eslint-config-brainbits-typescript/dev/eslint?style=flat-square)](https://www.npmjs.com/package/eslint)


This package contains our eslint rules we use at [brainbits](https://www.brainbits.net) for typescript projects. It is based on the
[`eslint-config-brainbits`](../base/README.md) rules and replaces some default rules with specialized ones wich are provided by the typescript eslint plugin.

## Usage

Install the package via `npm`.

```
$ npm install --save-dev eslint-config-brainbits-typescript
```

After installation of the package you have to install all required peer dependencies.

```
$ npx install-peerdeps --dev eslint-config-brainbits-typescript
```

Add it to your `.eslintrc`

```
{
    "extends": ["brainbits-typescript"],
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```

**Note:** The eslint typescript parser requires the path to your `tsconfig.json` file in the parser options.
