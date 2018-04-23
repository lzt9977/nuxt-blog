import config from '../config'

export default (code, data = {}) => {
  console.error(`XXXX错误：${code}`)
  return {
    code: code,
    data,
    msg: config.errorCode[code]
  }
}
