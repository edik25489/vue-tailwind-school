<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import DefaultLayout from "./layouts/DefaultLayout.vue";

onMounted(() => {
  initFlowbite();
})
</script>

<template>
  <DefaultLayout>
    <RouterView/>
  </DefaultLayout>

</template>

<style scoped>

</style>
