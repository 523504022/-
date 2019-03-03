import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from '../mutation-type'

import {
    reqAddress,
    reqCategorys,
    reqShops
} from '../../api'

const state = {
    latitude: 34.78,
    longitude: 111.20,
    address: {},//当前地信息对象
    categorys: [],//食品分类列表
    shops:[],//商家列表
}

const mutations = {
    [RECEIVE_ADDRESS](state,address){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state,categorys){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state,shops){
        state.shops = shops
    },
}

const actions = {
    // 异步获取地址
    async getAddress ({commit,state}){
        // 发送ajax请求
        const {longitude,latitude} = state
        const result = await reqAddress(longitude,latitude)
        // 成功后提交mutation
        if(result.code === 0){
            commit(RECEIVE_ADDRESS,result.data)
        }
    },
    // 异步获取分类列表
    async getCategorys ({commit}){
        // 发送ajax请求
        const result = await reqCategorys()
        if(result.code === 0){
            commit(RECEIVE_CATEGORYS,result.data)
        }
    },
    // 异步获取商家列表
    async getShops ({commit,state}){
        // 发送ajax请求
        const {longitude,latitude} = state
        const result = await reqShops({longitude,latitude})
        // 成功后提交mutation
        if(result.code === 0){
            commit(RECEIVE_SHOPS,result.data)
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