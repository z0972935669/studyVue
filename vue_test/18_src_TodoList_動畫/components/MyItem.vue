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
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">
      刪除
    </button>
    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todo)"
    >
      編輯
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  // 聲明接收todo對象
  props: ["todo"],
  methods: {
    // 勾選or取消勾選
    handleCheck(id) {
      // 通知App組件將對應的todo對象的done值取反
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 刪除
    handleDelete(id) {
      if (confirm("確定刪除嗎")) {
        // this.deleteTodo(id)
        // this.$bus.$emit('deleteTodo', id)
        pubsub.publish("deleteTodo", id);
      }
    },
    // 編輯
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        console.log("todo身上沒有isEdit");
        this.$set(todo, "isEdit", true);
      }
      // $nextTick
      // 作用: 在下一次DOM更新完後執行其指定的回調
      // 什麼時候用: 當改變數據後，要基於更新後的新DOM進行某些操作時，要在nextTick所指定的回調函數中執行
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦點回調(真正執行修改邏輯)
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("輸入不能為空!");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
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