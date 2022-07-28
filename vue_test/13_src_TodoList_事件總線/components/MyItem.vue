<template>
  <li>
    <label for="">
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代碼也能實現功能，但是不太推薦，因為有點違反原則，因為修改了props -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">刪除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 聲明接收todo對象
  props: ["todo"],
  methods: {
    // 勾選or取消勾選
    handleCheck(id) {
      // 通知App組件將對應的todo對象的done值取反
      // this.checkTodo(id);
      this.$bus.$emit('checkTodo', id)
    },
    // 刪除
    handleDelete(id) {
      if (confirm("確定刪除嗎")) {
        // this.deleteTodo(id)
        this.$bus.$emit('deleteTodo', id)
      }
    },
  },
};
</script>

<style scoped>
/* item */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}
</style>