<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{addr}}</h2>
  </div>
</template>

<script>
import {mixin} from "../mixin"
export default {
  name: "School",
  data(){
    return{
      name:'石家庄铁道大学',
      addr:'河北省石家庄'
    }
  },
  mixins:[mixin]

}
</script>

<style scoped>

</style>