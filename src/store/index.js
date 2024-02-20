import {createStore} from "vuex"
import courses from "./modules/courses.js"

const store = createStore({
    modules:{
        courses,
    }
})
export default store;
