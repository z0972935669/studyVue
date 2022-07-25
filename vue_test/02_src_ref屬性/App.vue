<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">點我輸出上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
// 引入School組件
import School from './components/School'

export default {
    name: 'App',
    components:{School},
    data() {
        return {
            msg: '歡迎學習Vue!'
        }
    },
    methods: {
        showDOM() {
            console.log(this.$refs.title); //真實DOM元素
            console.log(this.$refs.btn); //真實DOM元素
            console.log(this.$refs.sch); //School組件的實例對象 (vc)
            
        }
    }
}
</script>

<style>

</style>