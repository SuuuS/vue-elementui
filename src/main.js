import Vue from 'vue'
// import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router/router'
import axios from'axios'

// Vue.use(VueResource);
Vue.use(ElementUI)
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
