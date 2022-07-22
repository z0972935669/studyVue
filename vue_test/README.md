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