<template>
  <div class="topbar text-skin-primary">
    <div class="">
      <div class="">
        <NuxtLink to="/" class="flex uppercase mb-4 text-sm">
          <svgassets name="back-arrow" class="mr-3" /> Back
        </NuxtLink>
      </div>
      <div class="left-side">
        <div class="logo">
          <!-- <img src="https://res.cloudinary.com/griffintech/image/upload/v1635981557/ui-portfolio/barney_dlli4f.svg" alt="Barney" /> -->
          <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
            <svgassets name="logo" />
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
