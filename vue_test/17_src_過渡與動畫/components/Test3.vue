<template>
  <div>
    <button @click="isShow = !isShow">顯示/隱藏</button>
    <transition-group
        appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">你好啊!</h1>
      <h1 v-show="isShow" key="2">打遊戲!</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: orange;
}
/* 進入的起點、離開的終點 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 進入的終點、離開的起點 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>