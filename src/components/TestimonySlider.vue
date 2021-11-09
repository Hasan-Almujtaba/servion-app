<template>
  <div class="wrapper">
    <vue-slick-carousel
      :arrows="true"
      :dots="true"
      :autoplay="true"
      :slides-to-show="2"
      class="slider-desktop"
    >
      <div v-for="(item, i) in testimonies" :key="i">
        <testimony-card :item="item"></testimony-card>
      </div>
    </vue-slick-carousel>

    <vue-slick-carousel
      :arrows="false"
      :dots="true"
      :autoplay="true"
      :slides-to-show="1"
      class="slider-mobile"
    >
      <div v-for="(item, i) in testimonies" :key="i">
        <testimony-card :item="item"></testimony-card>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import TestimonyCard from "./TestimonyCard.vue";

export default {
  components: { VueSlickCarousel, TestimonyCard },
  data() {
    return {
      testimonies: [
        {
          image: "user1.png",
          name: "Erich Marks",
          text: "I've been using servion for more than a year and I must say I've never had such reliable service provider to work with. They've helped me out a lot",
        },
        {
          image: "user2.png",
          name: "Emily Hartman",
          text: "I've been using servion for hosting many of my wordpress websites and i truly appreciate how affordable it is. The've helped me out a lot",
        },
        {
          image: "user1.png",
          name: "Erich Marks",
          text: "I've been using servion for more than a year and I must say I've never had such reliable service provider to work with. They've helped me out a lot",
        },
        {
          image: "user2.png",
          name: "Emily Hartman",
          text: "I've been using servion for hosting many of my wordpress websites and i truly appreciate how affordable it is. The've helped me out a lot",
        },
      ],
    };
  },
};
</script>


<style scoped lang="postcss">
.wrapper {
  @apply p-10 lg:p-20;
}
</style>