<template>
  <div class="category">
    <h3>{{title}}分类</h3>
<!--    定义一个插槽，等着组件使用者填充-->
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "category",
  props:['listData','title'],
  data(){
    return{
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
    }
  }

}
</script>

<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: #da4f49;
  }
  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
</style>