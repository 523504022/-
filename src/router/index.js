// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history', //去掉#号
    // 配置所有路由
    routes:[
        {
            path: '/msite',
            component: Msite,
            meta: {
                footerShow: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                footerShow: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                footerShow: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                footerShow: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            // 设置默认跳转到msite路由
            path:'/',
            redirect: '/msite'
        }
    ]
})
