<template>
  <h1>一個人的信息</h1>
  <h2>姓名: {{name}}</h2>
  <h2>年齡: {{age}}</h2>
  <h2>性別: {{sex}}</h2>
  <h2>a的值是: {{a}}</h2>
  <button @click="sayHello">說話(Vue3所配置的-sayHello)</button>
  <br><br>
  <button @click="sayWelcome">說話(Vue2所配置的-sayWelcome)</button>
  <br><br>
  <button @click="test1">測試一下在Vue2的配置中去讀取Vue3中的數據、方法</button>
  <br><br>
  <button @click="test2">測試一下在Vue3的setup配置中去讀取Vue2中的數據、方法</button>
</template>

<script>
import {h} from 'vue'

export default {
  name: 'App',
  data() {
    return {
      sex: '男',
      a: 100
    }
  },
  methods: {
    sayWelcome() {
      alert('歡迎來到尚硅谷學習')
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
    }
  },
  // 此處只是測試一下setup,暫時不考慮響應式的問題
  setup() {
    // 數據
    let name = '張三'
    let age = 18
    let a = 200

    // 方法
    function sayHello(){
      alert(`我叫${name}，我${age}歲了，你好啊!`)
    }

    function test2() {
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sex);
      console.log(this.sayWelcome);
    }

    // 返回一個對象(常用) 
    return {
      name,
      age,
      sayHello,
      test2,
      a
    }

    // 返回一個函數(渲染函數)
    // return () => h('h1','尚硅谷')
  }
}
</script>
