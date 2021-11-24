<template>
  <div class="lg:px-70 md:px-20 px-10 text-skin-primary">
    <div class="info">
      <h1 class="text-3xl font-bold">Informational Architecture</h1>
      <div class="info-arch">
        <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063773/barney/case-sbTaxi-App-info-architecture_ku5vkk.png" alt="">
      </div>
    </div>
    <div class="challenges">
      <div class="challenge">
        <div class="challenge-description">
          <h1 class="text-3xl font-bold text-left my-2">Challenges</h1>
          <p class="challenge-text">Managing the driver's profile, which also curates the details about the vehicle, was one of the most constructive difficulties I had when designing SB Taxi.</p>
          <p class="challenge-text">Furthermore, providing a reservation system required a systematic technique to allow users to accept whom they want to pick them up (i.e. The user might require a van and not a standard car for their trip and by way of reservation get what they want)</p>
        </div>
        <div class="challenge-image">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063768/barney/case-sbTaxi-App-challenges_kraudp.png" alt="">
        </div>
      </div>
    </div>
    <div class="user-exp">
      <div class="ux">
        <div class="ux-description">
          <h1 class="text-3xl font-bold my-2">User Experience</h1>
          <p class="user-exp-text">I was expected to come up with an effective solution to make things easier for the User and to improve the User experience. As a result, I used a GPS-based design to allow the user know about and book the car conveniently, as well as manage their booking.</p>
        </div>
        <div class="ux-image">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063784/barney/case-sbTaxi-App-iPhoneone_jeerry.png" alt="">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063775/barney/case-sbTaxi-App-iPhonetwo_mkfhkv.png" alt="" class="w-2/3 mb-3 md:-ml-32 -ml-20">
        </div>
      </div>
      <div class="ux">
        <div class="ux-description lg:order-1">
          <p class="user-exp-text">The app's main goal was to provide a more dynamic, seamless digital riding experience. That meant I had to reevaluate how taxis were typically contacted. The selection of car features, where users could actively decide the quality of assistance they wanted, was one of the areas where I had to fully redesign.</p>
          <p class="user-exp-text">I was able to optimize the UX for adding a card and a wallet feature by making simple changes and adding a few features, such as sharing a ride with other users, allowing users to see the call feature, and personalised text feature and the feedback was remarkable.</p>
        </div>
        <div class="ux-image">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063779/barney/case-sbTaxi-App-iPhonethree_nfrumf.png" alt="">
          <img src="https://res.cloudinary.com/griffintech/image/upload/v1637063773/barney/case-sbTaxi-App-iPhonefour_umzi3q.png" alt="" class="w-5/6 mb-3 md:-ml-28 -ml-16">
        </div>
      </div>
    </div>
    <div class="take-away">
      <h1 class="text-3xl font-bold my-2">Key Take-away</h1>
      <p class="take-away-text">Working on this project provided me with firsthand knowledge of how taxi operations are handled, their process hierarchies, and relevant context for framing challenges and solutions for cab hailing-related solutions.</p>
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

.challenge {
  @apply flex flex-col lg:flex-row gap-3 items-center;
}

.challenge-description {
  @apply text-justify py-2 lg:order-1 leading-relaxed w-full lg:w-1/2 pb-10;
}

.challenge-image {
  @apply lg:w-2/3 grid justify-items-center;
}

.ux {
  @apply flex flex-col lg:flex-row items-center my-12 gap-3;
}

.ux-description {
  @apply text-justify py-2 leading-relaxed w-full lg:w-1/2 pb-10;
}

.ux-image {
  @apply lg:w-2/3 grid grid-cols-2 justify-items-center items-end;
}

.challenge-text {
  @apply leading-relaxed text-justify mb-3;
}

.take-away {
  @apply flex flex-col py-5 lg:w-2/3 items-center mx-auto lg:pl-10;
}

.take-away-text {
  @apply text-justify leading-relaxed;
}
</style>
