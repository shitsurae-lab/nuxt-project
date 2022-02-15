<template>
  <div>
    <Header />
    <NuxtLogo />
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import NuxtLogo from '../components/NuxtLogo.vue'
import Header from '../components/Header.vue'

export default {
  components: { Navigation, NuxtLogo, Header },
  data() {
    return {}
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
