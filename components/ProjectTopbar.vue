<template>
  <div class="topbar">
    <div class="">
      <div class="">
        <NuxtLink to="/" class="flex uppercase mb-4 text-sm">
          <svgassets name="back-arrow-white" class="mr-3" /> Back
        </NuxtLink>
      </div>
      <div class="left-side">
        <div class="logo">
          <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
            <svgassets name="logo-white" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .topbar {
    @apply flex justify-between items-center lg:mx-40 md:mx-20 mx-10;
  }

  .left-side {
    @apply flex items-center;
  }

  .right-side {
    @apply -mb-4;
  }

  .logo {
    @apply mr-6;
  }

  .name {
    @apply uppercase;
  }
</style>
