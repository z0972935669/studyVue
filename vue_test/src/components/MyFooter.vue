<template>
  <div class="todo-footer" v-if="total">
    <label for="">
      <!-- 方法1 -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- 方法2 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任務</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "clearAllTodo"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // 方法1
      // let i = 0;
      // this.todos.forEach(todo => {
      //     if (todo.done) i++
      // });
      // return i

      // 方法2
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    // 方法2
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(checked) {
        this.checkAllTodo(checked);
      },
    },
    // 方法1
    // isAll() {
    //     return this.doneTotal === this.total && this.total > 0
    // }
  },
  methods: {
    // 方法1
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked);
    // },
    clearAll() {
      this.clearAllTodo()
    }
  },
};
</script>

<style scoped>
/* footer */
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>