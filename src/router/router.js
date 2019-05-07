import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);


import Home from '../pages/Home'
import MtBody from '../pages/MtBody'
import ChangeCity from '../pages/ChangeCity'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'



export default new VueRouter({

    routes: [
        {
            path: '/',
            component: Home,
            children: [
                {
                    path: 'home',
                    component: MtBody
                },
                {
                    path: 'changecity',
                    name: 'changecity',
                    component: ChangeCity
                }
            ],
            redirect: '/home'
        },
       
        {
            path: '/s/:keyword?',
            component: Search
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }
    ],
    mode: 'history'
})
