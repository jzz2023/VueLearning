<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  //通过路由规则，进入该组件时调用
  beforeRouteEnter(to,from,next){
    // to固定
    console.log('app -- beforeenter')
    if(to.meta.isAuth){ //判定是否需要权限
      if(localStorage.getItem('school') === 'atguigu'){
        next()
      }else {
        alert('学校名不对，无权查看')
      }
    }else {
      next()
    }
  },
  //通过路由规则，离开组件时调用
  beforeRouteLeave(to,from,next){
    //from固定
    next()
  }
}
</script>

<style scoped>

</style>