<template>
  <div class="topbar text-skin-primary">
    <div class="">
      <div class="">
        <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
          <img src="https://res.cloudinary.com/odumz/image/upload/v1666509641/projects/barney/back-arrow_ahxxyu.png" loading="lazy" class="w-1/7" alt="go back"><span class="pl-3"> Back</span>
        </NuxtLink>
      </div>
      <div class="left-side">
        <div class="logo">
          <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
            <img src="https://res.cloudinary.com/odumz/image/upload/v1666509642/projects/barney/barneys-logo_qvinkj.png" alt="Barney logo" loading="lazy" class="w-16">
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .topbar {
    @apply flex justify-between items-center xl:mx-70 lg:mx-36 md:mx-20 mx-10;
  }

  .left-side {
    @apply flex items-center;
  }

  .logo {
    @apply mr-6;
  }
</style>
