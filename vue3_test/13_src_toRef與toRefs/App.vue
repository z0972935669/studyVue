<template>
  <button @click="isShowDemo = !isShowDemo">切換隱藏/顯示</button>
  <Demo v-if="isShowDemo"/>
</template>

<script>
import {ref} from 'vue'
import Demo from './components/Demo';
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let isShowDemo = ref(true)
    return {isShowDemo}
  }
};
</script>
