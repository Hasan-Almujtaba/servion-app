<template>
  <div :class="content.theme === '1' ? 'card' : 'card-inverse'">
    <div :class="content.theme === '1' ? 'card-img' : 'card-img-inverse'">
      <img :src="`/images/${content.image}`" alt="" />
    </div>

    <div class="card-title">
      {{ content.title }}
    </div>

    <div class="card-text">
      {{ content.text }}
    </div>

    <div class="card-actions">
      <web-button right-icon="arrow-right">learn more</web-button>
    </div>
  </div>
</template>

<script>
import WebButton from "./WebButton.vue";
export default {
  components: { WebButton },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="postcss">
.card {
  background-image: url("/images/clouds.png");
  background-size: 40%;
  @apply p-5 bg-secondary text-white rounded bg-right-top bg-no-repeat bg-origin-content;
}

.card-inverse {
  background-image: url("/images/logos.png");
  background-size: 40%;
  @apply p-5 bg-primary text-white rounded bg-right-top bg-no-repeat bg-origin-content;
}

.card-img {
  @apply p-1 w-16 bg-primary rounded;
}

.card-img-inverse {
  @apply p-1 w-16 bg-secondary rounded;
}

.card-img img,
.card-img-inverse img {
  @apply mx-auto;
}

.card-title {
  @apply uppercase font-bold my-5;
}

.card-img {
  @apply bg-primary;
}

.card-actions {
  @apply mt-3 flex justify-end;
}
</style>