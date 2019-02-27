// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import store from './store'
import './mock/mockServer'
Vue.component('Header', Header)
Vue.component('Star', Star)


new Vue({
    el:'#app',
    components:{
        App
    },
    template: '<App/>',
    router,//配置路由器
    store//配置vuex
})