import express from 'express'
import dotenv from 'dotenv'
import DbConn from './db/DbConn.js'
import * as log from './utils/log.js'

const app = express()
dotenv.config()
DbConn.config()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  log.info(log.fileURLToPath(import.meta.url), 'API Server is up and running!')
})
