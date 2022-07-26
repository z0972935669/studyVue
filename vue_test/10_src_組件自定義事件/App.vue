<template>
    <div class="app">
        <h1>{{msg}}.學生姓名是: {{studentName}}</h1>
        <!-- 通過父組件給子組件傳遞函數類型props實現: 子給父傳遞數據 -->
        <School :getSchoolName="getSchoolName"/>
        <!-- 通過父組件給子組件綁定一個自定義事件實現: 子給父傳遞數據 (第一種寫法，使用@或v-on) -->
        <Student v-on:atguigu="getStudentName" @demo="m1"/>
        <!-- 通過父組件給子組件綁定一個自定義事件實現: 子給父傳遞數據 (第二種寫法，使用ref) -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    components:{School, Student},
    data() {
        return {
            msg: '你好啊!',
            studentName: ''
        }
    },
    methods: {
        getSchoolName(name) {
            console.log('App收到了學校名', name);
        },
        getStudentName(name, ...params) {
            console.log('App收到了學生名!', name, params);
            this.studentName = name
        },
        m1() {
            console.log('demo事件被觸發了');
        },
        show() {
            alert(123)
        }
    },
    mounted() {
        this.$refs.student.$on('atguigu', this.getStudentName) // 綁定自定義事件
        // this.$refs.student.$once('atguigu', this.getStudentName) // 綁定自定義事件 (一次性)
    }
}
</script>

<style scoped>
    .app {
        background: gray;
        padding: 5px;
    }
</style>