// 該文件用於創建Vuex中最為核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 應用Vuex插件
Vue.use(Vuex)

// 準備actions-用於響應組件中的動作
const actions = {
    // jia(context,value) {
    //     // console.log('actions中的jia被調用了',context,value);
    //     context.commit('JIA',value)
    // },
    // jian(context,value) {
    //     // console.log('actions中的jian被調用了',context,value);
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value) {
        // console.log('actions中的jiaOdd被調用了',context,value);
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value) {
        // console.log('actions中的jiaWait被調用了',context,value);
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    }
}
// 準備mutations-用於操作數據(state)
const mutations = {
    JIA(state,value) {
        console.log('mutations中的JIA被調用了',state,value);
        state.sum += value
    },
    JIAN(state,value) {
        console.log('mutations中的JIAN被調用了',state,value);
        state.sum -= value
    }
}
// 準備state-用於存儲數據
const state = {
    sum:0, //當前的和
    school:'台科大',
    subject:'前端',
}
// 準備getters-用於state中的數據進行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 創建並導出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})