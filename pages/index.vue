<template>
  <div>
    <h1>
      {{ `${title}` }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'Hello, world!',
    }
  },
}
</script>
