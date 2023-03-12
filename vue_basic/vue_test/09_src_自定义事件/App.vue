<template>
  <div class="app">
    <h1>{{msg}}，学生姓名:{{studentName}}</h1>
    <Student v-on:student="getStudentName" @click.native="show" @demo="m1"></Student>
    <!-- 事件会存入vc -->
     <School :getSchoolName="getSchoolName" />

    <!-- 使用ref绑定事件 -->
<!--    <School ref="stu"/>-->
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: "App",
  data(){
    return {
      msg:'你好',
      studentName:''
    }
  },
  components:{
    School,
    Student
  },
  methods:{
    getSchoolName(name){
      console.log("App收到了学校名:"+name)
    },
    getStudentName(name){
      console.log("App收到了学生名："+name)
      this.studentName=name
    },
    m1(){
      console.log("m1被调用了")
    },
    show(){
      alert(1234)
    }
  },
  /*mounted(){
    setTimeout(()=>{
      this.$refs.stu.$on("student",this.demo)
    },3000)
  }*/
}
</script>

<style scoped>
  .app{
    background-color: gray;
    padding-top: 30px;
  }
</style>