# 筆記

## Vue腳手架隱藏了所有webpack相關的配置，若想查看具體的webpack配置，請執行
## vue inspect > output.js

## 腳手架文件結構:
    |-  node_modules
    |-  public
    |   |-  favicon.ico: 頁籤圖標
    |   |-  index.html: 主頁面
    |-  src
    |   |-  assets: 存放靜態資源
    |   |   |-  logo.png
    |   |-  component: 存放組件
    |   |   |-  HelloWorld.vue
    |   |-  App.vue: 匯總所有組件
    |   |-  main.js: 入口文件
    |- .gitignore: git版本管制忽略的配置
    |-  babel.config.js: babel的配置文件
    |-  package.json: 應用包配置文件
    |-  README.md: 應用描述文件
    |-  package-look.json: 包版本控制文件

## 關於不同版本的Vue
- vue.js與vue.runtime.xxx.js的區別:
    (1)、vue.js是完整版的Vue，包含: 核心功能+模板解析器
    (2)、vue.runtime.xxx.js是運行版的Vue，只包含: 核心功能: 沒有模板解析器
- 因為vue.runtime.xxx.js沒有模板解析器，所以不能使用template配置項，需要使用render函數接收到的createElement函數去指定具體內容

## vue.config.js配置文件
> 使用vue inspect > output.js 可以查看到Vue腳手架的默認配置
> 使用vue.config.js 可以對腳手架進行個性化定制，詳情見: https://cli.vuejs.org/zh

## ref屬性
    1、被用來給元素或子組件註冊引用信息(id的替代者)
    2、應用在html標籤上獲取的是真實DOM元素，應用在組件標籤上是組件實例對象(vc)
    3、使用方式:
        打標識: <h1 ref="xxx">.....</h1>或<School ref="xxx"></School>
        獲取: this.$refs.xxx

## 配置項props
    功能: 讓組件接收外部傳過來的數據
    (1)、傳遞數據:
        <Demo name="xxx"/>
    (2)、接收數據:
        第一種方式(只接收):
        props:['name']

        第二種方式(限制類型):
        props: {
            name: String
        }

        第三種方式 (限制類型、限制必要性、指定默認值):
        props: {
            name: {
                type: String, //類型
                required: true, //必要性
                default: '老王' //默認值
            }
        }
    備註:props是只讀的，Vue底層會監測你對props的修改，如果進行了修改，就會發出警告
        若業務需求確實需要修改，那麼請複制props的內容到data中一份，然後去修改data中
        的數據

## mixin(混入)
    功能: 可以把多個組件共用的配置提取成一個混入對象
    使用方式:
        第一步定義混合，例如:
        {
            data(){.....},
            methods:{....}
            .....
        }
        第二步使用混入，例如: 
            (1)、全局混入: Vue.mixin(xxx)
            (2)、局部混入: mixins:['xxx']

## 插件
    功能: 用於增強Vue
    本質: 包含install方法的一個對象，install的第一個參數是Vue，第二個以後的參數是插件使用者傳遞的數據
    定義插件:
    對象.install = function (Vue, options) {
        // 1. 添加全局過濾器
        Vue.filter(....)

        // 2. 添加全局指令
        Vue.directive(....)

        // 3. 配置全局混入(合)
        Vue.mixin(....)

        // 4. 添加實例方法
        Vue.prototype.$myMethod = function () {....}
        Vue.prototype.$myProperty = xxxx
    }
    使用插件: Vue.use()

## scoped樣式
    作用: 讓樣式在局部生效，防止沖突
    寫法: <style scoped>
    - 查看webpack的版本有哪些
        npm view webpack versions
        npm view sass-loader versions
    - 安裝sass-loader指定版本
        npm i sass-loader@7

## 總結TodoList案例
    - nanoid
        npm i nanoid
    1、組件化編碼流程:
        (1)、折分靜態組件: 組件要按照功能點拆分，命名不要與html元素沖突
        (2)、實現動態組件: 考慮好數據的存放位置，數據是一個組件在用，還是一些組件在用:
            1)、一個組件在用: 放在組件自身即可
            2)、一些組件在用: 放在他們共同的父組件上(<span style="color: red">狀態提升</span>)
        (3)、實現交互: 從綁定事件開始

    2、props適用於: 
        (1)、父組件 => 子組件 通信
        (2)、子組件 => 父組件 通信 (要求父先給子一個函數)

    3、使用v-model時要切記: v-model綁定的值不能是props傳過來的值，因為props是不可以修改的!

    4、props傳過來的若是對象類型的值，修改對象中的屬性時Vue不會報錯，但不推薦這樣做

## webStorage
    1、存儲內容大小一般支持5MB左右 (不同瀏覽器可能還不一樣)

    2、瀏覽器端通過 Window.sessionStorage 和 Window.localStorage 屬性來實現本地存儲機制

    3、相關API:

        1、xxxxxStorage.setItem('key', 'value');

            該方法接受一個鍵和值作為參數，會把鍵值對添加的存儲中，如果鍵名存在，則更新其對應的值

        2、xxxxxStorage.getItem('person');

            該方法接受一個鍵名作為參數，返回鍵名對應的值

        3、xxxxxStorage.removeItem('key');

            該方法接受一個鍵名作為參數，並把該鍵名從存儲中刪除

        4、xxxxxStorage.clear()

            該方法會清空存儲中的所有數據

    4、備註:

        1、SessionStorage存儲的內容會隨著瀏覽器窗口關閉而消失

        2、LocalStorage存儲的內容，需要手動清除才會消失

        3、xxxxxStorage.getIem(xxx)如果xxx對應的value獲取不到，那麼getItem的返回值是null

        4、JSON.parse(null)的結果依然是null

## 組件的自定義事件
    1、一種組件間通信的方式，適用於: 子組件 => 父組件

    2、使用場景: A是父組件，B是子組件，B想給A傳數據，那麼就要在A中給B綁定自定義事件(事件的回調在A中)

    3、綁定自定義事件:

        1、第一種方式，在父組件中: <Demo @atguigu="test"> 或 <Demo v-on:atguigu="test">

        2、第二種方式，在父組件中:

            <Demo ref="demo"/>
            .....
            mounted() {
                this.$refs.xxx.$on('atguigu', this.test)
            }

        3、若想讓自定義事件只能觸發一次，可以使用once修飾符，或$once方法

    4、觸發自定義事件: this.$emit('atguigu', 數據)

    5、解綁自定義事件: this.$off('atguigu')

    6、組件上也可以綁定原生DOM事件，需要使用native修飾符

    7、注意: 通過this.$refs.xxx.$on('atguigu'，回調) 綁定自定義事件時，回調要麼配置在methods中，要麼用箭頭函數，否則this指向會出問題

## 全局事件總線 (GlobalEventBus)
    1、一種組件間通信的方式，適用於任意組間通信

    2、安裝全局事件總線:
        new Vue({
            ......
            beforeCreate() {
                Vue.prototype.$bus = this // 安裝全局事件總線，$bus就是當前應用的vm
            },
            .....
        })

    3、使用事件總線:
        1、接收數據，A組件想接收數據，則在A組件中給$bus綁定自定義事件，事件的回調留在A組件自身
            methods() {
                demo(data){.....}
            }
            ......
            mounted() {
                this.$bus.$on('xxxx', this.demo)
            }
        
        2、提供數據: this.$bus.$emit('xxxx',數據)

    4、最好在beforeDestroy鉤子中，用$off去解綁當前組件所用到的事件

## 消息定閱與發布
    - pubsub-js
        npm i pubsub-js

    1、一種組件間通信的方式，適用於任意組件間通信

    2、使用步驟:
    
        1、安裝pubsub: npm i pubsub-js

        2、引入: import pubsub from 'pubsub-js'

        3、接收數據: A組件想接收數據，則在A組件中訂閱消息，訂閱的回調留在A組件自身

            methods() {
                demo(data){.....}
            }
            .....
            mounted() {
                this.pid = pubsub.subscribe('xxx', this.demo) //訂閱消息
            }

        4、提供數據: pubsub.publish('xxx', this.demo)

        5、最好在beforeDestroy鉤子中，用pubsub.unsubscribe(pid)去<span style="color: red">取消訂閱</span>

## Vue封裝的過度與動畫
    1、作用: 在插入、更新或移除DOM元素時，在合適的時候給元素添加樣式類名

    2、圖表(參考過渡的類名圖片): https://cn.vuejs.org/v2/guide/transitions.html

    3、寫法
        1、準備好樣式: 
            ．元素進入的樣式:
                1、v-enter: 進入的起點
                2、v-enter-active: 進入過程中
                3、v-enter-to: 進入的終點
            ．元素離開的樣式:
                1、v-leave: 離開的起點
                2、v-leave-active: 離開過程中
                3、v-leave-to: 離開的終點

        2、使用<transition>包裏要過渡的元素，並配置name屬性:
            <transition name="hello">
                <h1 v-show="isShow">你好啊!</h1>
            </transition>
        3、備註: 若有多個元素需要過度，則需要使用: <transition-group>，且每個元素都要指定key值

## Vue腳手架配置代理

### 方法一
    在Vue.config.js中添加如下配置:

    devServer: {
        proxy: 'http://localhost:5000'
    }

    說明:

        1、優點: 配置簡單，請求資源時直接發給前端(8080)即可
        2、缺點: 不能配置多個代理，不能靈活的控制請求是否走代理
        3、工作方式: 若按照上述配置代理，當請求了前端不存在的資源時，那麼該請求會轉發給服務器(優先匹配前端資源)

### 方法二
    編寫vue.config.js配置具體代理規則:

    module.exports = {
        devServer: {
        proxy: {
        '/api1': {// 匹配所有以 '/api1'開頭的請求路徑
            target: 'http://localhost:5000',// 代理目標的基礎路徑
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
        },
        '/api2': {// 匹配所有以 '/api2'開頭的請求路徑
            target: 'http://localhost:5001',// 代理目標的基礎路徑
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        }
        }
    }
    }
    /*
    changeOrigin設置為true時，服務器收到的請求頭中的host為：localhost:5000
    changeOrigin設置為false時，服務器收到的請求中的host為：localhost:8080
    changeOrigin默認值為true
    */

    說明:
        1、優點: 可以配置夕個代理，且可以靈活的控制請求是否走代理
        2、缺點: 配置略微繁鎖，請求資源時必須加前綴