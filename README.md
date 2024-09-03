# looker-extension-test

Lookerの拡張機能をゼロから作るとどうなるかやってみる

```bash
npx create-react-app sample --template typescript
```

## トラブルシューティング

```text
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.
```

上記のwarningが出た場合は以下のインストールコマンドを実行する

```bash
npm install -D @babel/plugin-proposal-private-property-in-object
```

## Lookerのコンポーネントを使う

```bash
npm install @looker/components
npm install @looker/components-providers
npm install @styled-icons/styled-icon
```

## audit fix

```bash
npm audit fix --force
```

```bash
@babel/plugin-proposal-unicode-property-regex@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-unicode-property-regex instead.
```

上記のエラーが出た場合は以下のコマンドを実行します。

```bash
yarn add @babel/plugin-proposal-unicode-property-regex --dev
```

## yarn

```bash
yarn install
```
