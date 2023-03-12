<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
<!--        js传递query参数-->
<!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp;-->

<!--        对象写法-->
        <router-link :to="{
          // path:'/home/message/detail',
          name:'xiangqing',
          query:{
            id:m.id,
            title:m.title
          }
        }"
        >
          {{m.title}}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return{
      messageList:[
        {id:'001',title:'消息001'},
        {id:'002',title:'消息002'},
        {id:'003',title:'消息003'}
      ]
    }
  },
  methods:{
    pushShow(m){
      this.$router.push({
        name:'xiangqing',
        query:{
          id:m.id,
          title:m.title
        }
      })
    },
    replaceShow(m){
      this.$router.replace({
        name:'xiangqing',
        query:{
          id:m.id,
          title:m.title
        }
      })
    }
  }
}
</script>

<style scoped>

</style>