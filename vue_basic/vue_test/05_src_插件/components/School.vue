<template>
  <div>
    <h2>学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{addr}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return{
      name:'石家庄铁道大学',
      addr:'河北省石家庄'
    }
  },

}
</script>

<style scoped>

</style>