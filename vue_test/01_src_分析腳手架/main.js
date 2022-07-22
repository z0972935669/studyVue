// 該文件是整個項目的入口文件
// 引入Vue
import Vue from 'vue'
// 引入App組件，它是所有組件的父組件
import App from './App.vue'
// 關閉vue的生產提示
Vue.config.productionTip = false

/**
 * 開於不同版本的Vue
 * 1、vue.js與vue.runtime.xxx.js的區別
 * (1)、vue.js是完整版的Vue，包含: 核心功能+模板解析器
 * (2)、vue.runtime.xxx.js是運動版的Vue，只包含: 核心功能: 沒有模板解析器
 * 
 * 2、因為vue.runtime.xxx.js沒有模板解析器，所以不能使用template配置項，需要使用render函數接收到的createElement函數去指定具體內容
 */

// 創建Vue實例對象--vm
new Vue({
  el: '#app',
  // 將App組件放入容器中
  render: h => h(App),
  // render由來
  // render(createElement) {
  //   return createElement('h1', '你好啊')
  // },
  // es6 縮寫
  // render: q => q('h1', '你好啊'),
  // template: `<App></App>`,
  // components: {App},
})
