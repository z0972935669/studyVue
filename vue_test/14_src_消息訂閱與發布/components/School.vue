<template>
  <div class="school">
    <h2>學校名稱: {{name}}</h2>
    <h2>學校地址: {{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data() {
        return {
            name: '春天',
            address: '台北'
        }
    },
    methods: {
      demo(msgName,data) {
        console.log('有人發布了hello消息，hello消息的回調執行了', msgName,data);
      }
    },
    mounted() {
      console.log('School', this.$bus);
      // this.$bus.$on('hello', (data)=>{
      //   console.log('我是School組件，收到了數據', data);
      // })
      // 方法1
      // this.pubId = pubsub.subscribe('hello', (msgName,data) => {
      //   console.log(this);
      //   console.log('有人發布了hello消息，hello消息的回調執行了', msgName,data);
      // })
      // 方法2
      this.pubId = pubsub.subscribe('hello', this.demo);
    },
    dataeforeDestroy() {
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
  .school {
    background: skyblue;
    padding: 5px;
  }
</style>