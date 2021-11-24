<template>
  <div class="topbar">
    <div class="">
      <div class="">
        <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637173284/barney/back-arrow-white_ozll4c.png" class="w-1/7" alt=""><span class="pl-3"> Back</span>
        </NuxtLink>
      </div>
      <div class="left-side">
        <div class="logo">
          <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1637173284/barney/barneys-logo-white_qd3syg.png" alt="" class="w-16">
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
