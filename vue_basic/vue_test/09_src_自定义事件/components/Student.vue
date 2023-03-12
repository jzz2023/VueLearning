<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑student事件</button>
    <button @click="death">销毁当前Student组件的实例（vc）</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return{
      name:'张三',
      sex:'男'
    }
  },
  methods:{
    sendStudentName(){
      // 触发Student身上的student事件
      this.$emit("student",this.name)
      // this.$emit("demo")
    },
    unbind(){
      // this.$off('student')//解绑一个事件
      this.$off(['student','demo'])//解绑多个事件
      this.$off() //解绑所有事件
    },
    death(){
      this.$destroy() //销毁了当前Student组件实例
    }
  }
}
</script>

<!--scoped设置局部-->
<style scoped>
  .student{
    background-color: #42b983;
    padding: 15px;
    margin-top: 30px;
  }
</style>