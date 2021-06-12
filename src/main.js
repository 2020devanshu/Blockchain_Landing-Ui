import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueClipboard from 'vue-clipboard2';


Vue.config.productionTip = false

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueClipboard)
Vue.use(Vuex);
import Crypto from 'crypto-js'
//Vue.use(Chartkick.use(Chart))
//Vue.use(VueChartKick)

new Vue({
  router,
  store,
  vuetify,
  created () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('setUserData', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (response.data.status_code !== 200) {
          this.$store.dispatch('logout')
          console.log(error)
          return Promise.reject(error)
        }
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
