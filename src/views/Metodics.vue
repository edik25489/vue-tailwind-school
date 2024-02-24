<script setup lang="ts">
import {useMetodicsStore} from "../store/metodics.ts";

const metodics = useMetodicsStore().getMetodics
const students = useMetodicsStore().getStudents
</script>

<template>
<div class="mt-6 flex flex-col mx-auto sm:container py-1">
  <div class="sm:container mx-auto text-gray-600">
    <div class="flex flex-col items-stretch">
      <div class="mx-5 pb-2 text-gray-800 font-medium text-2xl">
        Методические указания для подготовки и защиты выпускной квалификационной работы по программе подготовки специалистов среднего звена
      </div>
      <ul v-for="(metodic, index) in metodics" :key="index" class='p-3 space-y-3'>
        <a :href=metodic.src target="_blank" class="hover:shadow-lg block">
        <li class='flex items-center gap-5 pb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7" />
          </svg>

            {{metodic.name}}

        </li>
        </a>
      </ul>
    </div>
  </div>
  <div class="mt-6 max-w-screen-xl mx-auto text-gray-600">
    <div class="flex flex-col items-stretch">
      <div class="pb-2 text-gray-800 font-medium text-2xl">
        Методические указания по учебным предметам, дисциплинам, модулям
      </div>
      <ul v-for="(student, index) in students" :key="index" class='p-3 space-y-3'>
        <a :href=student.src target="_blank" class="hover:shadow-lg block">
        <li class='flex items-center gap-5 pb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 13l4 4L19 7" />
          </svg>
            {{student.name}}
        </li>
        </a>
      </ul>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>