// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

const Msite = () => import('../pages/Msite/Msite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Search = () => import('../pages/Search/Search.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Info from '../pages/Shop/Info/Info.vue'
import Ratings from '../pages/Shop/Ratings/Ratings.vue'



Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history', //去掉#号
    // 配置所有路由
    routes: [
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
            path: '/shop',
            component: Shop,
            children: [
                {
                    path: '/shop/goods',
                    component: Goods
                },
                {
                    path: '/shop/info',
                    component: Info
                },
                {
                    path: '/shop/ratings',
                    component: Ratings
                },
                {
                    // 默认显示goods
                    path: '',
                    redirect: '/shop/goods'
                }
            ]
        },
        {
            // 设置默认跳转到msite路由
            path: '/',
            redirect: '/msite'
        }
    ]
})
