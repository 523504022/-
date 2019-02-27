import {
    RECEIVE_USER,
    RESET_USER
} from '../mutation-type'

import {
    reqUser,
    reqLogout
} from '../../api'

const state = {
    user:{},//用户信息对象
}

const mutations = {
    [RECEIVE_USER](state,user){
        state.user = user
    },
    [RESET_USER](state){
        state.user = {}
    },
}

const actions = {
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