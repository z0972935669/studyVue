<template>
<!-- 組件的結構 -->
    <div>
        <h1>學校姓名, {{name}}</h1>
        <h1>學校年齡, {{age}}</h1>
    </div>
</template>

<script>
// 組件交互相關的代碼(數據、方法等等)
export default {
    name: 'Student',
    data() {
        return {
            name: 'Allen',
            age: 28
        }
    }
}
</script>