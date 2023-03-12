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
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "category",
  data(){
    return{
      n:1
    }
  },
  computed:{
    /*he(){
      return this.$store.state.sum
    },
    xuexiao(){
      return this.$store.state.school
    },
    xueke(){
      return this.$store.state.subject
    },*/
    //使用mapState获取state中的数据,对象写法
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),
    //数组写法
    ...mapState(['sum','school','subject']),
    ...mapGetters(['bigSum'])
    /*bigSum(){
      return this.$store.getters.bigSum
    }*/
  },
  mounted() {
    mapState({he:'sum',xuexiao:'school',xueke:'subject'})
  },
  methods:{
    increment(){
      this.$store.dispatch('jia',this.n)
    },
    decrement(){
      this.$store.dispatch('jian',this.n)
    },
    incrementOdd(){
      if(this.$store.state.sum % 2){
        this.$store.dispatch('odd',this.n)
      }
    },
    incrementWait(){
      setTimeout(()=>{
        this.$store.dispatch('jia',this.n)
      },500)
    }
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>