import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 需要维护的状态
const state = {
    title: title,  // 标题
    user: {}   // 存储用户信息
}

//获取状态信息
const getters = {
    user: state => state.user  // 获取用户信息
}

//判断状态信息
const mutations = {
    /*getUser (state, user) {
        // 如果存在用户，将用户赋值过去
        if (user) {
            state.user = user
        } else {
            // 如果不存在，为空对象
            state.user = {}
        }
    }*/
}

//异步操作(调用mutations)
const actions = {
    getUser (state, user) {
        // 如果存在用户，将用户赋值过去
        if (user) {
            state.user = user
        } else {
            // 如果不存在，为空对象
            state.user = {}
        }
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
