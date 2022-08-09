<template>
  <h1>一個人的信息</h1>
  <h2 v-show="person.name">姓名: {{ person.name }}</h2>
  <h2>年齡: {{ person.age }}</h2>
  <button @click="test">測試觸發一下Demo組件的Hello事件</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["msg", "school"],
  emits:['hello'],
  setup(props, context) {
    // console.log('---setup---',props);
    // console.log('---setup---',context.attrs); //相當於Vue2中的$attrs
    // console.log("---setup---", context.emit); //觸發自定義事件的
    console.log("---setup---", context.slots); //插槽
    // 數據
    let person = reactive({
      name: "張三",
      age: 18,
    });

    // 方法
    function test() {
        context.emit('hello', 666)
    }

    // 返回一個對象(常用)
    return {
      person,
      test
    };
  },
};
</script>
