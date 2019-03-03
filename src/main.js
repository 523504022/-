// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from './components/Star/Star.vue'
import CartControl from './components/CartControl/CartControl.vue'
import Split from './components/Split/Split.vue'
import store from './store'
import './mock/mockServer'
import './filters'

import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'

Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)

Vue.use(VueLazyload, { // 内部会定义一个指令: lazy
    loading,
  })
  

new Vue({
    el:'#app',
    components:{
        App
    },
    template: '<App/>',
    router,//配置路由器
    store//配置vuex
})