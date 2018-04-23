export default {
  async nuxtServerInit({commit}, {req}){
    if(req.session && req.session.user){
      commit('IS_LOGIN', req.session.user)
    }
  }
}
