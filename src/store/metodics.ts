import {defineStore} from "pinia"
import {computed} from "vue"
export const useMetodicsStore = defineStore('metodics', () => {
    const metodic = [
        {
            id:1,
            name:'09.02.07 Информационные системы и программирование',
            src:'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/090207-metod-ukazaniya-po-vkr.pdf'
        },
        {
            id:2,
            name:'15.02.12 Монтаж, техническое обслуживание и ремонт промышленного оборудования (по отраслям)',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/150212-metod-ukazaniya-po-vkr.pdf'
        },
        {
            id:3,
            name:'23.02.03 Техническое обслуживание  и ремонт автомобильного транспорта',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/230207-230203-metod-ukazaniya.pdf'
        },
        {
            id:4,
            name:'23.02.07 Техническое обслуживание и ремонт двигателей, систем и агрегатов автомобилей',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/230207-230203-metod-ukazaniya-ukjbiga4.pdf'
        },
        {
            id:5,
            name:'38.02.03.Операционная деятельность в логистике',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/380203-metod-ukazaniya-po-vkr.pdf'
        },
        {
            id:6,
            name:'42.02.01 Реклама',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/420201-metod-ukazaniya-po-vkr.pdf'
        },
        {
            id:7,
            name:'44.02.01 Дошкольное образование: структура, требования, оформление',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/440201-do-metodposobie-po-vip.pdf'
        },
        {
            id:8,
            name:'44.02.02 Преподавание в начальных классах: структура, требования, оформление" ',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/440202-pnk-metodposobie-po-vi.pdf'
        },
        {
            id:9,
            name:'49.02.01 Физическая культура: структура, требования, оформление',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/490201-fk-metodposobie-po-vip.pdf'
        },
        {
            id:10,
            name:'54.02.01 Дизайн (по отраслям)',
            src: 'https://fs02.rchuv.ru/rchuv19/chpk/activities/2022/5dacb5bf-ed88-4be5-8502-45b290bc82ea/540201-metod-ukazaniya-po-vkr.pdf'
        },
    ]
    const students = [
        {
            id:1,
            name:'09.02.04 Информационные системы на предприятии',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodichki-090204'
        },
        {
            id:2,
            name:'15.02.01 Монтаж и техническая эксплуатация промышленного оборудования (по отраслям)',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodichki-150201'
        },
        {
            id:3,
            name:'23.02.03 Техническое обслуживание и ремонт автомобильного транспорта',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodichki-230203'
        },
        {
            id:4,
            name:'38.02.03 Операционная деятельность в логистике',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodichki-380203'
        },
        {
            id:5,
            name:'42.02.01 Реклама',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodichki-420201'
        },
        {
            id:6,
            name:'54.02.01 Дизайн',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodichki-540201'
        },
        {
            id:7,
            name:'09.02.07 Информационные системы и программирование',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodicheskie-ukazaniya-090207'
        },
        {
            id:8,
            name:'15.02.12 Монтаж, техническое обслуживание и ремонт промышленного оборудования (по отраслям)',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodicheskie-ukazaniya-150212'
        },
        {
            id:9,
            name:'44.02.01 Дошкольное образование',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodicheskie-ukazaniya-440201'
        },
        {
            id:10,
            name:'44.02.02 Преподавание в начальных классах',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodicheskie-ukazaniya-440202'
        },
        {
            id:11,
            name:'49.02.01 Физическая культура',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodicheskie-ukazaniya-490201'
        },
        {
            id:12,
            name:'54.01.20 Графический дизайнер',
            src:'https://chpk.rchuv.ru/action/nauchno-metodicheskaya-deyateljnostj/metodicheskaya-kopilka/metodicheskie-ukazaniya-540120'
        },
    ]
    const getMetodics = computed(() => metodic)
    const getStudents = computed(()=>students)

    return { metodic, students, getMetodics, getStudents }
})