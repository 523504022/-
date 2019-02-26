// 包含N个间接更新状态数据的方法的对象

import {
    reqAddress,
    reqCategorys,
    reqShops,
    reqUser,
    reqLogout
} from '../api'

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER,
    RESET_USER
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
    // 同步获取用户信息对象
    saveUser({commit},user){
        commit(RECEIVE_USER,user)
    },
    // 异步获取当前用户信息
    async getUser({commit}){
        const result = await reqUser()
        if(result.code === 0){
            const user = result.data
            commit(RECEIVE_USER,user)
        }
    },
    // 退出登录
    async logout ({commit}){
        const result = await reqLogout()
        if(result.code === 0){
            commit(RESET_USER)
        }
    }
}