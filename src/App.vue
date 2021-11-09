<template>
  <div id="app">
    <web-navigation></web-navigation>
    <hero-section></hero-section>
    <top-content></top-content>
    <tool-resource></tool-resource>
    <pricing-content></pricing-content>
    <testimony-content></testimony-content>
    <client-content></client-content>
    <web-footer></web-footer>
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import WebNavigation from "./components/WebNavigation.vue";
import TopContent from "./components/TopContent.vue";
import ToolResource from "./components/ToolResource.vue";
import PricingContent from "./components/PricingContent.vue";
import TestimonyContent from "./components/TestimonyContent.vue";
import ClientContent from "./components/ClientContent.vue";
import WebFooter from "./components/WebFooter.vue";

export default {
  components: {
    WebNavigation,
    HeroSection,
    TopContent,
    ToolResource,
    PricingContent,
    TestimonyContent,
    ClientContent,
    WebFooter,
  },
  name: "App",
};
</script>
