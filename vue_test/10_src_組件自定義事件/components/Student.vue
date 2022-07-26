<template>
  <div class="student">
    <h2>學生姓名: {{name}}</h2>
    <h2>學生性別: {{sex}}</h2>
    <h2>當前求和為: {{number}}</h2>
    <button @click="add">點我number++</button>
    <button @click="sendStudentName">把學生名給App</button>
    <button @click="unbind">解綁atguigu事件</button>
    <button @click="death">銷毀當前Student組件的實例(vc)</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '小李',
            sex: '男',
            number: 0
        }
    },
    methods: {
      add() {
        console.log('add回調被調用了');
        this.number++
      },
      sendStudentName() {
        // 觸發Student組件實例身上的atguigu事件
        this.$emit('atguigu', this.name, 666, 888, 999)
        // this.$emit('demo')
        this.$emit('click')
      },
      unbind() {
        this.$off('atguigu') // 解綁一個自定義事件
        // this.$off(['atguigu', 'demo']) // 解綁多個自定義事件
        // this.$off() // 解綁所有自定義事件
      },
      death() {
        this.$destroy() //銷毀當前Student組件的實例(vc)，銷毀後所有Student實例的自定義事件全都不奏效
      }
    },
}
</script>

<style lang="scss" scoped>
  .student {
    background: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>