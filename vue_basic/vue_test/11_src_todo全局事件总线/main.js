// 引入vue
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate() {
    //定义全局事件总线
    Vue.prototype.$bus=this
  }
})
