// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入ElementUI組件庫
// import ElementUI from 'element-ui';
// 引入ElementUI全部樣式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button,Row,DatePicker } from 'element-ui';

// 關閉Vue的生產提示
Vue.config.productionTip = false

// 應用ElementUI
// Vue.use(ElementUI);
Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker', DatePicker);

// 創建vm
new Vue({
    el: '#app',
    render: h => h(App),
})