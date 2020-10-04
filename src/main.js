import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import Cookies from 'js-cookie'
import vuetify from './plugins/vuetify';
// import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
