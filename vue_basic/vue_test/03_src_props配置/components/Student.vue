<template>
  <div id="student">
    <h2>{{msg}}</h2>
    <h2>学生名称：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="addAge">点我增长年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return{
      msg:'学生信息：',
      myAge:this.age
    }
  },
  //简明写法,props首先接收数据
  props:['name','age','sex'],

  methods:{
    addAge(){
      console.log(this.myAge)
      this.myAge++
    }
  }

//  接收数据同时限制数据类型
  /*props:{
    name:String,
    age:Number,
    sex:String
  }*/

  //接收数据的同时进行必要性和默认值限制
  /*props:{
    name:{
      type:String,
      required:true //是否必须
    },
    age:{
      type:Number,
      default:24 //默认值
    },
    sex:{
      type:String,
      required:true
    }
  }*/
}
</script>

<style scoped>
  #student{
    background-color: aqua;
  }
</style>