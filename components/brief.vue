<template>
  <div class="lg:px-40 md:px-20 px-10 text-skin-primary overflow-hidden">
    <h1 class="text-3xl font-bold pt-10">The Brief</h1>
    <div class="brief">
      <div class="description">
        <p>SB Taxi is attempting to establish itself in Nigeria, and they sought my expertise in designing an efficient way to address issues such as office commute, rising car costs, and dealing with the ever-increasing difficulties of public transportation. SB Taxi was established to address this issue by providing an active carpooling service that is efficient, dependable, and profitable.</p>
      </div>
      <div class="image">
        <!-- <img src="https://res.cloudinary.com/griffintech/image/upload/v1636802876/barney/case-sbTaxi-App-brief_atwgd3.png" alt=""> -->
        <img src="https://res.cloudinary.com/griffintech/image/upload/v1636801991/barney/case-KryptoNFT-brief_diu0pq.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* .brief {
    @apply grid md:grid-cols-2 md:gap-4;
  } */


  .brief {
    @apply flex flex-col lg:flex-row;
  }

  .description {
    @apply text-justify lg:pr-5 py-2 leading-relaxed w-full lg:w-1/2 pb-10;
  }

  /* .image {
    @apply md:-mt-16 mx-auto;
  } */


  .image {
    @apply lg:w-5/9 lg:-mt-20 grid justify-items-center;
  }
</style>
