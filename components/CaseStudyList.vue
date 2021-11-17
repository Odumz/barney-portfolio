<template>
  <div class="text-skin-primary lg:px-40 md:px-20 px-10 py-10 overflow-hidden">
    <h1 class="text-3xl font-bold">Case Studies</h1>
    <div class="case-study">
      <CaseStudy class="case" />
      <CaseStudy class="case" />
      <CaseStudy class="case" />
      <CaseStudy class="case" />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .case-study {
    @apply grid lg:grid-cols-2 gap-4 my-12 mx-auto justify-center;
  }

  .case {
    @apply m-3;
  }
</style>
