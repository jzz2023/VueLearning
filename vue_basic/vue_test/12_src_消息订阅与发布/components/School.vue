<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{addr}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js' //引入消息订阅与通知 npm i pubsub-js
export default {
  name: "School",
  data(){
    return{
      name:'石家庄铁道大学',
      addr:'河北省石家庄'
    }
  },
  mounted() {
    //订阅消息
    this.pubId=pubsub.subscribe('hello',function (msgName,data){
      console.log('hello消息的回调执行了',msgName,data)
    })
  },
  beforeDestroy() {
    //通过id取消订阅
    pubsub.unsubscribe(this.pubId)
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