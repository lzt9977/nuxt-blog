import mongoose from 'mongoose'
import chalk from 'chalk'
const log = console.log
import config from '../config'

mongoose.connect(`mongodb://${config.database.user}:${config.database.pass}${config.database.host}:${config.database.port}/${config.database.dbname}?authSource=admin`)

const db = mongoose.connection

db.on('error', () => {
  log(chalk.red('connection error:'))
})

db.once('open', async () => {
  log(chalk.green('mongodb connected!'))
})