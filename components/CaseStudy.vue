<template>
  <div class="grid grid-cols-1">
    <div class="img-thumb">
      <!-- <img :src="image.link" alt="image.title"> -->
      <img src="https://res.cloudinary.com/griffintech/image/upload/v1635904513/ui-portfolio/Logo_jwpmll.svg" alt="">
    </div>
    <div class="content">
      <h2 class="font-medium">{{ title }} Case Title </h2>
      <p class="text-gray-400 py-2 text-sm">{{ description }} Some other texts</p>
    </div>
  </div>
</template>
