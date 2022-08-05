<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳轉路由並攜帶query參數，to的字符串寫法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

        <!-- 跳轉路由並攜帶params參數，to的對象寫法 -->
        <!-- 如果使用params的話，只能使用name，不能使用path -->
        <router-link :to="{
          name:'xiangqing',
          query:{
            id:m.id,
            title:m.title
          }
        }">
          {{m.title}}
          </router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'}
      ]
    }
  },
};
</script>

<style>
</style>