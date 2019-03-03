import Vue from 'vue'

import {
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    ADD_FOOD_NUMBER,
    REDUCE_FOOD_NUMBER,
    CLEARCART
} from '../mutation-type'

import {
    reqGoods,
    reqInfo,
    reqRatings
} from '../../api'

const state = {
    info: {},//商家信息
    goods: [],//商品列表
    ratings: [],//商家评价列表
    cartFoods: [],//添加到购物车中的food
}

const mutations = {
    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },
    [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },
    [ADD_FOOD_NUMBER](state, { food }) {
        if (food.number) {
            food.number++
        } else {
            Vue.set(food, 'number', 1)
            // 将food添加到cartFoods
            state.cartFoods.push(food)
        }
    },
    [REDUCE_FOOD_NUMBER](state, { food }) {
        if (food.number > 0) {
            food.number--
            // 当food的数量为0，将其移除
            if (food.number === 0) {
                const index = state.cartFoods.indexOf(food)
                state.cartFoods.splice(index, 1)
            }
        }
    },
    [CLEARCART](state) {
        // 将购物车中所有的food数量置为0
        state.cartFoods.forEach(food => food.number = 0)
        // 重置购物车数组
        state.cartFoods = []
    }
}

const actions = {
    // 异步获取mock商品列表
    async getShopGoods({ commit }, callBack) {
        const result = await reqGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
            typeof callBack === 'function' && callBack()
        }
    },
    // 异步获取mock商家信息
    async getShopInfo({ commit }) {
        const result = await reqInfo()
        if (result.code === 0) {
            const info = result.data
            commit(RECEIVE_INFO, { info })
        }
    },
    // 异步获取mock商家评价列表
    async getShopRatings({ commit }, callBack) {
        const result = await reqRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, { ratings })
            typeof callBack === 'function' && callBack()
        }
    },
    // 更新指定food的数量
    updateFoodNumber({ commit }, { isAdd, food }) {
        if (isAdd) {
            commit(ADD_FOOD_NUMBER, { food })
        } else {
            commit(REDUCE_FOOD_NUMBER, { food })
        }
    },
    // 清除购物车
    clearCart({ commit }) {
        commit(CLEARCART)
    }
}

const getters = {
    // 总数量
    totalNumber(state) {
        return state.cartFoods.reduce((preTotal, item) => preTotal + item.number, 0)
    },
    // 总价格
    totalPrice(state) {
        return state.cartFoods.reduce((preTotal, item) => preTotal + item.number * item.price, 0)
    },
    // 评价总数量
    totalRatingNum(state) {
        return state.ratings.length
    },
    // 好评总数量
    totalGoodRatingNum(state) {
        return state.ratings.filter(rating => rating.rateType === 0).length
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}