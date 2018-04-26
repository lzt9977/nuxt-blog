import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import config from './config'
import routes from './routes'
import jwtKoa from 'koa-jwt'
import Router from 'koa-router'
import errorCode from './utils/response'
import logger from 'koa-logger'

export default (app) => {
  const router = new Router()

  router.use('', routes.routes())

  // app.use(cors())

  app.use(logger())

  app.use(jwtKoa({
    secret: config.secret
  }).unless({
    path: [
      /^(?!\/api).*/,
      /^\/api\/login/,
      /^\/api\/reg/,
      /^\/api\/logout/,
      /^\/api\/getArticlesList/,
      /^\/api\/getArticleDetail/,
      // /^\/api\/publish/,
    ]
  }))

  app.use(async (ctx, next) => {
    if(ctx.status === 401){
      ctx.body = errorCode(600)
    }

    await next()
  })

  app.use(async (ctx, next) => {
    try {
      await next()

      // Handle 404 - throw it as an error.
      if (ctx.status === 404 && ctx.res.headersSent === false) {
        ctx.throw(404)
      }

      if (ctx.status === 200 && ctx.res.headersSent === false) {
        ctx.body = {
          status: 200,
          data: ctx.body
        }
      }
    } catch (err) {
      ctx.status = err.status || 500

      ctx.type = 'json'
      ctx.body = {
        status: ctx.status,
        message: err.message
      }

      ctx.app.emit('error', err, ctx)
    }
  })

  app.use(serve(config.static_dir.root))

  app.use(bodyParser())

  app
  .use(router.routes())
  .use(router.allowedMethods())

  // auth check


  // Add routes by group.
  // const mount = require('koa-mount')
  // app.use(mount('/api', routes()))
}
