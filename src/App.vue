<template>
  <div class="wrapper">
    <Header :HeaderLinks="AppLinks" />
    <div class="wrapper-content">
      <div class="container"><router-view /></div>
    </div>
    <Footer :FooterLinks="AppLinks" />
  </div>
</template>

<script>
import { constLinks } from "@/_config";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      AppLinks: constLinks,
    };
  },
};
</script>

<style lang="scss"></style>
