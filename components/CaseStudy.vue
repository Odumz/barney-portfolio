<template>
  <div class="grid overflow-hidden">
    <div class="img-thumb">
      <!-- <img :src="image.link" alt="image.title"> -->
      <!-- <svgassets name="taxi" /> -->
      <slot name="image"></slot>
    </div>
    <div class="content">
      <h2 class="font-medium pt-1">
        <slot name="title"></slot>
      </h2>
      <p class="text-gray-400 text-sm"><slot name="description"></slot></p>
    </div>
  </div>
</template>

<style scoped>
  .content {
    @apply py-3;
  }
</style>
