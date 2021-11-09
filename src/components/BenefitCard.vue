<template>
  <div class="card">
    <div class="card-img">
      <img :src="`/images/${content.image}`" class="w-14 mx-auto" />
    </div>
    <div class="card-content">
      <div class="card-title">
        {{ content.title }}
      </div>
      <div class="card-text">
        {{ content.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  @apply flex flex-col lg:flex-row;
}

.card-img {
  @apply pt-4;
}

.card-title {
  @apply uppercase font-semibold text-center lg:text-left;
}

.card-text {
  @apply mt-2;
}

.card-content {
  @apply p-3 max-w-md;
}
</style>