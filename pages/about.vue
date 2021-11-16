<template>
  <div class="fontface bg-gray-100">
    <CaseTopbar class="pt-14" />
    <CaseSummary class="mt-7 mb-16" />
    <!-- <Tutorial/> -->
    <Experience class="bg-white pb-7" />
    <Bio class="bg-white py-10" />
    <Skills class="bg-white py-10 pb-28" />
  </div>
</template>

<script>
export default {
  head: {
    title: 'About',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My name is Barnabas Olayinka Inyangsam, and I\'m a product designer who focuses on creating beautiful experiences for people that improve and enhance how we live.'
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
