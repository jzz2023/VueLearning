<template>
  <div class="category">
    <h3>{{title}}分类</h3>
<!--    定义一个插槽，等着组件使用者填充-->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "category",
  props:['listData','title']
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
</style>