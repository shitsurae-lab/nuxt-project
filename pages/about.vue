<template>
  <div>
    <h1>{{ `${headline}` }}</h1>
    <img src="/images/cake-unsplash.jpeg" />
    <!-- <img :src="require(`~/assets/images/${filename}.jpg`)" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      headline: 'ここはAboutページです',
      filename: 'sky-unsplash',
    }
  },
}
</script>
