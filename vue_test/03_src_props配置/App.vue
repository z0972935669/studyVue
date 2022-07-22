<template>
    <div>
        <Student name="小黑" sex="女" :age="18" />
        <Student name="小高" sex="男" :age="19" />
    </div>
</template>

<script>
// 引入Student組件
import Student from './components/Student'

export default {
    name: 'App',
    components:{Student},
}
</script>

<style>

</style>