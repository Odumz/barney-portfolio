<template>
  <div class="fontface bg-gray-100">
    <CaseTopbar class="pt-14" />
    <CaseSummary class="mt-7 mb-16" />
    <div class="bg-white">
      <Experience class="pb-7" />
      <Bio class="py-10" />
      <Skills class="py-10 pb-28" />
      <hoverchat class="hidden md:flex sticky inset-y-1/4 inset-x-10/12 xl:inset-x-18/21" />
      <to-top-btn class="flex fixed m-10 inset-x-11/12 bottom-6 to-top-btn" />
    </div>
  </div>
</template>

<script>
import Vue  from 'vue'
export default Vue.extend({
  head: {
    title: 'About Me - Barney!',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My name is Barnabas Olayinka Inyangsam, and I\'m a product designer who focuses on creating beautiful experiences for people that improve and enhance how we live.'
      }
    ],
  },
  watch(oldScrollY, newScrollY) {

  },
  mounted () {
    this.scrolllistener()
  },
  methods: {
    scrolllistener () {
      // alert('hi')
      const toTopBtn = document.querySelector('.to-top-btn');
      // console.log('to top btn is', toTopBtn)
      // console.log('window is', window.scrollY)
      if (window.scrollY > 120) {
        toTopBtn.classList.remove('hidden');
        alert('test');
      } else {
        toTopBtn.classList.add('hidden');
      }
    }
  }
})
</script>

<style scoped>
  .fontface {
    font-family: Rubik, sans-serif;
  }

</style>
