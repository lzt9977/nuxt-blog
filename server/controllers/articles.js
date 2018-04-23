import Articles from '../models/articles'
import errorCode from '../utils/response'

export default async (ctx, next) => {
  try{
    const { body } = ctx.request

    if(body.page <= 0){
      ctx.body = errorCode(200)
      return await next()
    }

    const articles = Articles.find()
    const articlesList = await articles.skip((body.page - 1) * body.pageSize).limit(body.pageSize)
    const articlesSize = await articles.count()

    ctx.body = errorCode(0, {
      list: articlesList,
      total: articlesSize,
      pageSize: body.pageSize
    })

  }catch(err)
  {
    ctx.body = errorCode(-1)
    throw err
  }

  await next()
}
