import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation';
import actions from './actions'
Vue.use(Vuex)

const state = {
  navIndex: '0',
  isLogin: false
}

const store = () => new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
