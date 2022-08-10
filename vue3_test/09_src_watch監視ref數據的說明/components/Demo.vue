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
import { ref,reactive,watch } from "vue";
export default {
  name: "Demo",

  setup() {
    // 數據
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = ref({
      name: '張三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    console.log(person);
    // sum沒有點value的原因是因為let sum = ref(0)存的是基本的值
    watch(sum,(newValue,oldValue)=>{
      console.log('sum的值變化了',newValue,oldValue);
    })

    watch(person,(newValue,oldValue)=>{
      console.log('person的值變化了',newValue,oldValue);
    },{deep:true})

    // 返回一個對象(常用)
    return {
      sum,
      msg,
      person
    };
  },
};
</script>
