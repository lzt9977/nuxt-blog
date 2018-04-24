import Articles from '../models/articles'
import errorCode from '../utils/response'

export default async (ctx, next) => {
  try{
    const { body } = ctx.request

    const articles = await Articles.findOne({articleId: body.articleId})

    ctx.body = errorCode(0, articles)

  }catch(err)
  {
    ctx.body = errorCode(-1)
  }

  await next()
}
