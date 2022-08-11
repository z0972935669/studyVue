// 引入的不再是Vue構造函數了，引入的是一個名為createApp的工廠函數
import { createApp } from 'vue'
import App from './App.vue'

// 創建應用實例對象 - app (類似於之前Vue2中的vm，但app比vm更"輕")
const app = createApp(App)

// 掛載
app.mount('#app')