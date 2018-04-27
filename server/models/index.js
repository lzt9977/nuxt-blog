import mongoose from 'mongoose'
import chalk from 'chalk'
const log = console.log
import config from '../config'

mongoose.connect(`mongodb://${config.database.host}:${config.database.port}`, {
  authSource: 'admin',
  user: config.database.user,
  pass: config.database.pass,
  dbName: config.database.dbname
})

const db = mongoose.connection

db.on('error', () => {
  log(chalk.red('connection error:'))
})

db.once('open', async () => {
  log(chalk.green('mongodb connected!'))
})