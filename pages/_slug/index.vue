<template>
  <main class="main">
    <h1 class="title">
      {{ `${title}` }}
    </h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://shitsurae104.microcms.io/api/v1/news/${params.slug}`,
      {
        headers: {
          'X-MICROCMS-API-KEY': 'ec3af9e4779a494bbc2a9a054a35ad1dceae',
        },
      }
    )
    return data
  },
}
</script>
