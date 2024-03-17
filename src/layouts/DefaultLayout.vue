<script setup lang="ts">
import Footer from "../components/Footer.vue";
import NavMenu from "../components/NavMenu.vue";
import {onMounted} from "vue";
import {initFlowbite} from "flowbite";
onMounted(() => {
  initFlowbite();
})
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