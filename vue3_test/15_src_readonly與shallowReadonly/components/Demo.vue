<template>
  <h4>當前求和為: {{sum}}</h4>
  <button @click="sum++">點我++</button>
  <hr>
  <h2>姓名: {{name}}</h2>
  <h2>年齡: {{age}}</h2>
  <h2>薪資: {{job.j1.salary}}K</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增長年齡</button>
  <button @click="job.j1.salary++">漲薪</button>
</template>

<script>
import { ref,reactive,toRefs,readonly,shallowReadonly } from "vue";
export default {
  name: "Demo",

  setup() {
    // 數據
    let sum = ref(0)
    let person = reactive({
      name: '張三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

  // person = readonly(person)
  // person = shallowReadonly(person)
  // sum = readonly(sum)
  // sum = shallowReadonly(sum)

    // 返回一個對象(常用)
    return {
      sum,
      ...toRefs(person)
    };
  },
};
</script>
