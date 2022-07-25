<template>
  <div>
    <h2>學生姓名: {{name}}</h2>
    <h2>學生性別: {{sex}}</h2>
    <input type="text" v-fbind:value="name">
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