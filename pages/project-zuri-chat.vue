<template>
  <div class="fontface bg-skin-tertiary-accent">
    <ProjectTopbar class="pt-14 text-white" />
    <ProjectSummary class="mt-7 mb-16">
      <template #title>
        <h1 class="text-5xl font-medium mb-6">Zuri Chat</h1>
      </template>
    </ProjectSummary>
    <brief class="bg-white py-10">
      <template #text>
        <p>Zuri Chat is a fully integrated platform for connecting teams and facilitating seamless collaboration. People need to be able to network, collaborate, educate, and learn remotely. Zuri Chat aims to be the next communication platform for practically every industry, competing with Slack and Discord.</p>
        <p class="mt-2">The client desired a simple, slick, and memorable identity that reflected their ideals and could be scaled adequately for marketing collateral and clients.</p>
      </template>
      <template #image>
        <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063762/barney/case-ZuriChat-brief_hqdgn3.png" alt="" class="my-auto">
      </template>
    </brief>
    <chat class="bg-white pt-10 pb-32" />
    <chat-footer />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Zuri Chat - Barney!',
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
