<template>
  <div class="app">
    <h3>我是App組件(祖),{{name}}---{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import {reactive,toRefs,provide} from 'vue'
import Child from './components/Child'

export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    let car = reactive({
      name: 'BMW',
      price: '40W'
    })
    provide('car', car) //給自己的後代組件傳遞數據
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>