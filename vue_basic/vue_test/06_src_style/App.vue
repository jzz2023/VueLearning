<template>
  <div>
    <Student></Student>
    <hr>
    <School></School>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
  name: "App",
  components:{
    School,
    Student
  }
}
</script>

<style scoped>

</style>