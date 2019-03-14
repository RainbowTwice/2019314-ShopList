//路由器模块

import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'


Vue.use(VueRouter)
export default new VueRouter({
    //n个路由映射
    routes: [{
            path: '/msite',
            component: Msite,
            meta: {
                FooterShow: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                FooterShow: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                FooterShow: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                FooterShow: true
            }
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/',
            redirect: '/msite'
        }
    ]
})