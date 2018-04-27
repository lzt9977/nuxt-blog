import errorCode from './errorCode'
console.log(process.env.NODE_ENV)
const dbname = process.env.NODE_ENV === 'development' ? 'user' : 'koa'

export default {
  app: {
    name: 'something',
    version: '1.0.0'
  },
  database: {
    driver: 'mongo',
    host: '127.0.0.1',
    port: 27017,
    dbname: 'user',
    username: 'admin',
    password: '123456',
    options: {
    }
  },
  server: {
    port: 3000
  },
  static_dir: {
    root: './static',
    options: {}
  },
  session: {
    secretKey: 'something'
  },
  secret: 'qweqwqw',
  md5Key: 'this is md5 key',
  errorCode
}
