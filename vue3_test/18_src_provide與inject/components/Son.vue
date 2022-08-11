<template>
  <div class="son">
    <h3>我是Son組件(孫),{{car.name}}--{{car.price}}</h3>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {
  name: 'Son',
  setup() {
    let car = inject('car')
    console.log(car, '****');
    return {car}
  }
}
</script>

<style>
.son {
  background: orange;
  padding: 10px;
}
</style>