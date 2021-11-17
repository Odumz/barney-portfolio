<template>
  <div class="lg:px-40 md:px-20 px-10 text-skin-primary">
    <div class="designs">
      <div class="design">
        <div class="design-description">
          <h1 class="text-3xl font-bold text-left my-2">Design</h1>
          <p class="design-text-lead">Working in a tech-forward company allowed me to interact and engage directly with technology enthusiasts, particularly developers.</p>
          <p class="design-text">Feedback from my interaction with the developers was crucial in informing and guiding the website's visual direction.</p>
          <p class="design-text">I was able to develop a website design that felt both unique and familiar by opting for a dark, futuristic tone.</p>
        </div>
        <div class="design-image">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063770/barney/case-KryptoNFT-DarkTheme_1_f3relb.png" alt="" class="rounded">
        </div>
      </div>
    </div>
    <div class="user-exp">
      <div class="ux">
        <div class="ux-description">
          <p class="user-exp-text pb-10">All of the designs were created in Figma, which enabled me to work freely because there was already a reference design. Before starting the design, I made all of the components I would need. It was easy to put together.</p>
          <h1 class="text-3xl font-bold my-2">Key Take-away</h1>
          <p class="user-exp-text">The customer is almost always right, and having a direction makes work a lot easier. It was a fantastic project to work on, and I would do it again and again.</p>
        </div>
        <div class="design-image">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063765/barney/case-KryptoNFT-keytakeaway_eazs2y.png" alt="" class="rounded">
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

.design {
  @apply flex flex-col lg:flex-row gap-3 items-center;
}

.design-description {
  @apply text-justify py-2 lg:order-1 leading-relaxed w-full lg:w-1/2 pb-10;
}

.design-image {
  @apply lg:w-2/3 grid justify-items-center;
}

.ux {
  @apply flex flex-col lg:flex-row items-center my-12 gap-3;
}

.ux-description {
  @apply text-justify py-2 leading-relaxed w-full lg:w-1/2 pb-10;
}

.image {
  padding-right: -100px;
}

.ux-image {
  @apply lg:w-2/3 grid grid-cols-2 justify-items-center items-end;
}

.design-text, .design-text-lead {
  @apply leading-relaxed text-justify;
}

.design-text {
  @apply mb-3;
}

.take-away {
  @apply flex flex-col py-5 lg:w-2/3 items-center mx-auto lg:pl-10;
}

.take-away-text {
  @apply text-justify leading-relaxed;
}
</style>
