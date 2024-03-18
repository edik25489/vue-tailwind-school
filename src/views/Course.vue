<script setup lang="ts">
import {useCoursesStore} from "../store/courses.ts";
const course = useCoursesStore().getCourse
import CourseItem from "../components/CourseItem.vue";

</script>

<template>
  <div class="sm:container mx-auto flex flex-col justify-around mt-4 gap-4">
    <CourseItem :course="course"/>
  </div>
</template>

<style scoped>

</style>