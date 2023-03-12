// 引入vue
import Vue from 'vue'
import App from './App.vue'
//引入插件
import vueResource from 'vue-resource'
//引入vuex
import store from './store/index'

Vue.config.productionTip = false
Vue.use(vueResource)

new Vue({
  el:'#app',
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus=this
  }
})
