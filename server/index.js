import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import config from './config'
import middlewares from './middlewares'

import './models'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || config.server.port

const start = async () => {
  // Import and Set Nuxt.js options
  let nuxtConfig = require('../nuxt.config.js')
  nuxtConfig.dev = !(app.env === 'production')

// Instantiate nuxt.js


// Middlewares are imported here.
  middlewares(app)

  const nuxt = new Nuxt(nuxtConfig)

  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(async (ctx, next) => {
    await next()
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
}

start()