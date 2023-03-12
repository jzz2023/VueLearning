<template>
  <div class="todo-header">
    <input type="text" @keyup.enter="add" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>

<script>
import {nanoid} from 'nanoid' //生成id，通过npm i nanoid引入
export default {
  name: "userHeader",
  props:['addTodo'],
  methods:{
    add(e){
      //校验数据
      if(!e.target.value){
        alert("输入不能为空")
        return
      }
    //  将用户的输入包装成一个todo对象
      const todoObj={id:nanoid(),title:e.target.value,done:false}
      //通知app组件添加对象
      // this.addTodo(todoObj)
      this.$emit("addTodo",todoObj)
      e.target.value=''
    }
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>