<template>
  <div class="grid grid-cols-1 overflow-hidden">
    <div class="img-thumb">
      <!-- <img :src="image.link" alt="image.title"> -->
      <svgassets name="taxi" />
    </div>
    <div class="content">
      <h2 class="font-medium pt-1">{{ title }}
       <NuxtLink to="/project-krypto-nft">
        Case Title
       </NuxtLink>
      </h2>
      <p class="text-gray-400 text-sm">{{ description }} Some other texts</p>
    </div>
  </div>
</template>

<style scoped>
  .content {
    @apply px-4 py-3;
  }
</style>
