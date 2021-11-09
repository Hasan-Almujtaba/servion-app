<template>
  <div class="header">
    <div>
      <img src="/images/logo.png" alt="" />
    </div>
    <div class="flex-grow"></div>
    <div class="header-nav responsive-flex">
      <nav-button v-for="(item, i) in navigations" :key="i">
        {{ item }}
      </nav-button>
      <web-button right-icon="user">login</web-button>
    </div>

    <web-button
      right-icon="menu"
      color="primary"
      class="mobile-nav-btn"
      @click="mobileNavOpen = true"
    >
    </web-button>

    <div
      class="mobile-nav-overlay"
      :style="mobileNavOpen ? 'height:100%' : 'height:0%'"
    >
      <div class="mobile-close-btn" @click="mobileNavOpen = false">
        <v-icon name="x" class="w-14"></v-icon>
      </div>

      <div class="overlay-content">
        <div v-for="(item, i) in navigations" :key="i" class="mobile-menu">
          {{ item }}
        </div>
        <div class="mobile-menu">login</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavButton from "./NavButton.vue";
import WebButton from "./WebButton.vue";
export default {
  components: { NavButton, WebButton },
  data() {
    return {
      navigations: ["home", "services", "our plans", "tools & resources"],
      mobileNavOpen: false,
    };
  },
};
</script>

<style scoped lang="postcss">
.header {
  @apply bg-primary py-7 px-10 lg:px-20 flex items-center w-full fixed z-50;
}

.header-nav {
  @apply space-x-2;
}

.mobile-nav-btn {
  @apply block lg:hidden;
}

.mobile-nav-overlay {
  transition: 0.5s;
  @apply w-full fixed z-50 left-0 top-0 overflow-x-hidden bg-primary;
}

.mobile-nav-overlay .mobile-close-btn {
  top: 150px;
  right: 45px;
  @apply absolute text-white;
}

.overlay-content {
  top: 35%;
  @apply relative text-center mt-8 w-full;
}

.mobile-menu {
  @apply block text-white uppercase text-2xl hover:text-secondary;
}
</style>