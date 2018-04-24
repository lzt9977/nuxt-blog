export default {
  async nuxtServerInit({commit}, {req}){
    if(req.headers.cookie){
      let cookie = req.headers.cookie
      cookie = cookie.split(';')
      let cookieObj = {}
      let stamp = []
      for (let i = 0; i < cookie.length; i++) {
        stamp = cookie[i].split('=')
        cookieObj[stamp[0].trim()] = stamp[1]
      }

      commit('SET_TOKEN', cookieObj.token)
    }
  }
}
