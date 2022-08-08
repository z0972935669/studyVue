<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // beforeDestroy() {
  //   console.log('About組件即將被銷毀了');
  // },
  // mounted() {
  //   console.log('About組件掛載完畢了',this);
  //   window.aboutRoute = this.$route
  //   window.aboutRouter = this.$router
  // },
  mounted() {
    // console.log("%%%", this.$route);
  },
  // 通過路由規則，進入該組件時被調用
  beforeRouteEnter(to, from, next) {
    console.log("About-beforeRouteEnter", to, from);
    if (to.meta.isAuth) {
      //判斷是否需要權限
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("學校名不對，無權限查看!");
      }
    } else {
      next();
    }
  },
  // 通過路由規則，離開該組件時被調用
  beforeRouteLeave (to, from, next) {
    console.log("About-beforeRouteLeave", to, from);
    next()
  }
};
</script>