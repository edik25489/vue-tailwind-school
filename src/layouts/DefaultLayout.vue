<script setup lang="ts">
import Footer from "../components/Footer.vue";
import NavMenu from "../components/NavMenu.vue";

</script>

<template>
  <NavMenu/>
  <div class="container-sm">
    <slot/>
  </div>
  <Footer/>
</template>

<style scoped>

</style>