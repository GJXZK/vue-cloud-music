import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import router from './router'
import store from './store'

// 全局样式表 
import './assets/css/base.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
