<script setup lang="ts">
import {useVideosStore} from "../store/modules/videos.ts";
const videos = useVideosStore()
</script>

<template>
  <div class="sm:container mx-auto flex flex-row flex-wrap justify-around">

    <section class="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
      <div class="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(video, index) in videos.getVideos" :key="index" class="max-w-md mx-auto mt-4 shadow-sm border rounded-md duration-300 hover:shadow-lg">
          <a :href=video.src>
            <img :src=video.img alt="описание" class="w-full h-48 rounded-t-md object-contain" />
          </a>
            <div class="flex items-center mt-2 pt-3 ml-4 mr-2">
              <div class="flex-none w-10 h-10 rounded-full">
                <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="описание" class="w-full h-full rounded-full" />
              </div>
              <div class="ml-3">
                <span class="block text-gray-900"></span>
              </div>
            </div>
            <div class="pt-3 ml-4 mr-2 mb-3">
              <h3 class="text-xl text-gray-900">
                {{video.name}}
              </h3>
              <p class="text-gray-400 text-sm mt-1">{{video.desc}}</p>
            </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>