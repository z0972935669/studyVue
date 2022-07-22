// 該文件是整個項目的入口文件
// 引入Vue
import Vue from 'vue'
// 引入App組件，它是所有組件的父組件
import App from './App.vue'
// 關閉vue的生產提示
Vue.config.productionTip = false

// 創建Vue實例對象--vm
new Vue({
  el: '#app',
  // 將App組件放入容器中
  render: h => h(App),
})
