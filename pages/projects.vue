<template>
  <div class="fontface bg-skin-secondary-accent">
    <ProjectTopbar class="pt-14" />
    <ProjectSummary class="mt-7 mb-16" />
    <!-- <Tutorial/> -->
    <!-- <Experience class="bg-white pb-7" /> -->
    <brief class="bg-white py-10" />
    <!-- <taxi class="bg-white pt-10 pb-32" /> -->
    <krypto class="bg-white pt-10 lg:pb-32 md:pb-24 pb-10" />
    <krypto-footer />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Projects - Barney!',
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
