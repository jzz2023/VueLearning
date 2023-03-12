<template>
  <div class="category">
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前求和的10倍为：{{bigSum}}</h2>
    <h3>我在{{school}},学习{{subject}}</h3>
    <h3>person组件总人数：{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "category",
  data(){
    return{
      n:1
    }
  },
  computed:{
    //使用mapState获取state中的数据,对象写法
    //数组写法
    ...mapState('countAbout',['sum','school','subject']),
    ...mapState('person',['personList']),
    ...mapGetters('countAbout',['bigSum'])
  },
  mounted() {
    mapState({he:'sum',xuexiao:'school',xueke:'subject'})
  },
  methods:{
    //借助mapMutations生成对应方法，联系commit，继而操作数据
    ...mapMutations('countAbout',{increment:'jia',decrement:'jian'}),

    ...mapActions('countAbout',{incrementOdd:'odd',incrementWait:'wait'}),
    // ...mapActions(['odd','wait'])
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>