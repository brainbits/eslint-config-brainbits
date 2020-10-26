# ESLint Config brainbits Typescript React

[![npm version](https://img.shields.io/npm/v/eslint-config-brainbits-typescript-react?color=rgb%2868%2C%20204%2C%2017%29&style=flat-square)](https://www.npmjs.com/package/eslint-config-brainbits-typescript-react) [![supported eslint version](https://img.shields.io/npm/dependency-version/eslint-config-brainbits-typescript-react/dev/eslint?style=flat-square)](https://www.npmjs.com/package/eslint)


This package contains our eslint rules we use at [brainbits](https://www.brainbits.net) for typescript based react projects. Its a combination of [`eslint-config-brainbits-typescript`](../typescript/README.md) and [`eslint-config-brainbits-react`](../react/README.md) with some rule fixes to accept file extensions `.ts` and `.tsx`.

## Usage

Install the package via `npm`.

```
$ npm install --save-dev eslint-config-brainbits-typescript-react
```

After installation of the package you have to install all required peer dependencies.

```
$ npx install-peerdeps --dev eslint-config-brainbits-typescript-react
```

Add it to your `.eslintrc`

```
{
    "extends": ["brainbits-typescript-react"],
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```

**Note:** The eslint typescript parser requires the path to your `tsconfig.json` file in the parser options.
