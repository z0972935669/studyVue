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
    let person = reactive({
      name: '張三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // 情況一: 監視ref所定義的響應式數據
    // watch(sum,(newValue,oldValue) => {
    //   console.log('sum變了',newValue,oldValue);
    // },{immediate: true,deep: true})

    // 情況二: 監視ref所定義的多個響應式數據
    // watch([sum,msg],(newValue,oldValue) => {
    //   console.log('sum或msg變了',newValue,oldValue);
    // },{immediate: true})

    // 情況三: 監視reactive所定義的一個響應式數據,
    // 1.注意:此處無法正確的獲取oldValue
    // 2.注意:強制開啟了深度監視(deep配置無效)
    // watch(person.value,(newValue,oldValue)=>{
    //   console.log('person變化了',newValue,oldValue);
    // },{deep:false}) // 此處的deep配置無效

    // 情況四: 監視reactive所定義的一個響應式數據中的某個屬性
    // watch(()=>person.name,(newValue,oldValue)=>{
    //   console.log('person的name變化了',newValue,oldValue);
    // })

    // 情況五: 監視reactive所定義的一個響應式數據中的某些屬性
    // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
    //   console.log('person的name或age變化了',newValue,oldValue);
    // })

    // 特殊情況
    // watch(()=>person.job,(newValue,oldValue)=>{
    //   console.log('person的job變化了',newValue,oldValue);
    // },{deep:true}) // 此處由於監視的是reactive定義的對象中的某個屬性，所以deep配置有效

    // 返回一個對象(常用)
    return {
      sum,
      msg,
      person
    };
  },
};
</script>
