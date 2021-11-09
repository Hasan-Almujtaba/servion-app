<template>
  <div class="content">
    <div>
      <h1 class="title">Our Clients</h1>
      <div class="subtitle">You can be the next one and may start for free</div>
    </div>

    <div class="my-10">
      <vue-slick-carousel
        :arrows="false"
        :dots="true"
        :autoplay="true"
        :slides-to-show="5"
        class="slider-desktop"
      >
        <div v-for="(item, i) in images" :key="i">
          <img :src="`/images/${item}`" class="w-36 mx-auto" />
        </div>
      </vue-slick-carousel>

      <vue-slick-carousel
        :arrows="false"
        :dots="true"
        :autoplay="true"
        :slides-to-show="1"
        class="slider-mobile"
      >
        <div v-for="(item, i) in images" :key="i">
          <img :src="`/images/${item}`" class="w-36 mx-auto" />
        </div>
      </vue-slick-carousel>
    </div>

    <div class="text-center">
      <web-button color="secondary"> GET FREE TRIAL </web-button>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import WebButton from "./WebButton.vue";
export default {
  components: { WebButton, VueSlickCarousel },
  data() {
    return {
      images: [
        "robinhood.png",
        "reddit.png",
        "upcase.png",
        "hubspot.png",
        "tunein.png",
      ],
    };
  },
};
</script>

<style scoped lang="postcss">
.wrapper {
  @apply flex flex-col lg:flex-row my-10 space-y-5;
}
</style>