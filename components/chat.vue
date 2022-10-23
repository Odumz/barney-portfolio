<template>
  <div class="xl:px-70 lg:px-36 md:px-20 px-10 text-skin-primary">
    <div class="user-exp">
      <div class="design">
        <div class="design-description">
          <h1 class="text-3xl font-bold my-2">Design</h1>
          <p>Collaborating in a tech-forward company allowed me built relationships and engage directly with tech innovators, particularly software developers. Feedback from my encounters with the developers was instrumental in informing and guiding the website's visual style.</p>
          <p>We collaborated with other product designers and worked in a variety of teams to build the app. Approximately 250 individuals worked on the project, including backend, frontend, UI/UX, DevOps, product managers, and so on.</p>
        </div>
        <div class="design-image">
          <img src="https://res.cloudinary.com/odumz/image/upload/v1666509813/projects/barney/case-ZuriChat-design_cfl19o.png" alt="ZuriChat design" class="" loading="lazy">
          <p class="text-gray-400 py-3 text-sm">Creative explorations and early drafts of Notice Board</p>
        </div>
      </div>
    </div>
    <div class="take-away">
      <img src="https://res.cloudinary.com/odumz/image/upload/v1666509813/projects/barney/case-ZuriChat-logo_bomgnz.png" alt="ZuriChat logo" class="md:w-3/7 w-5/7" loading="lazy">
      <p class="take-away-text md:pl-4">Final Logo Design</p>
    </div>
    <div class="pt-10">
      <div class="design">
        <div class="design-image">
          <img src="https://res.cloudinary.com/odumz/image/upload/v1666509832/projects/barney/case-ZuriChat-originalview_kjobtt.png" alt="ZuriChat original view" class="transform scale-105" loading="lazy">
          <p class="text-gray-400 py-3 text-sm">Original View</p>
        </div>
        <div class="design-image">
          <img src="https://res.cloudinary.com/odumz/image/upload/v1666509810/projects/barney/case-ZuriChat-darkmode_uliz72.png" alt="ZuriChat darkmode" loading="lazy">
          <p class="text-gray-400 py-3 text-sm">Dark Mode</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.design {
  @apply flex flex-col lg:flex-row items-center mt-10 mb-12 gap-3;
}

.design-description {
  @apply text-justify py-2 leading-relaxed w-full lg:w-1/2;
}

.design-image {
  @apply lg:w-1/2 grid justify-items-center;
}

.take-away {
  @apply flex flex-col items-center;
}

.take-away-text {
  @apply text-justify leading-relaxed -mt-6 md:tracking-widest sm:tracking-wider text-gray-500;
}
</style>
