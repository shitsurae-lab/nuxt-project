## nuxt/tailweind で tailwind を始める

1. nuxt のバージョンを package.json で確認後、以下をインストール
   `yarn add --dev @nuxtjs/tailwindcss postcss@latest`

2. nuxt.config.js の buildModules に追記

```
export default {
  buildModules: ['@nuxtjs/tailwindcss']
}
```

3. オプションの設定

```tailwind.config.js
module.exports = {
  mode: "jit",
};
```

4. multi-word エラーが出たら
   `Component names should always be multi-word, except for root App components,`

`.eslintrc.js`に以下を記述する

```JS
rules: {
   'vue/multi-word-component-names': 'off'
}
```
