// 包含N个间接更新状态数据的方法的对象

import {
    reqAddress,
    reqCategorys,
    reqShops
} from '../api'

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-type'

export default{
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
        // 成功后提交mutation
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
    }
}