<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="t" appear>
      <h1 v-show="isShow">你好</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data(){
    return{
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: #da4f49;
  }

  .t-enter-active{
    animation: test 1s linear;
  }

  .t-leave-active{
    animation: test 1s linear reverse;
  }

  /*动画关键帧*/
  @keyframes test {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
</style>