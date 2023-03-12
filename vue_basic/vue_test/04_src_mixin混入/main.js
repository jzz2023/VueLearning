// 引入vue
import Vue from 'vue'
import App from './App.vue'

//全局引入混合
import {mixin} from "./mixin";

Vue.mixin(mixin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
