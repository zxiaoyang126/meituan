import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        curCity: '上海',       
    },
    mutations: {
        changeCity(state, city) {
            state.curCity = city;
        }
    }
})