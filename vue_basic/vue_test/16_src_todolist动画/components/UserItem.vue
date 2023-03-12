<template>
  <transition name="todo" appear>
    <li>
      <label>
        <input type="checkbox" :checked="obj.done" @change="handleChange(obj.id)"/>
        <!--      <input type="checkbox" v-model="obj.done"/> 使用双向数据绑定v-model修改props中的值,不建议使用-->
        <span v-show="!obj.isEdit">{{obj.title}}</span>
        <input v-show="obj.isEdit"
               type="text"
               :value="obj.title"
               @blur="handlerBlur(obj,$event)"
               ref="inputTitle">
      </label>
      <button class="btn btn-danger" @click="delObj(obj.id)">删除</button>
      <button v-show="!obj.isEdit" class="btn btn-edit" @click="handleEdit(obj)">编辑</button>
    </li>
  </transition>
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
    },
    handleEdit(obj){
      if(obj.hasOwnProperty('isEdit')){
        obj.isEdit=true
      }else {
        this.$set(obj,'isEdit',true)
      }
      //获取焦点
      this.$nextTick(function (){
        this.$refs.inputTitle.focus()
      })
    },
    //失去焦点回调
    handlerBlur(obj,e){
      this.obj.isEdit=false
      if(!e.target.value.trim()) return alert("输入不能为空")
      this.$bus.$emit('updateTodo',obj.id,e.target.value)
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

.todo-enter-active{
  animation: test 1s linear;
}

.todo-leave-active{
  animation: test 1s linear reverse;
}

/*动画关键帧*/
@keyframes test {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>