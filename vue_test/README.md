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

## nanoid
    npm i nanoid