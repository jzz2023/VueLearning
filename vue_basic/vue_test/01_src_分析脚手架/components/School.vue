<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ schoolName }}</h2>
    <h2>学校地址：{{ addr }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
  // 组件交互的代码
  export default{
    name:'School',
    data(){
      return{
        schoolName:'石家庄铁道大学',
        addr:'河北省石家庄'
      }
    },
    methods: {
      showName(){
        alert(this.schoolName)
      }
    },
  }
</script>

<style scoped>
/* 组件的样式 */
.demo{
  background-color: plum;
}
</style>