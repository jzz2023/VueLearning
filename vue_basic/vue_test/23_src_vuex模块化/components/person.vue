<template>
  <div>
    <h1>人员列表</h1>
    <h2>count组件求和：{{sum}}</h2>
    <h3>第一个人的姓名：{{firstName}}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加老王</button>
    <button @click="addPersonServer">随机添加一个人</button>
    <ul>
      <li v-for="(p,index) of personList" :key="index">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "person",
  data(){
    return{
      name:''
    }
  },
  computed:{
    personList(){
      return this.$store.state.person.personList
    },
    sum(){
      return this.$store.state.countAbout.sum
    },
    firstName(){
      return this.$store.getters['person/firstPersonName']
    }
  },
  methods:{
    add(){
      const person={id:nanoid(),name:this.name}
      this.$store.commit('person/ADD_PERSON',person)
      this.name=''
    },
    addWang(){
      const person={id:nanoid(),name:this.name}
      this.$store.dispatch('person/addPersonWang',person)
      this.name=''
    },
    addPersonServer(){
      this.$store.dispatch('person/addPersonServer')
    }
  }
}
</script>

<style scoped>

</style>