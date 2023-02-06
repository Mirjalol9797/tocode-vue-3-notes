<template>
  <footer class="footer">
    <div class="container">
      <div class="navbar-content">
        <Navbar :NavbarLinks="FooterLinks" />
      </div>
    </div>
  </footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  props: {
    FooterLinks: {
      type: Array,
      default: [],
    },
  },
  components: {
    Navbar,
  },
};
</script>

<style></style>
