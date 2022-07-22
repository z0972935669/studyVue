<template>
<!-- 組件的結構 -->
    <div class="demo">
        <h1>學校名稱, {{schoolName}}</h1>
        <h1>學校地址, {{address}}</h1>
        <button @click="showName">點我提示學校名</button>
    </div>
</template>

<script>
// 組件交互相關的代碼(數據、方法等等)
export default {
    name: 'School',
    data() {
        return {
            schoolName: '成大',
            address: '台北'
        }
    },
    methods: {
        showName() {
            alert(this.schoolName)
        }
    },
}
</script>

<style>
/* 組件的樣式 */
.demo {
    background: orange;
}
</style>