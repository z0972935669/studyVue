<template>
  <div>
    <button @click="isShow = true">點我彈個窗</button>
    <!-- to:可以寫html元素，html,body等等都可以... -->
    <teleport to="body">
        <div v-if="isShow" class="mask">
            <div class="dialog">
                <h3>我是一個彈窗</h3>
                <h4>一些內容</h4>
                <h4>一些內容</h4>
                <h4>一些內容</h4>
                <button @click="isShow = false">關閉彈窗</button>
            </div>
        </div>
    </teleport>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'Dialog',
    setup() {
        let isShow = ref(false)
        return {
            isShow
        }
    }
}
</script>

<style>
.mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
}
.dialog{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: green;
}
</style>