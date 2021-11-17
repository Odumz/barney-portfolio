<template>
  <div class="text-white lg:mx-40 md:mx-20 mx-10 grid gap-y-3 mt-14">
    <slot name="title"></slot>
    <div class="sm:flex sm:mb-10">
      <div class="w-2/9 grid mb-3">
        <span class="title">role</span>
        <span>UI/UX Designer</span>
      </div>
      <div class="w-2/7 grid mb-3">
        <span class="title">tools</span>
        <span>Figma</span>
      </div>
      <div class="grid">
        <span class="title">date</span>
        <slot>
          <span>September, 2021</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .title {
    @apply uppercase lg:text-xs text-sm text-gray-200;
  }
</style>
