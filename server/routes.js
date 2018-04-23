import Router from 'koa-trie-router'

const router = new Router()

import articles from './controllers/articles'
import login from './controllers/login'
import logout from './controllers/logout'
import reg from './controllers/reg'

export default () => {

  router.post('/getArticlesList', articles)
  router.post('/login', login)
  router.post('/logout', logout)
  router.post('/reg', reg)

  return router.middleware()
}
