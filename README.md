Install peer dependecies:

`(
  export PKG=eslint-config-brainbits;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)`

To add this put this code into your .eslintrc:

`{ "extends": "brainbits" }`

On linux / mac you can add it like this:

`echo "{ \"extends\": \"brainbits\" }" >> .eslintrc`
