<template>
  <div>
    <div class="row">
      <!-- <About/> -->
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我們使用a標籤實現頁面的跳轉 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link標簽實現路由的切換 -->
          <router-link replace class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定組件的呈現位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner'
// import About from './pages/About'
export default {
  name: "App",
  components: {
    Banner,
    // About
  }
};
</script>