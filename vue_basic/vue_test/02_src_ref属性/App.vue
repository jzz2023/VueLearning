<template>
  <div>
    <h2 v-text="msg" ref="msg"></h2>
    <button ref="btn" @click="showDOM">点我输出上方DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from './components/School'
export default {
  name: "App",
  components:{
    School
  },
  data(){
    return{
      msg:'欢迎学习Vue'
    }
  },
  methods:{
    showDOM(){
    //  this是vc
      console.log(this.$refs.msg) //真实DOM
      console.log(this.$refs.btn) //真实DOM
      console.log(this.$refs.sch) //School组件的实例对象
    }
  }
}
</script>

<style scoped>

</style>