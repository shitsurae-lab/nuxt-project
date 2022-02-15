<template>
  <div>
    <h1>ここはAboutページです</h1>
    <picture>
      <source
        :srcset="require('~/assets/images/cake-unsplash.webp')"
        type="image/webp"
      />
      <img :src="require('~/assets/images/cake-unsplash.jpg')" />
    </picture>
  </div>
</template>
