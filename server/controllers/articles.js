import Articles from '../models/articles'
import errorCode from '../utils/response'
import jwt from 'jsonwebtoken'
import config from '../config'

export const getArticleList =  async ctx => {
  try{
    const { body } = ctx.request

    if(body.page <= 0){
      ctx.body = errorCode(200)
      return await next()
    }

    const articles = Articles.find()
    const articlesList = await articles.sort({ createTime: -1 }).skip((body.page - 1) * body.pageSize).limit(body.pageSize)
    const articlesSize = await articles.count()

    const list = articlesList.map(item => {
      item.content = item.content.length > 150 ? `${item.content.substring(0,150)}...` : item.content
      return item
    })

    ctx.body = errorCode(0, {
      list: list,
      total: articlesSize,
      pageSize: body.pageSize
    })

  }catch(err)
  {
    ctx.body = errorCode(-1)
    throw err
  }
}

export const getArticleDetail = async ctx => {
  try{
    const { body } = ctx.request

    const articles = await Articles.findOne({articleId: body.articleId})

    ctx.body = errorCode(0, articles)

  }catch(err)
  {
    ctx.body = errorCode(-1)
  }
}

export const publishArticle = async ctx => {
  try{
    const token = ctx.request.header.authorization.split(' ')[1]
    const decode = jwt.verify(token, config.secret)

    console.log(decode)

    ctx.body = errorCode(0)

  }catch (err) {
    throw err
  }
}