<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
  name: "App",
  setup() {
    //自定義的一個ref---名為:myRef
    function myRef(value,delay) {
      let timer
      return customRef((track,trigger)=>{
        return {
          get(){
            console.log(`有人從myRef這個容器中讀取數據了，我把${value}給它了`);
            track() //通知Vue追蹤value的變化(提前和get商量一下，讓他認為這個value是有用的)
            return value
          },
          set(newValue){
            console.log(`有人把myRef這個容器中的數據改為了:${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() //通知Vue去重新解析模板
            }, delay);
          },
        }
      })
    }
    // let keyWord = ref('hello') //使用Vue提供的ref
    let keyWord = myRef('hello',500) //使用程序員自定義的ref
    return {keyWord}
  }
};
</script>
