<template>
  <h1>一個人的信息</h1>
  <h2>姓名: {{ person.name }}</h2>
  <h2>年齡: {{ person.age }}</h2>
  <h3>工作種類: {{ person.job.type }}</h3>
  <h3>工作薪水: {{ person.job.salary }}</h3>
  <h3>愛好: {{ person.hobby }}</h3>
  <h3>測試的數據c: {{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 數據
    let person = reactive({
      name: "張三",
      age: 18,
      job: {
        type: "前端工程師",
        salary: "30K",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ["抽煙", "喝酒", "睡覺"],
    });

    // 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 48;
      person.job.type = "UI設計師";
      person.job.salary = "60K";
      person.job.a.b.c = 999;
      person.hobby[0] = "學習";
      // console.log(job);
    }

    // 返回一個對象(常用)
    return {
      changeInfo,
      person,
    };
  },
};
</script>
