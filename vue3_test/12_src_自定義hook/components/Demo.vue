<template>
  <h2>當前求和為: {{ sum }}</h2>
  <button @click="sum++">點我+1</button>
  <hr />
  <h2>當前點擊時鼠標的坐標為:x: {{ point.x }}, y: {{ point.y }}</h2>
</template>

<script>
import { ref } from "vue";
import userPoint from '../hooks/usePoint'
export default {
  name: "Demo",
  setup() {
    // 數據
    let sum = ref(0);
    let point = userPoint()

    // 返回一個對象(常用)
    return {
      sum,
      point,
    };
  },
};
</script>
