import Users from '../models/users'
import errorCode from '../utils/response'
import jwt from 'jsonwebtoken'
import config from '../config'

export default async (ctx, next) => {
  const { body } = ctx.request
  try {
    const userInfo = await Users.findOne({username: body.username})
    if(body.username === userInfo.username && body.password === userInfo.password){

      const token = jwt.sign({
        username: body.username
      }, config.secret, {
        expiresIn: '1h'
      })

      ctx.cookies.set('token', token)

      ctx.body = errorCode(0, token)

    }else{
      ctx.body = errorCode(100)
    }

  }catch (err) {
    ctx.body = errorCode(-1)
    throw err
  }
  await next()
}
