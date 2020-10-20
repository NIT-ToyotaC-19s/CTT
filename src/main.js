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

import VueLoading from 'vue-loading-template'
Vue.use(VueLoading, /** options **/)

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),

  localStorage: {
    jadge: {
      type: Array,
      default: Array(16).fill(false),
    },
    isCorrect: {
      type: Array,
      default: Array(16).fill(false),
    },
    // jadge1: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge2: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge3: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge4: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge5: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge6: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge7: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge8: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge9: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge10: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge11: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge12: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge13: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge14: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge15: {
    //   type: Boolean,
    //   default: false,
    // },
    // jadge16: {
    //   type: Boolean,
    //   default: false,
    // },
  }
}).$mount('#app')
