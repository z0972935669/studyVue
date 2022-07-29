<template>
  <div>
    <button @click="getStudents">獲取學生信息</button>
    <button @click="getCars">獲取汽車信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get('http://localhost:8080/api/students').then(
        response => {
          console.log('請求成功了', response.data);
        },
        error => {
          console.log('請求失敗了', error.message);
        }
      )
    },
    getCars() {
      axios.get('http://localhost:8080/demo/cars').then(
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