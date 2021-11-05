<template>
  <div class="topbar text-white bg-skin-secondary-accent">
    <div class="">
      <div class="">
        <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
          <svgassets name="back-arrow-white" class="mr-3" /> Back
        </NuxtLink>
      </div>
      <div class="left-side">
        <div class="logo">
          <!-- <img src="https://res.cloudinary.com/griffintech/image/upload/v1635981557/ui-portfolio/barney_dlli4f.svg" alt="Barney" /> -->
          <svgassets name="logo-white" />
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
