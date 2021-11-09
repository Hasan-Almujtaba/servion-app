<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped lang="postcss">
.btn {
  @apply hover:bg-secondary transition duration-500 py-2 px-5 capitalize rounded text-white;
}
</style>