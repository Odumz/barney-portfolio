<template>
  <div class="topbar">
    <div class="left-side">
      <div class="logo">
        <!-- <img src="https://res.cloudinary.com/griffintech/image/upload/v1635981557/ui-portfolio/barney_dlli4f.svg" alt="Barney" /> -->
        <svgassets name="logo" />
      </div>
      <div class="name">
        <p>barnabas</p>
        <p class="-mt-2">inyangsam</p>
      </div>
    </div>
    <div class="right-side">
      <NuxtLink to="/about">
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
    @apply sm:-mb-4 uppercase;
  }

  .logo {
    @apply mr-6;
  }

  .name {
    @apply uppercase;
  }
</style>
