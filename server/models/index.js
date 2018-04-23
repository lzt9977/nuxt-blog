import mongoose from 'mongoose'
import chalk from 'chalk'
const log = console.log
import config from '../config'

const dblink = `mongodb://${config.database.host}:${config.database.port}/${config.database.dbname}`

console.log(dblink)

mongoose.connect(`mongodb://${config.database.host}:${config.database.port}/${config.database.dbname}`)

const db = mongoose.connection

db.on('error', () => {
  log(chalk.red('connection error:'))
})

db.once('open', async () => {
  log(chalk.green('mongodb connected!'))
})