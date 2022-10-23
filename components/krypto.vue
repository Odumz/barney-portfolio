<template>
  <div class="xl:px-70 lg:px-36 md:px-20 px-10 text-skin-primary">
    <div class="designs">
      <div class="design">
        <div class="design-description lg:order-1">
          <h1 class="text-3xl font-bold text-left my-2">Design</h1>
          <p class="design-text-lead">Working in a tech-forward company allowed me to interact and engage directly with technology enthusiasts, particularly developers.</p>
          <p class="design-text">Feedback from my interaction with the developers was crucial in informing and guiding the website's visual direction.</p>
          <p class="design-text">I was able to develop a website design that felt both unique and familiar by opting for a dark, futuristic tone.</p>
        </div>
        <div class="design-image ">
          <img src="https://res.cloudinary.com/odumz/image/upload/v1666509796/projects/barney/case-KryptoNFT-DarkTheme_ikcthq.png" alt="barney-case - kryptonft darktheme" class="rounded pr-10" loading="lazy">
        </div>
      </div>
    </div>
    <div class="user-exp">
      <div class="ux">
        <div class="design-description">
          <p class="user-exp-text pb-10">All of the designs were created in Figma, which enabled me to work freely because there was already a reference design. Before starting the design, I made all of the components I would need. It was easy to put together.</p>
          <h1 class="text-3xl font-bold my-2">Key Take-away</h1>
          <p class="user-exp-text">The customer is almost always right, and having a direction makes work a lot easier. It was a fantastic project to work on, and I would do it again and again.</p>
        </div>
        <div class="design-image">
          <img src="https://res.cloudinary.com/odumz/image/upload/v1666509792/projects/barney/case-KryptoNFT-keytakeaway_vhf8k1.png" alt="barney-case - kryptonft key take away" class="rounded pl-5" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.design {
  @apply flex flex-col lg:-ml-32 lg:flex-row gap-3 items-center;
}

.design-description {
  @apply text-justify py-2 leading-relaxed w-full lg:w-1/2;
}

.design-image {
  @apply grid relative justify-items-center w-11/12;
}

.ux {
  @apply flex flex-col lg:flex-row lg:-mr-3 items-center my-12 gap-3;
}

.design-text, .design-text-lead {
  @apply leading-relaxed text-justify;
}

.design-text {
  @apply mb-3;
}
</style>
