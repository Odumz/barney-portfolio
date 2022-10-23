<template>
  <div class="fontface bg-skin-secondary-accent">
    <ProjectTopbar class="pt-14 text-white" />
    <ProjectSummary class="mt-7 mb-16">
      <template #title>
        <h1 class="text-5xl font-medium mb-6">SB Taxi App</h1>
      </template>
    </ProjectSummary>
    <div class="bg-white">
      <brief class="py-10">
        <template #text>
          <p>SB Taxi is attempting to establish itself in Nigeria, and they sought my expertise in designing an efficient way to address issues such as office commute, rising car costs, and dealing with the ever-increasing difficulties of public transportation. SB Taxi was established to address this issue by providing an active carpooling service that is efficient, dependable, and profitable.</p>
        </template>
        <template #image>
          <img src="https://res.cloudinary.com/odumz/image/upload/v1666509789/projects/barney/case-sbTaxi-App-brief_qygzkw.png" alt="case taxi app - brief" loading="lazy">
        </template>
      </brief>
      <taxi class="pt-10 pb-32" />
      <hoverchat class="hidden md:flex sticky inset-y-1/4 inset-x-10/12 xl:inset-x-18/21" />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'SB Taxi - Barney!',
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
