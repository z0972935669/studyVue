<template>
    <div>
        <button @click="isShow = !isShow">顯示/隱藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow" class="go">你好啊!</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>
    h1 {
        background: orange;
    }
    .hello-enter-active {
        animation: atguigu 0.5s linear;
    }
    .hello-leave-active {
        animation: atguigu 0.5s linear reverse;
    }

    @keyframes atguigu {
        from {
            transform: translateX(-100px);
        }
        to {
            transform: translateX(0);
        }
    }
</style>