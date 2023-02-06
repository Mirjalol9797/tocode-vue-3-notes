<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link :to="{ name: 'home' }" class="navbar-logo">
          {{ logo }}
        </router-link>
        <Navbar :NavbarLinks="HeaderLinks" />
      </div>
    </div>
  </header>
</template>

<script>
import { siteLogo } from "@/_config";
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      logo: siteLogo.logo,
    };
  },
  name: "Header",
  components: {
    Navbar,
  },
  props: {
    HeaderLinks: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
