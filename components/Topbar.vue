<template>
  <div class="topbar">
    <div class="left-side">
      <div class="logo">
        <NuxtLink to="/" class="flex items-center uppercase mb-4 text-sm">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637172936/barney/barneys-logo_oztll8.png" alt="" class="w-16">
        </NuxtLink>
      </div>
      <div class="name">
        <p>barnabas</p>
        <p class="-mt-2">inyangsam</p>
      </div>
    </div>
    <div class="right-side">
      <NuxtLink to="/about" class="hover:opacity-80">
        About me
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  .topbar {
    @apply md:flex text-skin-primary justify-between items-center lg:mx-40 md:mx-20 mx-10 bg-gray-100 overflow-hidden;
  }

  .left-side {
    @apply flex items-center uppercase;
  }

  .right-side {
    @apply uppercase;
  }

  .logo {
    @apply mr-6;
  }

  .name {
    @apply uppercase -mt-3;
  }
</style>
