//创建最为核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//准备actions-响应组件中的动作
const actions={
    jia(context,value){
        context.commit('jia',value)
    },
    jian(context,value){
        context.commit('jian',value)
    },
    odd(context,value){
        context.commit('odd',value)
    }
}
//准备mutations-处理数据
const mutations={
    jia(state,value){
        state.sum += value
    },
    jian(context,value){
        state.sum -= value
    },
    odd(context,value){
        state.sum += value
    }
}
//准备state-存储数据
const state={
    sum:0,
    school:'b站',
    subject:'前端'
}
//准备getters-加工state中的数据
const getters={
    bigSum(state){
        return state.sum*10
    }
}

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})