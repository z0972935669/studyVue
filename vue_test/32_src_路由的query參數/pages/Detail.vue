<template>
  <ul>
    <li>消息編號:{{$route.query.id}}</li>
    <li>消息標題:{{$route.query.title}}</li>
  </ul>
</template>

<script>
export default {
    name:'Detail',
    mounted() {
        console.log(this.$route);
    }
}
</script>

<style>

</style>