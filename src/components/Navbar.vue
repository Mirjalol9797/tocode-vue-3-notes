<template>
  <ul class="navbar-list">
    <li class="navbar-item" v-for="link in NavbarLinks" :key="link.alias">
      <router-link :to="link.url" class="navbar-link">{{
        link.title
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    NavbarLinks: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style></style>
