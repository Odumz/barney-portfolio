<template>
  <div class="fontface bg-gray-100">
    <Topbar class="pt-14" />
    <Intro class="my-7" />
    <div class="bg-white">
      <CaseStudyList />
      <Outreach />
      <hoverchat class="hidden md:flex sticky inset-y-1/4 inset-x-10/12 xl:inset-x-18/21" />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home - Barney!',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'I am passionately driven, result oriented and an exceptional guy with background in fashion, corporate communication, photography and product design.'
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
