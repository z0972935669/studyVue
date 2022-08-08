## 建立express server
1. npm init
2. 建檔名
3. enter到底
4. npm i express
5. node server

## 建立server.js
```js
const express = require('express')

const app = express()
app.use(express.static(__dirname+'/static'))

app.get('/person',(req,res)=>{
    res.send({
        name:'tom',
        age:18
    })
})

app.listen(5005,(err)=>{
    if(!err) console.log('服務器啟動成功了!');
})
```

## 建立static靜態資料夾
1. 把靜態頁面塞進去

## 解決404問題
1. npm
2. 搜尋connect-history-api-fallback
3. npm i connect-history-api-fallback
4. server.js

```js
const express = require('express')
const history = require('connect-history-api-fallback'); //引入

const app = express()
app.use(history()) //引入
app.use(express.static(__dirname+'/static'))

app.get('/person',(req,res)=>{
    res.send({
        name:'tom',
        age:18
    })
})

app.listen(5005,(err)=>{
    if(!err) console.log('服務器啟動成功了!');
})
```