<template>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ `${content.title}` }}
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://shitsurae104.microcms.io/api/v1/news',
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
