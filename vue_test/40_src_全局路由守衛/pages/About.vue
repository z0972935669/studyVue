<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: 'About',
    // beforeDestroy() {
    //   console.log('About組件即將被銷毀了');
    // },
    // mounted() {
    //   console.log('About組件掛載完畢了',this);
    //   window.aboutRoute = this.$route
    //   window.aboutRouter = this.$router
    // },
    mounted() {
      console.log('%%%',this.$route);
    }
}
</script>