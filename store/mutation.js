import {
  NAV_INDEX,
  IS_LOGIN
} from './mutation-type'

const mutations = {
  [NAV_INDEX] (state, index) {
    state.navIndex = index
  },
  [IS_LOGIN] (state){
    function getCookie(cname)
    {
      let name = cname + "=";
      let ca = document.cookie.split(';');
      for(let i=0; i<ca.length; i++)
      {
        let c = ca[i].trim();
        if (c.indexOf(name)==0) return c.substring(name.length,c.length);
      }
      return "";
    }

    let isLogin = !!getCookie('__BLOG__')
    console.log(isLogin)

    state.isLogin = isLogin
  }
}

export default mutations
