// 該文件用於創建Vuex中最為核心的store

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 應用Vuex插件
Vue.use(Vuex)

// 創建並導出store
export default new Vuex.Store({
    modules: {
        countAbout:countOptions,
        personAbout:personOptions
    }
})