<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>學生姓名: {{name}}</h2>
    <h2>學生性別: {{sex}}</h2>
    <h2>學生年齡: {{myAge + 1}}</h2>
    <button @click="updateAge">嘗試修改收到的年齡</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        console.log(this);
        return {
            msg: '我是一個老K的學生',
            myAge: this.age
        }
    },
    methods: {
        updateAge() {
            this.myAge++
        }
    },
    // 簡單聲明接收
    // props: ['name','sex','age'] 
    // 接收的同時對數據進型類型限制
    // props: {
    //     name: String,
    //     age: Number,
    //     sex: String
    // }
    // 接收的同時對數據進行類型限制+默認值的指定+必要性的限制
    props: {
        name: {
            type: String, //name的類型是字符串
            required: true //name是必要的
        },
        age: {
            type: Number,
            default: 99 //默認值
        },
        sex: {
            type: String, //sex的類型是字符串
            required: true //sex是必要的
        }
    }
}
</script>