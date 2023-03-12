<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isChecked" @click="checkAll"/>
    </label>
    <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
    <button class="btn btn-danger" @click="clearChecked">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "userFooter",
  props:['todos','checkAllTodo','clearAllTodo'],
  computed:{
    doneTotal(){
      /*let count = 0
      this.todos.forEach((todo)=>{
        if(todo.done) count++
      })
      return count*/
      //调用次数为函数长度
      return this.todos.reduce((pre,todo)=>{
        return pre + (todo.done ? 1 : 0)
      },0)
    },
    total(){
      return this.todos.length
    },
    isChecked(){
      return this.doneTotal === this.total && this.total > 0
    }
  },
  methods:{
    checkAll(e){
      this.checkAllTodo(e.target.checked)
    },
    clearChecked(){
      this.clearAllTodo()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>