import errorCode from '../utils/response'

export default async function (ctx, next) {
  const token = await ctx.headers.token
  console.log(token)


  if(!token){
    ctx.body = errorCode(500)
  }else{
    await next()
  }
}