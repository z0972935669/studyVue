<template>
  <div class="school">
    <h2>學校名稱: {{name}}</h2>
    <h2>學校地址: {{address}}</h2>
    <button @click="sendSchoolName">把學校名給App</button>
  </div>
</template>

<script>
export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
        return {
            name: '春天',
            address: '台北'
        }
    },
    methods: {
      sendSchoolName() {
        this.getSchoolName(this.name)
      }
    },
}
</script>

<style scoped>
  .school {
    background: skyblue;
    padding: 5px;
  }
</style>