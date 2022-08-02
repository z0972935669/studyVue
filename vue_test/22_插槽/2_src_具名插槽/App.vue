<template>
  <div class="container">
    <Category title="美食">
      <img slot="center" 
        src="https://obs.line-scdn.net/0hQJEUlGiyDmV4LCQdM0dxMkJ6DQpLQB1mHBpfZjtCUFEHHB42Q0gTC1t8UVRXFUk7Fh9FClslFVRdGBo0EUkT/w1200"
        alt=""
      />
      <a slot="footer" href="www.google.com">更多美食</a>
    </Category>
    <Category title="遊戲">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="www.google.com">單機遊戲</a>
        <a href="www.google.com">網路遊戲</a>
      </div>
    </Category>
    <Category title="電影">
      <iframe 
        slot="center"
        src="https://www.youtube.com/embed/xv8SMDHLVxo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <template v-slot:footer>
        <div class="foot">
          <a href="www.google.com">經典</a>
          <a href="www.google.com">熱門</a>
          <a href="www.google.com">推薦</a>
        </div>
        <h4>歡迎前來觀看</h4>
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
  data() {
    return {
      food: ["火鍋", "燒烤", "小龍蝦", "牛排"],
      games: ["紅色警戒", "穿越火線", "勁舞團", "泡泡龍"],
      films: ["教父", "拆彈專家", "復仇者聯盟", "人生超機掰"],
    };
  },
};
</script>

<style scoped>
.container,.foot {
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