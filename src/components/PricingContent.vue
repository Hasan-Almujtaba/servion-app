<template>
  <div class="content">
    <div>
      <h1 class="title">Types of hosting that we provide</h1>
      <div class="subtitle">our service is always affordablde for everyone</div>
    </div>

    <div class="wrapper">
      <price-card
        v-for="(item, i) in prices"
        :key="i"
        :item="item"
      ></price-card>
    </div>
  </div>
</template>

<script>
import PriceCard from "./PriceCard.vue";
export default {
  components: { PriceCard },
  data() {
    return {
      prices: [
        {
          image: "icon.png",
          title: "shared hosting",
          text: "Increase the rank of you website by the higher speed",
          price: "$15.99",
        },
        {
          image: "iconx.png",
          title: "vps hosting",
          text: "Be able to conceal your ID whenever needed",
          price: "$8.99",
        },
        {
          image: "icony.png",
          title: "cloud hosting",
          text: "Super convenient and highly customizable option",
          price: "$7.99",
        },
        {
          image: "wp-icon.png",
          title: "wordpress hosting",
          text: "With low cost and high variety of tools, plugin of your choice",
          price: "$13.99",
        },
      ],
    };
  },
};
</script>

<style scoped lang="postcss">
.wrapper {
  @apply flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-5 lg:my-10 my-14;
}
</style>