import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import config from './config'
import routes from './routes'
import session from 'koa-session'

export default (app) => {
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

  // 定义session
  app.keys = ['some secret hurr']

  app.use(session({
    key: '__BLOG__',
    maxAge: 86400000,
    httpOnly: true,
  }, app))

  // Static files are files that clients download as they are from the server.
  // Create a new directory, public. Koa, by default doesn't allow you to
  // serve static files.
  // https://github.com/koajs/static
  // https://www.tutorialspoint.com/koajs/koajs_static_files.htm
  app.use(serve(config.static_dir.root))

  // The parsed body will store in ctx.request.body
  // If nothing was parsed, body will be an empty object {}
  // https://github.com/koajs/bodyparser
  // https://github.com/koajs/koa/issues/719
  app.use(bodyParser())

  // Add routes by group.
  const mount = require('koa-mount')
  app.use(mount('/api', routes()))
}
