<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="t" appear>
      <h1 v-show="isShow" key="1">你好</h1>
      <h1 v-show="isShow" key="2">你好</h1>
    </transition-group>
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
    transition: 1s linear;
  }

/*  进入的起点,离开的终点*/
  .t-enter,.t-leave-to{
    transform: translateX(-100%);
  }

/*  进入的终点，离开的起点*/
  .t-enter-to,.t-leave{
    transform: translateX(0);
  }


</style>