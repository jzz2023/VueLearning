<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: "App",
  data(){
    return {
      msg:'你好'
    }
  },
  components:{
    School,
    Student
  }
}
</script>

<style scoped>
  .app{
    background-color: gray;
    padding-top: 30px;
  }
</style>