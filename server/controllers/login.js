import Users from '../models/users'
import errorCode from '../utils/response'

export default async (ctx, next) => {
  const { body } = ctx.request
  try {
    const userInfo = await Users.findOne({username: body.username})
    if(body.username === userInfo.username && body.password === userInfo.password){
      ctx.body = errorCode(0)

      ctx.session.user = {
        username: userInfo.username
      }
    }else{
      ctx.body = errorCode(100)
    }

  }catch (err) {
    ctx.body = errorCode(-1)
    throw err
  }
  await next()
}
