// 該文件用於創建Vuex中最為核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 應用Vuex插件
Vue.use(Vuex)

// 求和功能相關的配置
const countOptions = {
    actions:{
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
    },
    mutations:{},
    state:{},
    getters:{},
}

// 人員管理相關的配置
const countOptions = {
    actions:{},
    mutations:{},
    state:{},
    getters:{},
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
    },
    ADD_PERSON(state,value) {
        console.log('mutations中的ADD_PERSON被調用了',state,value);
        state.personList.unshift(value)
    }
}
// 準備state-用於存儲數據
const state = {
    sum:0, //當前的和
    school:'台科大',
    subject:'前端',
    personList:[
        {id:'001',name:'張三'}
    ]
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