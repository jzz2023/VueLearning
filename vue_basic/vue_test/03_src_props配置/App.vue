<template>
  <div>
    <Student name="李四" :age="18" sex="女" ></Student>
  </div>
</template>

<script>
import Student from './components/Student'
export default {
  name: "App",
  components:{
    Student
  }
}
</script>

<style scoped>

</style>