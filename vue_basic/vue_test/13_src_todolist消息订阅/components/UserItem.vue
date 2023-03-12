<template>
  <li>
    <label>
      <input type="checkbox" :checked="obj.done" @change="handleChange(obj.id)"/>
<!--      <input type="checkbox" v-model="obj.done"/> 使用双向数据绑定v-model修改props中的值,不建议使用-->
      <span>{{obj.title}}</span>
    </label>
    <button class="btn btn-danger" @click="delObj(obj.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "userItem",
  props:['obj'],
  methods:{
    handleChange(id){
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    delObj(id){
      if(confirm('确定删除吗?')){
        pubsub.publish('delTodo',id)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #42b983;
}
li:hover button{
  display: block;
}
</style>