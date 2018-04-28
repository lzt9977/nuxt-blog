import mongoose from 'mongoose'
import chalk from 'chalk'
const log = console.log
import config from '../config'

mongoose.connect(`mongodb://${config.database.host}:${config.database.port}`, {
  authSource: config.database.dbname,
  user: config.database.username,
  pass: config.database.password,
  dbName: config.database.dbname
})

const db = mongoose.connection

db.on('error', (err) => {
  log(chalk.red('connection error:'+ err))
})

db.once('open', async () => {
  log(chalk.green('mongodb connected!'))
})