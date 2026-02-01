import express from 'express'
import dotenv from 'dotenv'
import DbConn from './configs/DbConn.js'
import * as log from './utils/log.js'

import homeRoute from './route/HomeRoute.js'
import bankRoute from './route/bankRoute.js'


const app = express()
dotenv.config()
DbConn.init()

app.use('/', homeRoute)
app.use('/bank', bankRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
  log.info(log.fileURLToPath(import.meta.url), 'API Server is up and running!')
})
