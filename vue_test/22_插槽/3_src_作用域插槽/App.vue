<template>
  <div class="container">
    <Category title="遊戲">
      <template scope="atguigu">
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="遊戲">
      <template scope="{games}">
        <ol>
          <li style="color:red" v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ol>
        <!-- <h4>{{atguigu.msg}}</h4> -->
      </template>
    </Category>
    <Category title="遊戲">
      <template slot-scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
iframe {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>