<template>
  <div>
    <NuxtLogo />
    <Navigation />
    <Nuxt />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import NuxtLogo from '../components/NuxtLogo.vue'

export default {
  components: { Navigation, NuxtLogo },
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
