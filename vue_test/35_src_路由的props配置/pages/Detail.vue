<template>
  <ul>
    <li>消息編號:{{id}}</li>
    <li>消息標題:{{title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail',
    props:['id','title'],
    computed: {
      // id(){
      //   return this.$route.query.id
      // },
      // title(){
      //   return this.$route.query.title
      // },
    },
    mounted() {
        // console.log(this.$route);
    }
}
</script>

<style>

</style>