<template>
  <div>
    <h2 @click="showName">學校名稱: {{name}}</h2>
    <h2>學校地址: {{address}}</h2>
  </div>
</template>

<script>
// 引入一個mixin
// import {hunhe,hunhe2} from '../mixin'

export default {
    name: 'School',
    data() {
        return {
            name: '春天',
            address: '台北'
        }
    },
    // mixins: [hunhe, hunhe2]
}
</script>