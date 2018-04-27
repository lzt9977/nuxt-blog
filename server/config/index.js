import errorCode from './errorCode'
const dbname = process.env.NODE_ENV === 'development' ? 'test' : 'prod'

export default {
  app: {
    name: 'something',
    version: '1.0.0'
  },
  database: {
    driver: 'mongo',
    host: '127.0.0.1',
    port: 27017,
    dbname: dbname,
    username: 'admin',
    password: '123456',
    options: {
    }
  },
  server: {
    port: process.env.NODE_ENV === 'development' ? 80 : 3000,
    host: process.env.NODE_ENV === 'development' ? '0.0.0.0' : '127.0.0.1'
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
