//路由器模块

import Vue from 'vue'
import VueRouter from 'vue-router'

import Aboute from '../views/Aboute.vue'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'
Vue.use(VueRouter)
export default new VueRouter({
    //n个路由映射
    routes: [{
            path: '/aboute',
            component: Aboute
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: '/home/news',
                    component: News
                },
                {
                    path: '/home/message',
                    component: Message,
                    children: [{
                        path: '/home/message/messagedetail/:id',
                        component: MessageDetail
                    }]
                },
                {
                    path: '',
                    redirect: '/home/news'
                }
            ]

        },
        {
            path: '/',
            redirect: '/aboute'
        }
    ]
})