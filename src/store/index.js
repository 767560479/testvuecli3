import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        counter: 1000
    },
    mutations: {
        // 方法
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    },
    actions: {},
    getters: {},

})

export default store;