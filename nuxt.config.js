const title = process.env.npm_package_name
const description = 'Webサイトのディスクリプション'
const url = 'WebサイトのURL'
const ogImage = `${url}/assets/image/ogp.jpg`

import axios from 'axios'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'description',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/style.scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    //画像圧縮 + webP変換①(https://zenn.dev/flat_ito/articles/38944280919eb3)
    '@aceforth/nuxt-optimized-images',
  ],
  //画像圧縮 + webP変換②
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true, //開発モードでも最適化する際にはtrue,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },

  //SSG(スタティックサイトジェネレート)のときのパスやファイルを指定(yarn run generate)
  generate: {
    async routes() {
      const pages = await axios
        .get('https://shitsurae104.microcms.io/api/v1/news?limit=100', {
          headers: {
            'X-MICROCMS-API-KEY': 'ec3af9e4779a494bbc2a9a054a35ad1dceae',
          },
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content,
          }))
        )
      return pages
    },
  },
  target: 'static',
}
