<template>
  <div class="lg:px-70 md:px-20 px-10 text-skin-primary overflow-hidden">
    <h1 class="text-3xl font-bold pt-10">The Brief</h1>
    <div class="brief">
      <div class="description">
        <slot name="text"></slot>
      </div>
      <div class="image">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .brief {
    @apply flex flex-col lg:flex-row;
  }

  .description {
    @apply text-justify lg:pr-5 py-2 leading-relaxed w-full lg:w-1/2 pb-10;
  }

  .image {
    @apply lg:w-5/9 lg:-mt-20 grid justify-items-center;
  }
</style>
