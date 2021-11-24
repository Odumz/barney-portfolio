<template>
  <div class="text-skin-primary lg:px-70 md:px-20 px-10 py-10 overflow-hidden">
    <h1 class="text-3xl font-bold">Case Studies</h1>
    <div class="case-study">
      <div v-for="casebrief in cases" :key="casebrief.image" >
        <div class="case hover:shadow-lg rounded px-3 pb-3">
          <CaseStudy class="">
            <template #image>
              <img :src="casebrief.image" alt="" class="w-96">
            </template>
            <template #title>
              <nuxt-link :to="{ path: casebrief.link }">
                {{ casebrief.title }}
              </nuxt-link>
            </template>
            <template #description>
              {{ casebrief.description }}
            </template>
          </CaseStudy>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    scrollToTop: true,
    data() {
      return {
        cases: [
          {
            image: 'https://res.cloudinary.com/griffintech/image/upload/v1637169953/barney/sbtaxiapp_1_1_bk4ijm.png',
            title: 'SB Taxi App',
            link: 'project-sb-taxi',
            description: 'Creating a Nigerian Taxi Experience'
          },
          {
            image: 'https://res.cloudinary.com/griffintech/image/upload/v1637169953/barney/kryptonft_1_cm09z7.png',
            title: 'Krypto NFT Web',
            link: 'project-krypto-nft',
            description: 'Designing a NFT website'
          },
          {
            image: 'https://res.cloudinary.com/griffintech/image/upload/v1637167446/barney/zurichat_s8c2dz.png',
            title: 'Zuri Chat',
            link: 'project-zuri-chat',
            description: 'A fully integrated way to connect and interact'
          },
          {
            image: 'https://res.cloudinary.com/griffintech/image/upload/v1637167447/barney/loading_yjnv43.png',
            title: 'Coming soon...',
            description: 'Adding more awesome projects in the future.'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .case-study {
    @apply grid lg:grid-cols-2 my-12 justify-center;
  }

  .case {
    @apply md:my-1 my-2 lg:-mx-1 grid justify-items-center;
  }
</style>
