import {
  NAV_INDEX,
  SET_TOKEN
} from './mutation-type'

const mutations = {
  [NAV_INDEX] (state, index) {
    state.navIndex = index
  },
  [SET_TOKEN] (state, token){
    state.token = token
  }
}

export default mutations
