<template>
  <div class="content">
    <div>
      <h1 class="title">Don't know where to start from?</h1>
      <div class="subtitle">
        we've got the best articles, tools, and resources to help you to start
      </div>
    </div>

    <div class="main">
      <tool-card v-for="(item, i) in data" :key="i" :content="item"></tool-card>
    </div>
  </div>
</template>

<script>
import ToolCard from "./ToolCard.vue";
export default {
  components: { ToolCard },
  data() {
    return {
      data: [
        {
          image: "launch.png",
          title: "planning to build a website",
          text: "You want to build a new website but not sure what to start with? We've prepared a step by step guide for you to handle the whole process from design to launch.",
          theme: "1",
        },
        {
          image: "layout.png",
          title: "want to move a website to servion",
          text: "Already have an existing website and want to move it to servion but not sure how to do it? No worries, it's not difficult. we can handle all the work for you.",
          theme: "2",
        },
      ],
    };
  },
};
</script>

<style scoped lang="postcss">
.main {
  @apply flex flex-col lg:flex-row py-20 items-center lg:space-x-5 lg:space-y-0 space-y-5;
}
</style>