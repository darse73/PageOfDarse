import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title:"a"
    },
    mutations: {
        changeTitle (state, title) {
            state.title = title
        }
    }
})
  
export default store