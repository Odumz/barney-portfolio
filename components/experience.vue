<template>
  <div class="text-skin-primary lg:px-40 md:px-20 px-10 pt-20">
    <h1 class="text-2xl font-bold">Experience</h1>
    <div class="md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
      <div class="resume">
        <a href="" class="links">Visit LinkedIn</a>
        <a href="" class="links">View Resume</a>
      </div>
      <div class="history">
        <p class="title">UI/UX Designer</p>
        <p class="present">Zuri Chat <span class="present-tag">Present</span></p>
        <p class="title">Product Designer</p>
        <p class="past">Kid Galaxy PVT Ltd</p>
        <p class="title">Product Designer</p>
        <p class="past">Kratos</p>
        <p class="title">UI/UX Designer</p>
        <p class="past">Zuri I4G</p>
        <p class="title">Creative Director</p>
        <p class="past">Rostrum Couture</p>
      </div>
    </div>
  </div>
</template>

<style>
  .links {
    @apply flex my-3;
  }

  .present {
    @apply text-skin-secondary col-span-2;
  }

  .present-tag {
    @apply text-gray-300 text-xs;
  }

  .resume {
    @apply lg:col-span-2;
  }

  .title {
    @apply col-span-2 lg:pl-10 xl:pl-16 2xl:pl-24;
  }

  .past {
    @apply text-gray-300 col-span-2;
  }

  .history {
    @apply grid grid-cols-3 lg:grid-cols-4 gap-y-1 my-3 md:col-span-2;
  }
</style>
