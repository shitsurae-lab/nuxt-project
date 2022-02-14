<template>
  <div class="container">
    <div>
      <h1 class="mb-2 font-bold">
        {{ `${title}` }}
      </h1>
      <P class="py-1 text-blue-600">{{ `${desc}` }}</P>
      <button class="bg-blue-500 text-white font-normal py-2 py-4 rounded">
        Push Me!
      </button>
    </div>
    <Navigation />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  name: 'IndexPage',
  components: { Navigation },
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
