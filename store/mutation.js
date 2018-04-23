import {
  NAV_INDEX,
  IS_LOGIN
} from './mutation-type'

const mutations = {
  [NAV_INDEX] (state, index) {
    state.navIndex = index
  },
  [IS_LOGIN] (state, session){
    state.isLogin = session
  }
}

export default mutations
