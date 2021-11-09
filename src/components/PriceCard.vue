<template>
  <div class="card">
    <div class="card-img">
      <img :src="`/images/${item.image}`" alt="" />
    </div>
    <div class="card-title">
      {{ item.title }}
    </div>
    <div class="card-text">
      {{ item.text }}
    </div>
    <div class="card-price">
      Get started at
      <br />
      <span class="text-2xl">
        {{ item.price }}
        /</span
      >
      month
    </div>
    <div class="card-actions">customize plan</div>
  </div>
</template>

<script>
export default {
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
  @apply p-5 shadow hover:shadow-lg rounded border-t-8 border-white hover:border-secondary transition duration-500 hover:scale-110 transform;
}

.card-img img {
  @apply mx-auto;
}

.card-title {
  @apply text-center text-xl uppercase my-5;
}

.card-text {
  @apply text-center;
}

.card-price {
  @apply mt-10 mb-8 text-center;
}

.card-actions {
  @apply uppercase text-secondary text-center;
}

.card .card-actions {
  visibility: hidden;
}

.card:hover .card-actions {
  visibility: visible;
}
</style>