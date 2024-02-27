<script setup lang="ts">
import {useCoursesStore} from "../store/courses.ts";
const courses = useCoursesStore()

</script>

<template>

  <div class="sm:container mx-auto flex flex-row flex-wrap justify-around mt-4 gap-4">
    <div class="w-full max-w-72 bg-white hover:bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
         v-for="item in courses.getCourses">
      <router-link
          class="font-medium text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          :to = "{name:'course', params:{id:item.id}}"
          @click="courses.setCourse(item.id)">
      <img class="p-8 mx-auto rounded-t-lg max-h-48" :src=item.img alt="product image" />

      <div class="px-5 pb-5">

        <h5 class="text-xl truncate font-semibold tracking-tight text-gray-900 dark:text-white">{{item.name}}</h5>

      </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>