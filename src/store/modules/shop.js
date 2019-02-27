import {
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS
} from '../mutation-type'

import {
    reqGoods,
    reqInfo,
    reqRatings
} from '../../api'

const state = {
    info:{},//商家信息
    goods:[],//商品列表
    ratings:[],//商家评价列表
}

const mutations = {
    [RECEIVE_GOODS](state,{goods}){
        state.goods = goods
    },
    [RECEIVE_INFO](state,{info}){
        state.info = info
    },
    [RECEIVE_RATINGS](state,{ratings}){
        state.ratings = ratings
    },
}

const actions = {
    // 异步获取mock商品列表
    async getShopGoods({commit}){
        const result = await reqGoods()
        if(result.code === 0){
            const goods = result.data
            commit(RECEIVE_GOODS,{goods})
        }
    },
    // 异步获取mock商家信息
    async getShopInfo({commit}){
        const result = await reqInfo()
        if(result.code === 0){
            const info = result.data
            commit(RECEIVE_INFO,{info})
        }
    },
    // 异步获取mock商家评价列表
    async getShopRatings({commit}){
        const result = await reqRatings()
        if(result.code === 0){
            const ratings = result.data
            commit(RECEIVE_RATINGS,{ratings})
        }
    },
}

const getters = {
    
}

export default{
    state,
    mutations,
    actions,
    getters
}