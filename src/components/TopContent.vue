<template>
  <div class="content">
    <div>
      <h1 class="title">What will you get if you'll join us</h1>
      <div class="subtitle">
        Get the best web hosting at the price you can afford
      </div>
    </div>

    <div class="main">
      <div>
        <benefit-card
          v-for="(item, i) in benefits"
          :key="i"
          :content="item"
        ></benefit-card>
      </div>
      <div>
        <img src="/images/screen_illustration.png" class="w-full" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import BenefitCard from "./BenefitCard.vue";
export default {
  components: { BenefitCard },
  data() {
    return {
      benefits: [
        {
          image: "tool.png",
          title: "we give care",
          text: "Beside the support we provide you with various tools to be able to host and manage your website",
        },
        {
          image: "cloud.png",
          title: "tweak as you wish",
          text: "Be able to customize your plan overtime if needed so you pay only for what you use",
        },
        {
          image: "cloud.png",
          title: "security at its best",
          text: "We are the most reliable service provider, ready to give you a helping hand the fastest way possible 24/7",
        },
      ],
    };
  },
};
</script>

<style scoped lang="postcss">
.main {
  @apply flex flex-col lg:flex-row py-20 items-center justify-center;
}
</style>