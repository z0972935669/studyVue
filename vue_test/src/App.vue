<template>
  <div>
    <button @click="getStudents">獲取學生信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get('http://localhost:8080/students').then(
        response => {
          console.log('請求成功了', response.data);
        },
        error => {
          console.log('請求失敗了', error.message);
        }
      )
    }
  },
};
</script>