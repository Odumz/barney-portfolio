<template>
  <div class="grid grid-cols-1 overflow-hidden">
    <div class="img-thumb">
      <!-- <img :src="image.link" alt="image.title"> -->
      <!-- <img src="https://res.cloudinary.com/griffintech/image/upload/v1635904513/ui-portfolio/Logo_jwpmll.svg" alt=""> -->
      <svgassets name="taxi" />
    </div>
    <div class="content">
      <h2 class="font-medium pt-1">{{ title }} Case Title </h2>
      <p class="text-gray-400 text-sm">{{ description }} Some other texts</p>
    </div>
  </div>
</template>

<style>
  .content {
    @apply px-4 py-3;
  }
</style>
