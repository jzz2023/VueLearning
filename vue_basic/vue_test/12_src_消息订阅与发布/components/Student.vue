<template>
  <div class="student">
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给School</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
      //发布消息
      pubsub.publish('hello',this.name)
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