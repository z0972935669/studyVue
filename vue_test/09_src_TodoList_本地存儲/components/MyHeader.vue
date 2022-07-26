<template>
  <div class="todo-header">
    <input type="text" placeholder="請輸入你的任務名稱，按回車鍵確認" v-model="title" @keyup.enter="add" />
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: "MyHeader",
  props: ['addTodo'],
  data() {
    return {
        title: ''
    }
  },
  methods: {
    add() {
        // console.log(e.target.value);
        // console.log(this.title);

        // 校驗數據
        if(!this.title.trim()) return alert('輸入不得為空值')
        // 將用戶的輸入包裝成一個todo對象
        const todoObj = {id:nanoid(), title: this.title, done: false}
        // 通知App組件去添加一個todo對象
        this.addTodo(todoObj)
        // 清空輸入
        this.title = ''
    }
  },
};
</script>

<style scoped>
/* header */
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>