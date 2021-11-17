<template>
  <div class="text-white lg:mx-40 md:mx-20 mx-10 grid gap-y-3 mt-14">
    <!-- <h1 class="text-5xl font-medium mb-6">SB Taxi App</h1> -->
    <!-- <h1 class="text-5xl font-medium mb-6">Krypto NFT Website</h1> -->
    <!-- <h1 class="text-5xl font-medium mb-6">Zuri Chat</h1> -->
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
        <!-- <span>August, 2021</span> -->
      </div>
    </div>
    <!-- <p>
      A product designer focused on building beautiful experiences for people that enhances and improves how we live. I am passionately driven, result oriented and an exceptional guy with background in fashion, corporate communication, photography and product design.
    </p>
    <p class="text-skin-secondary font-medium justify-self-end pb-8">
      <NuxtLink to="/about">
        Know more about me
      </NuxtLink>
    </p> -->
  </div>
</template>

<style scoped>
  .title {
    @apply uppercase lg:text-xs text-sm text-gray-200;
  }
</style>
