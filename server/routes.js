import Router from 'koa-router'
import * as articles from './controllers/articles'
import * as user from './controllers/user'

const router = new Router({
  prefix: '/api'
})

router.post('/getArticlesList', articles.getArticleList)
router.post('/login', user.login)
router.post('/logout', user.logout)
router.post('/reg', user.reg)
router.post('/getArticleDetail', articles.getArticleDetail)
router.post('/publish', articles.publishArticle)

export default router