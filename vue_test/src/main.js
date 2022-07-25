// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
import {hunhe,hunhe2} from './mixin'
// 關閉Vue的生產提示
Vue.config.productionTip = false
Vue.mixin(hunhe)
Vue.mixin(hunhe2)

// 創建vm
new Vue({
    el: '#app',
    render: h => h(App)
})