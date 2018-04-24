// import Router from 'koa-trie-router'
//
// const router = new Router()
//
// import articles from './controllers/articles'
// import login from './controllers/login'
// import logout from './controllers/logout'
// import reg from './controllers/reg'
// import articleDetail from './controllers/articleDetail'
//
// export default () => {
//
//   router.post('/getArticlesList', articles)
//   router.post('/login', login)
//   router.post('/logout', logout)
//   router.post('/reg', reg)
//   router.post('/getArticleDetail', articleDetail)
//
//   return router.middleware()
//
// }

import Router from 'koa-router'
import articles from './controllers/articles'
import login from './controllers/login'
import logout from './controllers/logout'
import reg from './controllers/reg'
import articleDetail from './controllers/articleDetail'

const router = new Router({
  prefix: '/api'
})

router.post('/getArticlesList', articles)
router.post('/login', login)
router.post('/logout', logout)
router.post('/reg', reg)
router.post('/getArticleDetail', articleDetail)

export default router