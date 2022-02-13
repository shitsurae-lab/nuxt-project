<template lang="pug">
.container
  div
  <NuxtLogo />
  h1 {{`${title}`}}
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
export default {
  name: 'IndexPage',
  components: { NuxtLogo },
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
