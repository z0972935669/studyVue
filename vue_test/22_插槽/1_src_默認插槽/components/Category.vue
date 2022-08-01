<template>
  <div class="category">
    <h3>{{ title }}分類</h3>
    <!-- 定義一個插槽 (挖坑，等著組件的使用者進行填充) -->
    <slot>我是一些默認值，當使用者沒有傳遞具體結構時，我會出現</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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