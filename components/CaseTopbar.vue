<template>
  <div class="topbar text-skin-primary">
    <div class="">
      <div class="">
        <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637173284/barney/back-arrow_ly213j.png" class="w-1/7" alt=""><span class="pl-3"> Back</span>
        </NuxtLink>
      </div>
      <div class="left-side">
        <div class="logo">
          <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
            <img src="https://res.cloudinary.com/griffintech/image/upload/v1637172936/barney/barneys-logo_oztll8.png" alt="" class="w-16">
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .topbar {
    @apply flex justify-between items-center lg:mx-70 md:mx-20 mx-10;
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
