<template>
  <button class="btn" :class="color" @click="$emit('click')">
    <slot></slot>
    <v-icon
      :name="rightIcon"
      class="w-5 inline-block mb-1 ml-1"
      v-if="rightIcon"
    ></v-icon>
  </button>
</template>

<script>
export default {
  props: {
    rightIcon: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped lang="postcss">
.btn {
  @apply transition duration-500 py-2 px-5 capitalize rounded;
}

.default {
  @apply bg-white text-primary;
}

.primary {
  @apply bg-primary text-white;
}

.secondary {
  @apply bg-secondary text-white;
}
</style>