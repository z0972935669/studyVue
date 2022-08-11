<template>
  <h4>當前求和為: {{sum}}</h4>
  <button @click="sum++">點我++</button>
  <hr>
  <h2>姓名: {{name}}</h2>
  <h2>年齡: {{age}}</h2>
  <h2>薪資: {{job.j1.salary}}K</h2>
  <h3 v-show="person.car">座駕信息: {{person.car}}</h3>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增長年齡</button>
  <button @click="job.j1.salary++">漲薪</button>
  <button @click="showRawPerson">輸出最原始的person</button>
  <button @click="addCar">給人添加一台車</button>
  <button @click="person.car.name+='!'">換車名</button>
  <button @click="changePrice">換價格</button>
</template>

<script>
import { ref,reactive,toRefs,toRaw,markRaw } from "vue";
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

    function showRawPerson(){
      const p = toRaw(person)
      p.age++
      console.log(p);
    }

    function addCar(){
      let car = {name:'BMW', price:40}
      person.car = markRaw(car)
    }

    function changePrice() {
      person.car.price++
      console.log(person.car.price);
    }

    // 返回一個對象(常用)
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice
    };
  },
};
</script>
