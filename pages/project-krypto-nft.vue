<template>
  <div class="fontface bg-skin-tertiary">
    <ProjectTopbar class="pt-14 text-white" />
    <ProjectSummary class="mt-7 mb-16">
      <template #title>
        <h1 class="text-5xl font-medium mb-6">Krypto NFT Website</h1>
      </template>
      <template #default>
        <span>August, 2021</span>
      </template>
    </ProjectSummary>
    <brief class="bg-white py-10">
      <template #text>
        <p>Create an NFT responsive website with phone and web interfaces where they can pay using cryptocurrency (Etherium to be precise) website for both phone and web interfaces that they would be able to pay with Crypto (Etherium to be precise)</p>
        <p class="mt-2">They had a reference website and wanted it to look exactly like it with just a few color changes.</p>
      </template>
      <template #image>
        <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063765/barney/case-KryptoNFT-brief_uykowk.png" alt="" class="mt-7">
      </template>
    </brief>
    <krypto class="bg-white pt-10 lg:pb-32 md:pb-24 pb-10" />
    <krypto-footer />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Krypto NFT - Barney!',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Good design, in my opinion, should be usable, straightforward, and appealing, and should be the outcome of a thorough understanding of the target user.'
      }
    ],
  }
}
</script>

<style scoped>
  .fontface {
    font-family: Rubik, sans-serif;
  }

</style>
