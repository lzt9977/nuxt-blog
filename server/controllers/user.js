import Users from '../models/users'
import errorCode from '../utils/response'
import jwt from 'jsonwebtoken'
import config from '../config'
import bcrypt from 'bcrypt'

export const login = async ctx => {
  const { body } = ctx.request
  try {
    const userInfo = await Users.findOne({username: body.username})

    if(!userInfo){
      return ctx.body = errorCode(100)
    }

    const passCorrect = bcrypt.compareSync(body.password, userInfo.password)

    if(body.username === userInfo.username && passCorrect){

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
}

export const reg = async ctx => {
  try{
    const isUser = await Users.find().where('username', ctx.request.body.username)

    if(!ctx.request.body.username || !ctx.request.body.password) {
      ctx.body = errorCode(100)

      return await next()
    }

    if(isUser.length){
      ctx.body = errorCode(101)
    }else{
      const salt = bcrypt.genSaltSync(10)

      await Users.create({
        username: ctx.request.body.username,
        password: bcrypt.hashSync(ctx.request.body.password, salt)
      }).then(() => {
        ctx.body = errorCode(0)
      })
    }

  }catch (err) {
    ctx.body = errorCode(-1)
    throw err
  }
}

export const logout = ctx => {
  try {
    jwt.sign({
      logout: 'logout'
    }, config.secret, {
      expiresIn: '1h'
    })

    ctx.cookies.set('token', '')

    ctx.body = errorCode(0)
  }catch (err) {
    ctx.body = errorCode(-1)
  }
}