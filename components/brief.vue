<template>
  <div class="lg:px-40 md:px-20 px-10 text-skin-primary overflow-hidden">
    <h1 class="text-3xl font-bold pt-10">The Brief</h1>
    <div class="brief">
      <div class="description">
        <!-- <p>SB Taxi is attempting to establish itself in Nigeria, and they sought my expertise in designing an efficient way to address issues such as office commute, rising car costs, and dealing with the ever-increasing difficulties of public transportation. SB Taxi was established to address this issue by providing an active carpooling service that is efficient, dependable, and profitable.</p> -->
        <!-- <p>Create an NFT responsive website with phone and web interfaces where they can pay using cryptocurrency (Etherium to be precise) website for both phone and web interfaces that they would be able to pay with Crypto (Etherium to be precise)</p>
        <p class="mt-2">They had a reference website and wanted it to look exactly like it with just a few color changes.</p> -->
        <!-- <p>Zuri Chat is a fully integrated platform for connecting teams and facilitating seamless collaboration. People need to be able to network, collaborate, educate, and learn remotely. Zuri Chat aims to be the next communication platform for practically every industry, competing with Slack and Discord.</p>
        <p class="mt-2">The client desired a simple, slick, and memorable identity that reflected their ideals and could be scaled adequately for marketing collateral and clients.</p> -->
        <slot name="text"></slot>
      </div>
      <div class="image">
        <slot name="image"></slot>
        <!-- <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063762/barney/case-ZuriChat-brief_hqdgn3.png" alt="" class="mt-7"> -->
        <!-- <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063771/barney/case-sbTaxi-App-brief_po6lrk.png" alt=""> -->
        <!-- <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063765/barney/case-KryptoNFT-brief_uykowk.png" alt=""> -->
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
