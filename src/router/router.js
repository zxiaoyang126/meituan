import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);



import MtBody from '../pages/MtBody'
import ChangeCity from '../pages/ChangeCity'
import Search from '../pages/Search'

export default new VueRouter({

    routes: [
        {
            path: '/',
            name: 'mt-body',
            component: MtBody
        },
        {
            path:'/changecity',
            name: 'changecity',
            component: ChangeCity
        },
        {
            path: '/s',
            name: 'search',
            component: Search
        }
    ],
    mode: 'history'
})
