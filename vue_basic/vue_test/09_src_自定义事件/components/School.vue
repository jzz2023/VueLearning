<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{addr}}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:['getSchoolName'],
  data(){
    return{
      name:'石家庄铁道大学',
      addr:'河北省石家庄'
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 15px;
    margin-top: 30px;
  }
</style>