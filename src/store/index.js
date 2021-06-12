import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
import Crypto from 'crypto-js'
import SecureLS from 'secure-ls';
const ls = new SecureLS({ isCompression: false })



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    authenticated: false,
    adminAuthentication: false,
    decrypt: null
  },

  mutations: {
    setAuthentication(state, status){
      state.authenticated = status
    },
    setAdminAuthentication(state, status){
      state.adminAuthentication = status
      
    },
    decryptData(state, status){
      state.decrypt = status
    },
    setUserData (state, userData) {
      state.user = userData

     localStorage.setItem('user', Crypto.AES.encrypt(JSON.stringify(userData), 'Z57wOYU9pYT1spEnKRtyjsbjhvb_djwbdj!$5451'))
     // Cookies.set('user', uuid.v4(), { secure: true, expires: 10 })
      axios.defaults.headers.common.Authorization = `Bearer ${userData.data}`
    },

    clearUserData () {
      
    }
  },

  actions: {
    login ({ commit }, credentials) {
   
      return axios
        .post('http://api.fizzcoin.org:80/api/user/login', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    },

    logout ({ commit }) {

      localStorage.clear()
     // localStorage.removeItem('user')
      location.reload()
      this.$store.state.user = null
    }
  },

  plugins: [createPersistedState(
    {
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    }
  )],
})
