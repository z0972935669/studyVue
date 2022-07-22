<template>
  <div>
    <h2 @click="showName">學生姓名: {{name}}</h2>
    <h2>學生性別: {{sex}}</h2>
  </div>
</template>

<script>
// 引入一個mixin
// import {hunhe} from '../mixin'

export default {
    name: 'Student',
    data() {
        return {
            name: '小李',
            sex: '男'
        }
    },
    // mixins: [hunhe]
}
</script>