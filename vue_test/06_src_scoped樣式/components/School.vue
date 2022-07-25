<template>
  <div class="demo">
    <h2>學校名稱: {{name}}</h2>
    <h2>學校地址: {{address}}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '春天',
            address: '台北'
        }
    },
}
</script>

<style scoped>
  .demo {
    background: skyblue;
  }
</style>