<template>
  <div class="school">
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
    mounted() {
      console.log('School', this.$bus);
      this.$bus.$on('hello', (data)=>{
        console.log('我是School組件，收到了數據', data);
      })
    },
    beforeDestroy() {
      this.$bus.$off('hello')
    }
}
</script>

<style scoped>
  .school {
    background: skyblue;
    padding: 5px;
  }
</style>