<template>
  <div class="category">
    <h3>{{ title }}分類</h3>
    <!-- 定義一個插槽 (挖坑，等著組件的使用者進行填充) -->
    <slot :games="games" msg="hello">我是默認的一些內容</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["紅色警戒", "穿越火線", "勁舞團", "泡泡龍"],
    };
  },
};
</script>

<style>
.category {
  background: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background: orange;
}
</style>