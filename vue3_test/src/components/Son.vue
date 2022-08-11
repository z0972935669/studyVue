<template>
  <div class="son">
    <h3>我是Son組件</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
  name: 'Son',
  components:{Dialog}
}
</script>

<style>
.son {
  background: orange;
  padding: 10px;
}
</style>