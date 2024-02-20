import {createRouter, createWebHistory} from "vue-router"

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            props:true,
            name: 'home',
            component: () => import('./page/Home.vue'),
        },
        {
            path:'/courses',
            children:[
                {
                    path:':id',
                    props:true,
                    name: 'course',
                    component: () => import('./views/Course.vue'),
                },
                {
                    path:'',
                    props:true,
                    name: 'courses',
                    component: () => import('./page/Courses.vue'),
                }
            ]
        },
        {
            path:'/videos',
            props:true,
            name: 'videos',
            component: () => import('./page/Videos.vue')
        },
        {
            path:'/metodics',
            props:true,
            name: 'metodics',
            component: () => import('./page/Metodics.vue')
        },
        {
            path:'/educations',
            props:true,
            name: 'educations',
            component: () => import('./page/Educations.vue')
        },
    ],
})
