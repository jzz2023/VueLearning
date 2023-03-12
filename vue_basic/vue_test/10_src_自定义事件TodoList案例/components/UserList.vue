<template>
  <ul class="todo-main">
<!--    将数据给item-->
    <user-item
        :checkTodo="checkTodo"
        :delTodo="delTodo"
        v-for="todo in todos"
        :key="todo.id"
        :obj="todo" />
  </ul>
</template>

<script>
import userItem from "@/components/UserItem";
export default {
  name: "userList",
  components:{userItem},
  props:['todos','checkTodo','delTodo']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>