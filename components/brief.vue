<template>
  <div class="lg:px-40 md:px-20 px-10 text-skin-primary">
    <h1 class="text-3xl font-bold">The Brief</h1>
    <div class="brief">
      <div class="description">
        <p>SB Taxi is attempting to establish itself in Nigeria, and they sought my expertise in designing an efficient way to address issues such as office commute, rising car costs, and dealing with the ever-increasing difficulties of public transportation. SB Taxi was established to address this issue by providing an active carpooling service that is efficient, dependable, and profitable.</p>
      </div>
      <div class="image">
        <svgassets name="zuri" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .bio-text {
    @apply my-2 text-justify;
  }

  .brief {
    @apply grid md:grid-cols-2 md:gap-4;
  }

  .description {
    @apply text-justify;
  }
</style>
