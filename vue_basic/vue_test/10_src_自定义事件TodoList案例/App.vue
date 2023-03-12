<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
      <!--将函数传给header-->
        <user-header @addTodo="addTodo"></user-header>
<!--        将数据给list-->
        <user-list
            :todos="todos"
            :checkTodo="checkTodo"
            :delTodo="delTodo"
        />
        <user-footer :todos="todos"
                     @checkAllTodo="checkAllTodo"
                     @clearAllTodo="clearAllTodo"/>
      </div>
    </div>
  </div>

</template>

<script>
import userFooter from "@/components/UserFooter";
import userList from "@/components/UserList";
import userHeader from "@/components/UserHeader";

export default {
  name: "App",
  components: {
    userFooter,
    userHeader,
    userList
  },
  //将数据给list
  data(){
    return{
      todos:JSON.parse(localStorage.getItem("todos")) || []
    }
  },
  // 将数据改为webStroage监视
  watch:{
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem("todos",JSON.stringify(value))
      }
    }
  },
  methods:{
    //添加todo
    addTodo(obj){
      this.todos.unshift(obj)
    },
  //  取消或勾选选择
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id){
          todo.done = !todo.done
        }
      })
    },

  //  删除todo
    delTodo(id){
      this.todos = this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
  //  全选或取消全选
    checkAllTodo(done){
      this.todos.forEach((todo)=>{
        todo.done=done
      })
    },
  //  清除已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>