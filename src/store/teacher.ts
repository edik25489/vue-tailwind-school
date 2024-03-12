import {defineStore} from "pinia"
import {computed} from "vue"
export const useTeachersStore = defineStore('teachers', () => {
    const teacher = [
        {
            id:1,
            name:'Овчинникова Полина Рудольфовна',
            author:'Веб-разработка',
            img:'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        },
        {
            id:2,
            name:'Павлов Станислав Сергеевич',
            author: 'Бекэнд-разработка',
            img:'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',

        },
        {
            id:3,
            name:'Тихонова Алена Валерьевна',
            author: 'Системный аналитик',
            img:'https://randomuser.me/api/portraits/women/79.jpg',
        },
        {
            id:4,
            name:'Тарасова Снежана Андреевна',
            author: '1С программирование',
            img:'https://randomuser.me/api/portraits/women/63.jpg',
        },
        {
            id:5,
            name:'Изыков Михаил Сергеевич',
            author: 'Фронтенд-разработка',
            img:'https://randomuser.me/api/portraits/men/86.jpg',
        },
        {
            id:6,
            name:'Яковлев Эдуард Сергеевич',
            author: 'Базы данных',
            img:'https://randomuser.me/api/portraits/men/46.jpg',
        },
    ]
    const getTeachers = computed(() => teacher)

    return { teacher, getTeachers }
})