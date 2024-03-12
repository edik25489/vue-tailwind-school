<script setup lang="ts">
import {useCoursesStore} from "../store/courses.ts";
import {useTeachersStore} from "../store/teacher.ts";
const teachers = useTeachersStore().getTeachers
const courses = useCoursesStore()
</script>

<template>
  <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Мы инвестируем в потенциал мира
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        мы фокусируемся на рынках, где технологии, инновации и капитал могут обеспечить долгосрочную ценность и стимулировать экономический рост.
      </p>
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <router-link to="/courses" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Перейти к обучению
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
  <div class="sm:container mx-auto flex flex-col bg-slate-200 mt-4 rounded-2xl">
    <div class="flex items-center justify-around mt-3">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Популярные курсы</h5>
      <router-link to="/courses" class="text-sm font-medium text-blue-500 hover:underline dark:text-blue-400">
        Все курсы
      </router-link>
    </div>
    <div class="columns-3 grid grid-cols-3 mx-auto gap-4 my-3">
      <div class="flex flex-col max-w-sm p-6 bg-white hover:bg-emerald-100 hover:cursor-pointer border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          v-for="(item,index) in courses.getCoursesLimit" :key="index">
        <router-link :to = "{name:'course', params:{id:item.id}}"
                     @click="courses.setCourse(item.id)"
                     class="inline-flex font-medium items-center text-blue-600">
        <div class="flex flex-col">
          <svg class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
          </svg>
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{{item.name}}</h5>
        </div>
        </router-link>
      </div>
    </div>
  </div>

  <section class="mt-3 py-14 bg-amber-50 sm:container rounded-2xl mx-auto">
    <div class="max-w-screen-xl mx-auto px-4 md:px-8">
      <div class="max-w-xl">
        <h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Наши преподаватели
        </h3>
        <p class="text-gray-600 mt-3">
          В нашей команде преподаватели с большим оптыом работы в крупных компаниях
        </p>
      </div>
      <div class="mt-12">
        <ul

            class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <li v-for="(teacher, idx) in teachers" :key="idx"
              class="flex gap-4 items-center">
            <div class="flex-none w-24 h-24">
              <img
                  :src=teacher.img
                  class="w-full h-full rounded-full object-contain"
                  alt=""
              />
            </div>
            <div>
              <h4 class="text-gray-700 font-semibold sm:text-lg">{{teacher.name}}</h4>
              <p class="text-indigo-600">{{teacher.author}}</p>
              <div class="mt-3 flex gap-4 text-gray-400">

              </div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </section>

  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
      <h5 class="mb-4 text-xl font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Подписка на новости</h5>
      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
        Будьте всегда с нами! Оставайтесь в курсе последних новостей и обновлений!
      </p>
      <form class="w-full max-w-md mx-auto">
        <label for="default-email" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
          </div>
          <input type="email" id="default-email" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Введите электронную почту..." required />
          <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">отправить</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>