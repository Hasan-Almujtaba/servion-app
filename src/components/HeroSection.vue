<template>
  <div class="hero">
    <div>
      <h1 class="hero-title">web hosting easy and secure</h1>
      <div class="hero-subtitle">Full control of what you use and pay for</div>
      <div class="search-input">
        <formulate-input
          type="text"
          placeholder="Search for a domain name"
        ></formulate-input>
        <formulate-input type="select" :options="options"></formulate-input>
      </div>
      <web-button color="secondary" class="mt-3">
        check availability
      </web-button>
    </div>
    <div class="flex-grow responsive-block"></div>
    <div class="responsive-block">
      <img src="/images/Illustration.png" class="max-w-xl" alt="" />
    </div>
  </div>
</template>

<script>
import WebButton from "./WebButton.vue";
export default {
  components: { WebButton },
  data() {
    return {
      options: [
        {
          value: ".com",
          label: ".com",
        },
        {
          value: ".net",
          label: ".net",
        },
        {
          value: ".id",
          label: ".id",
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.hero {
  background-image: url("/images/hero-bg.png");
  min-height: 500px;
  @apply bg-cover bg-no-repeat bg-center px-10 lg:px-20 text-white flex items-center;
}

.hero-title {
  @apply capitalize text-xl lg:text-3xl font-bold;
}

.hero-subtitle {
  @apply my-3 text-gray-300;
}

.search-input {
  @apply flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-0.5;
}
</style>