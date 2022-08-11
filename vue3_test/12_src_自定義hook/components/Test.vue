<template>
    <h2>我是Test組件</h2>
    <h2>當前點擊時鼠標的坐標為:x: {{ point.x }}, y: {{ point.y }}</h2>
</template>

<script>
import userPoint from '../hooks/usePoint'
export default {
    name: 'Test',
    setup() {
        const point = userPoint()
        return {point}
    }
}
</script>