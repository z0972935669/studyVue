<template>
  <h2>當前求和為: {{sum}}</h2>
  <button @click="sum++">點我+1</button>
  <hr>
  <h2>當前的信息為: {{msg}}</h2>
  <button @click="msg+='!'">修改信息</button>
  <hr>
  <h2>姓名: {{person.name}}</h2>
  <h2>年齡: {{person.age}}</h2>
  <h2>薪資: {{person.job.j1.salary}}K</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增長年齡</button>
  <button @click="person.job.j1.salary++">漲薪</button>
</template>

<script>
import { ref,reactive,watch,watchEffect } from "vue";
export default {
  name: "Demo",

  setup() {
    // 數據
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '張三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // 監視
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum的值變化了',newValue,oldValue);
    // },{immediate: true})

    watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.job.j1.salary
      console.log('watchEffect所指定的回調執行了');
    })

    // 返回一個對象(常用)
    return {
      sum,
      msg,
      person
    };
  },
};
</script>
