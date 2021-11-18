<template>
  <div class="lg:px-70 md:px-20 px-10 text-skin-primary">
    <div class="user-exp">
      <div class="ux">
        <div class="ux-description">
          <h1 class="text-3xl font-bold my-2">Design</h1>
          <p class="user-exp-text">Collaborating in a tech-forward company allowed me built relationships and engage directly with tech innovators, particularly software developers. Feedback from my encounters with the developers was instrumental in informing and guiding the website's visual style.</p>
          <p>We collaborated with other product designers and worked in a variety of teams to build the app. Approximately 250 individuals worked on the project, including backend, frontend, UI/UX, DevOps, product managers, and so on.</p>
        </div>
        <div class="ux-image">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063763/barney/case-ZuriChat-design_ilpfpw.png" alt="">
          <p class="text-gray-400 py-3">Creative explorations and early drafts of Notice Board</p>
        </div>
      </div>
    </div>
    <div class="take-away">
      <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063767/barney/case-ZuriChat-logo_v1bamc.png" alt="" class="md:w-3/7 w-5/7">
      <p class="take-away-text md:pl-4">Final Logo Design</p>
    </div>
    <div class="pt-10">
      <div class="ux">
        <div class="ux-image">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063767/barney/case-ZuriChat-originalview_aczmyk.png" alt="">
          <p class="text-gray-400 py-3">Original View</p>
        </div>
        <div class="ux-image">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063769/barney/case-ZuriChat-darkmode_wstoyc.png" alt="">
          <p class="text-gray-400 py-3">Dark Mode</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info {
  @apply mb-14;
}

.info-arch {
  @apply grid items-center justify-center py-5;
}

.texts {
  @apply text-justify leading-relaxed py-2;
}

.challenge {
  @apply flex flex-col lg:flex-row gap-3 items-center;
}

.challenge-description {
  @apply text-justify py-2 lg:order-1 leading-relaxed w-full lg:w-1/2 pb-10;
}

.challenge-image {
  @apply lg:w-1/2 grid justify-items-center;
}

.ux {
  @apply flex flex-col lg:flex-row items-center my-12 gap-3;
}

.ux-description {
  @apply text-justify py-2 leading-relaxed w-full lg:w-1/2 pb-10;
}

.ux-image {
  @apply lg:w-1/2 grid justify-items-center;
}

.challenge-text {
  @apply leading-relaxed text-justify mb-3;
}

.take-away {
  @apply flex flex-col items-center;
}

.take-away-text {
  @apply text-justify leading-relaxed -mt-6 md:tracking-widest sm:tracking-wider text-gray-500;
}
</style>
