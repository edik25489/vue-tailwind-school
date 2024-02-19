import {createRouter, createWebHistory} from "vue-router"

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            props:true,
            name: 'Home',
            component: () => import('./page/Home.vue'),
        },
        {
            path:'/courses',
            props:true,
            name: 'Courses',
            component: () => import('./page/Courses.vue')
        },
        {
            path:'/videos',
            props:true,
            name: 'Videos',
            component: () => import('./page/Videos.vue')
        },
    ],
})
