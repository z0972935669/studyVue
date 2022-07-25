<template>
  <div class="demo">
    <h2>學生姓名: {{name}}</h2>
    <h2 class="qwe">學生性別: {{sex}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '小李',
            sex: '男'
        }
    },
}
</script>

<style lang="scss" scoped>
  .demo {
    background: orange;
    .qwe {
      font-size: 40px;
    }
  }
</style>