<template>
  <div class="app">
    <h3>我是App組件</h3>
  </div>
</template>

<script>
import {ref,reactive,toRefs,readonly,isRef,isReactive,isReadonly,isProxy} from 'vue'

export default {
  name: 'App',
  setup() {
    let car = reactive({
      name: 'BMW',
      price: '40W'
    })
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(sum));

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