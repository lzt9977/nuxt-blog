import config from '../config'
import chalk from 'chalk'

export default (code, data = {}) => {
  console.log(chalk.yellow(`ErrorCode：${code}`))
  return {
    code: code,
    data,
    msg: config.errorCode[code]
  }
}
