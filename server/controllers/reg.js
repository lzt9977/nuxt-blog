import Users from '../models/users'
import errorCode from '../utils/response'

export default async (ctx, next) => {
  try{
    const isUser = await Users.find().where('username', ctx.request.body.username)

    if(!ctx.request.body.username || !ctx.request.body.password) {
      ctx.body = errorCode(100)

      return await next()
    }

    if(isUser.length){
      ctx.body = errorCode(101)
    }else{
      await Users.create(ctx.request.body).then(() => {
        ctx.body = errorCode(0)
      })
    }
  }catch (err) {
    ctx.body = errorCode(-1)
    throw err
  }

  await next()
}
