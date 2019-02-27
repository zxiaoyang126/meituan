import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        msg: 'welcome to duyi',
        age: 18,
        lists: [
            {type: 1, name: 'one'},
            {type: 2, name: 'two'},
            {type: 3, name: 'three'}
        ]
    },
    mutations: {
        change(state) {
            state.msg = 'winner'
        },
        addAge(state) {
            state.age++;
        }
    },
    actions: {
        add(store) {
            setTimeout(() => {
                store.commit('addAge')
            }, 1000)
        }
    },
    getters: {
        type2(state) {
            return state.lists.filter(value => value.type === 2)[0].name;
        }
    },
    modules: {
        news: {
            namespaced: true,
            state: {
                title: 'news'
            },
            getters: {
                aaa() {
                    return 'aaa'
                }
            },
            mutations: {
                newsChange(state) {                    
                    state.title = 'adsfasdfasdf';
                }
            }
        },
        home: {
            state: {
                title: 'home'
            }
        }
    }
})

