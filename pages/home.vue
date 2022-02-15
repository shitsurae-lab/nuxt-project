<template>
  <div class="container">
    <div>
      <h1 class="mb-2 font-bold">
        {{ `${title}` }}
      </h1>
      <P class="py-1 text-blue-600">{{ `${desc}` }}</P>
      <button class="bg-blue-500 text-white font-normal px-2 py-1 rounded">
        Push Me!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  meta: [
    { hid: 'og:title', property: 'og:title', content: 'Title' },
    {
      hid: 'og:description',
      property: 'og:description',
      content: '@shitsuraeのブログ',
    },
    { hid: 'og:image', property: 'og:image', content: '' },
    // Twitter Card
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    { hid: 'twitter:site', name: 'twitter:site', content: '@shitsurae' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Title' },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: '@shitsuraeのブログ',
    },
    // サムネイル指定
    // { name: 'thumbnail', content: 'https://litely.net/og_image.png' }
  ],
  data() {
    return {
      title: 'Hello, world!',
      desc: "Index.vueに記載のあった、name:'IndexPage'をこちらに転載",
    }
  },
}
</script>
<style lang="scss">
div {
  h1 {
    color: #2b2b2b;
  }
}
</style>
