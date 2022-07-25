<template>
  <div class="todo-footer">
    <label for="">
      <input type="checkbox" />
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger">清除已完成任務</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos'],
  computed: {
    doneTotal() {
        // 方法1
        // let i = 0;
        // this.todos.forEach(todo => {
        //     if (todo.done) i++
        // }); 
        // return i

        // 方法2
        return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0) ,0)
    }
  }
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