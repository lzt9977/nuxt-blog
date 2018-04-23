import errorCode from '../utils/response'

export default async (ctx, next) => {
  ctx.session = null

  try {
    ctx.body = errorCode(0)
  }catch (err) {
    ctx.body = errorCode(-1)
  }

  await next()
}
