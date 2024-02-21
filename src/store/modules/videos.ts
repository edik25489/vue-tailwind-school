import {defineStore} from "pinia"
import {computed} from "vue"
export const useVideosStore = defineStore('videos', () => {
    const videoId = 0
    const video = [
        {
            id:1,
            name:'Всеобщая история. 10 класс',
            author:'Константин Мельник',
            img:'https://i.ytimg.com/vi/-HsBwDSvEho/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBlIP1m9CZn5Lftepw5C6BApXAg-w',
            desc:'',
            src:'https://www.youtube.com/playlist?list=PLl25HDpXnTKF36kcPOEmbF3OcCMuHdvL3'
        },
        {
            id:2,
            name:'География. 10 класс',
            author: 'InternetUrok.ru',
            img:'https://i.ytimg.com/vi/ETdBH6ycMSc/hqdefault.jpg',
            desc:'Коллекция видеоуроков по Географии за 10 класс с конспектами, тестами и тренажерами, а также возможность получить домашнее задание к пройденному уроку от проекта InternetUrok.ru',
            src: 'https://www.youtube.com/playlist?list=PLp1o4TiOetLyCrcWbaItj4oCqZhp1Kqe8'
        },
        {
            id:3,
            name:'Уроки литературы 10 класс',
            author: 'Наталья Бубырь',
            img:'https://i.ytimg.com/vi/XEgzSj6IV18/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIcZK_EvS-J1CRGjpnKiLU73YWEw',
            desc:'',
            src: 'https://www.youtube.com/playlist?list=PLW_HWt-wjLaZNFr_Hu9TAIl_AQEqoZbJs'
        },
        {
            id:4,
            name:'ВИДЕОУРОКИ: Физика 10 класс',
            author: 'ИНФОУРОК',
            img:'https://i.ytimg.com/vi/54Lb6ie1acM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2ZAnmUOGqg5N04cE4S3yhdLhtLA',
            desc:'Видеоуроки по физике для 10 класса являются идеальными помощниками при изучении новых тем, закреплении материала, для обычных и факультативных занятий, для групповой и индивидуальной работы.',
            src: 'https://www.youtube.com/playlist?list=PLvtJKssE5NrjCwT9X0Pty3ZIgb0fFLUsZ'
        },
        {
            id:5,
            name:'ИНФОРМАТИКА 10 класс ВИДЕОУРОКИ',
            author: 'OnliSkill',
            img:'https://i.ytimg.com/vi/R3D769au5iA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCccWvfUcjex8HG4Nmy16zzGeMlpA',
            desc:'OnliSkill - видеоуроки с 5 по 11 класс',
            src: 'https://www.youtube.com/playlist?list=PLRqVDT_WVZRkVFoTh2L8MiVRb4kgX4c-T'
        },
        {
            id:6,
            name:'АЛГЕБРА 10 КЛАСС все темы',
            author: 'Романов Владимир',
            img:'https://i.ytimg.com/vi/GV3Vb0cUsQY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB98ERduo1KjRI1FKC8y4Yuh0Znfg',
            desc:'физика ОГЭ математика ЕГЭ - Романов Владимир',
            src: 'https://www.youtube.com/playlist?list=PLBnDGoKqP7bbXfM7jrSQzkTEkFJdF4YxP'
        },
        {
            id:7,
            name:'ВИДЕОУРОКИ: Химия 10 класс',
            author: 'ИНФОУРОК',
            img:'https://i.ytimg.com/vi/gqsWmkHpK5k/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5yNWMHPQUs6Ma3ygfDZi6xhIcsQ',
            desc:'Видеоуроки по химии для 10 класса являются идеальными помощниками при изучении новых тем, закреплении материала, для обычных и факультативных занятий, для групповой и индивидуальной работы.',
            src: 'https://www.youtube.com/playlist?list=PLvtJKssE5Nrg1942bgV9TqwX8N_Hry2e_'
        },
        {
            id:8,
            name:'Биология. 10 класс.',
            author: 'MEKTEП OnLine БИОЛОГИЯ',
            img:'https://i.ytimg.com/vi/zCt-UwzhGUc/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhlIFQoWjAP&rs=AOn4CLA6465DeFcWUf1C3FpD0v0ZX5Pqkw',
            desc:'Видеоуроки по биологии для 10 класса',
            src: 'https://www.youtube.com/playlist?list=PLXkU5fIuRdYJgs5TSwtH8NYyLQC-J2JhU'
        },
        {
            id:9,
            name:'Русский язык 10 класс',
            author: 'Видеоуроки',
            img:'https://i.ytimg.com/vi/QNwq9fce3yo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqVKcqGEmCc3Z0I7mK8qyjJcu91Q',
            desc:'Видеоуроки по русскому языку для 10 класса',
            src: 'https://www.youtube.com/playlist?list=PLAUhrtAMVO-8VwXADhcq2VBt8u55hg49z'
        },
        {
            id:10,
            name:'Физкультура 10 класс',
            author: 'Видеоуроки',
            img:'https://i.ytimg.com/vi/PPIgyHUxtmU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKbvr2OGeg1qwOyWszxC9BHAt3jQ',
            desc:'Видеоуроки по физической культуре для 10 класса',
            src: 'https://www.youtube.com/playlist?list=PLAUhrtAMVO-9a6N7LC2WwFnBiVR_XWbX-'
        },
    ]
    const getVideos = computed(() => video)

    return { video, videoId, getVideos }
})