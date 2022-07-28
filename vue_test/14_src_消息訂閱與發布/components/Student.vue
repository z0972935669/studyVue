<template>
  <div class="student">
    <h2>學生姓名: {{ name }}</h2>
    <h2>學生性別: {{ sex }}</h2>
    <button @click="sendStudentName">把學生名給School組件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    return {
      name: "小李",
      sex: "男",
    };
  },
  mounted() {
    // console.log('Student', this.x);
  },
  methods: {
    sendStudentName() {
      // this.$bus.$emit('hello', this.name)
      pubsub.publish('hello', 666)
    }
  },
};
</script>

<style lang="scss" scoped>
.student {
  background: orange;
  padding: 5px;
  margin-top: 30px;
}
</style>