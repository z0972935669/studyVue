<template>
  <div class="container">
    <Category title="美食">
      <img
        src="https://obs.line-scdn.net/0hQJEUlGiyDmV4LCQdM0dxMkJ6DQpLQB1mHBpfZjtCUFEHHB42Q0gTC1t8UVRXFUk7Fh9FClslFVRdGBo0EUkT/w1200"
        alt=""
      />
    </Category>
    <Category title="遊戲">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category title="電影">
      <iframe
        src="https://www.youtube.com/embed/xv8SMDHLVxo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
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
.container {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
iframe {
  width: 100%;
}
</style>