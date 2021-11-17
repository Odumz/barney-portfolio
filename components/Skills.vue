<template>
  <div class="lg:px-40 md:px-20 px-10 text-skin-primary">
    <h1 class="text-3xl font-bold">Expertise</h1>
    <div class="grid sm:grid-cols-2 gap-4">
      <div class="links">
        <ul class="my-3">
          <li class="mb-3">
            <a href="https://www.behance.net/barnabasina9e5" target="_blank" class="underlined">Behance</a>
          </li>
          <li class="my-3">
            <a href="https://dribbble.com/baneyzinsane" target="_blank" class="underlined">Dribble</a>
          </li>
          <li class="my-3">
            <a href="https://www.instagram.com/barneyzinsane/" target="_blank" class="underlined">Instagram</a>
          </li>
        </ul>
      </div>
      <div class="skills">
        <div class="my-3">
          <h2 class="title">Branding</h2>
          <ul>
            <li>
              <p class="text-lg">Communication</p>
            </li>
            <li>
              <p class="text-lg">Copywriting</p>
            </li>
            <li>
              <p class="text-lg">Systems & Guides</p>
            </li>
          </ul>
        </div>
        <div class="my-3">
          <h2 class="title">Design</h2>
          <ul>
            <li>
              <p class="text-lg">Digital Product Design</p>
            </li>
            <li>
              <p class="text-lg">Responsive Web Design</p>
            </li>
            <li>
              <p class="text-lg">Mobile UI/ UX Design</p>
            </li>
            <li>
              <p class="text-lg">Prototyping</p>
            </li>
            <li>
              <p class="text-lg">Interaction Design</p>
            </li>
            <li>
              <p class="text-lg">User Experience</p>
            </li>
            <li>
              <p class="text-lg">Info Architecture</p>
            </li>
          </ul>
        </div>
        <div class="my-3">
          <h2 class="title">Process</h2>
          <ul>
            <li>
              <p class="text-lg">Understand</p>
            </li>
            <li>
              <p class="text-lg">Contextualize</p>
            </li>
            <li>
              <p class="text-lg">Explore</p>
            </li>
            <li>
              <p class="text-lg">Validate</p>
            </li>
            <li>
              <p class="text-lg">Build</p>
            </li>
          </ul>
        </div>
        <div class="my-3">
          <h2 class="title">Tools</h2>
          <ul>
            <li>
              <p class="text-lg">Figma</p>
            </li>
            <li>
              <p class="text-lg">AdobeXD</p>
            </li>
            <li>
              <p class="text-lg">Corel Draw</p>
            </li>
            <li>
              <p class="text-lg">Invision Studio</p>
            </li>
            <li>
              <p class="text-lg">Adobe Photoshop</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .links {
    @apply grid;
  }

  .skills {
    @apply grid lg:grid-cols-2;
  }

  .title {
    @apply text-2xl font-bold mb-2;
  }

  .underlined {
    @apply underline;
    text-decoration-color: #CAA519;
    text-decoration-thickness: 2.5px;
    text-underline-offset: 0.2em;
  }
</style>
