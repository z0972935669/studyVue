<template>
  <h2>當前求和為: {{sum}}</h2>
  <button @click="sum++">點我+1</button>
</template>

<script>
import { ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted } from "vue";
export default {
  name: "Demo",
  setup() {
    console.log('---setup---');
    // 數據
    let sum = ref(0)

    // 通過組合式API的形式去使用生命周期鉤子
    onBeforeMount(()=>{
      console.log('---onBeforeMount---');
    })
    onMounted(()=>{
      console.log('---onMounted---');
    })
    onBeforeUpdate(()=>{
      console.log('---onBeforeUpdate---');
    })
    onUpdated(()=>{
      console.log('---onUpdated---');
    })
    onBeforeUnmount(()=>{
      console.log('---onBeforeUnmount---');
    })
    onUnmounted(()=>{
      console.log('---onUnmounted---');
    })
   
    // 返回一個對象(常用)
    return {
      sum,
    };
  },
  // 通過配置項的形式使用生命周期鉤子
  // #region
  // beforeCreate() {
  //   console.log('---beforeCreate---');
  // },
  // created() {
  //   console.log('---created---');
  // },
  // beforeMount() {
  //   console.log('---beforeMount---');
  // },
  // mounted() {
  //   console.log('---mounted---');
  // },
  // beforeUpdate() {
  //   console.log('---beforeUpdate---');
  // },
  // updated() {
  //   console.log('---updated---');
  // },
  // beforeUnmount() {
  //   console.log('---beforeUnmount---');
  // },
  // unmounted() {
  //   console.log('---unmounted---');
  // },
  // #endregion
};
</script>
