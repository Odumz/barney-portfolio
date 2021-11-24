<template>
  <div class="fontface bg-gray-100">
    <CaseTopbar class="pt-14" />
    <CaseSummary class="mt-7 mb-16" />
    <div class="bg-white">
      <Experience class="pb-7" />
      <Bio class="py-10" />
      <Skills class="py-10 pb-28" />
      <hoverchat class="hidden md:flex sticky inset-y-1/4 inset-x-10/12 xl:inset-x-18/21" />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'About Me - Barney!',
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
