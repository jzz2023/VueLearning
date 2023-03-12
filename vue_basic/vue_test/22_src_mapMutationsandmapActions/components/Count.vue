<template>
  <div class="category">
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前求和的10倍为：{{bigSum}}</h2>
    <h3>我在{{school}},学习{{subject}}</h3>
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
  name: "category",
  data(){
    return{
      n:1
    }
  },
  computed:{
    //使用mapState获取state中的数据,对象写法
    //数组写法
    ...mapState(['sum','school','subject']),
    ...mapGetters(['bigSum'])
  },
  mounted() {
    mapState({he:'sum',xuexiao:'school',xueke:'subject'})
  },
  methods:{
    /*increment(){
      this.$store.commit('jia',this.n)
    },
    decrement(){
      this.$store.commit('jian',this.n)
    },*/

    //借助mapMutations生成对应方法，联系commit，继而操作数据
    ...mapMutations({increment:'jia',decrement:'jian'}),
    /*数组写法，需要与mutations中的属性同名
    ...mapMutations(['jia','jian']),*/
    /*incrementOdd(){
      this.$store.dispatch('odd',this.n)
    },
    incrementWait(){
      this.$store.dispatch('wait',this.n)
    },*/
    ...mapActions({incrementOdd:'odd',incrementWait:'wait'}),
    // ...mapActions(['odd','wait'])
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>