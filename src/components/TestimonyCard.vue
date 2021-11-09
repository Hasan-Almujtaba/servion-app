<template>
  <div class="card">
    <div class="card-img">
      <img :src="`/images/${item.image}`" />
    </div>
    <div class="card-content">
      <star-rating
        :rating="5"
        read-only
        :show-rating="false"
        :star-size="20"
      ></star-rating>
      <div>
        <i> "{{ item.text }}" </i>
      </div>
      <div class="font-bold">- {{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="postcss">
.card {
  @apply flex flex-col lg:flex-row;
}

.card-img {
  @apply mx-auto lg:w-64 lg:mx-0;
}

.card-content {
  @apply self-center p-3 text-center lg:text-left;
}

.card-content .vue-star-rating >>> .vue-star-rating {
  @apply mx-auto lg:mx-0;
}
</style>