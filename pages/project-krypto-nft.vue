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
    <div class="bg-white">
      <brief class="py-10">
        <template #text>
          <p class="pr-12">Create an NFT responsive website with phone and web interfaces where they can pay using cryptocurrency (Etherium to be precise) website for both phone and web interfaces that they would be able to pay with Crypto (Etherium to be precise)</p>
          <p class="mt-2 pr-12">They had a reference website and wanted it to look exactly like it with just a few color changes.</p>
        </template>
        <template #image>
          <img src="https://res.cloudinary.com/odumz/image/upload/v1666509780/projects/barney/case-KryptoNFT-brief_ioafvk.png" alt="case Kryptonft - brief" loading="lazy" class="mt-10">
        </template>
      </brief>
      <krypto class="pt-10" />
      <hoverchat class="hidden md:flex sticky inset-y-1/4 inset-x-10/12 xl:inset-x-18/21" />
      <krypto-footer />
    </div>
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
