import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import config from './config'
import routes from './routes'
import jwtKoa from 'koa-jwt'
import Router from 'koa-router'

export default (app) => {
  const router = new Router()

  router.use('', routes.routes())

  app
  .use(router.routes())
  .use(router.allowedMethods())

  app.use(jwtKoa({
    secret: config.secret
  }).unless({
    path: [
      /^(?!\/personal).*/
    ]
  }))

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

  // auth check


  // Add routes by group.
  // const mount = require('koa-mount')
  // app.use(mount('/api', routes()))
}
