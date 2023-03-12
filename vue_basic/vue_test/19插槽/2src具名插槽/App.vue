<template>
  <div class="container">
    <category title="美食">
      <img slot="center" src="https://img.wxcha.com/m00/41/f5/223b0737fb0f37dad5eec8a2887e03fb.jpg?down">
      <a slot="footer" href="https://www.baidu.com">前往百度</a>
    </category>
    <category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) of games" :key="index">
          {{g}}
        </li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://www.baidu.com">单机游戏</a>
        <a href="https://www.baidu.com">网络游戏</a>
      </div>
    </category>
    <category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template slot="footer">
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎来到电影院</h4>
      </template>
    </category>
  </div>

</template>

<script>
import category from "@/components/Count";

export default {
  name: "App",
  components: {category},
  data(){
    return{
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《肖申克的救赎》']
    }
  }
}
</script>

<style>
.container,.foot{
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>