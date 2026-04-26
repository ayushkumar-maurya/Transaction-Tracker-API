import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import DbConn from './configs/DbConn.js'
import ParentCategories from './configs/ParentCategories.js'
import * as log from './utils/log.js'

import homeRoute from './route/HomeRoute.js'
import bankRoute from './route/bankRoute.js'
import creditCardRoute from './route/creditCardRoute.js'
import stockRoute from './route/stockRoute.js'
import mutualFundRoute from './route/mutualFundRoute.js'
import miscCategoryRoute from './route/miscCategoryRoute.js'

const app = express()
dotenv.config()

try {
  await DbConn.init()
  await ParentCategories.init()
}
catch(err) {
  log.error(fileURLToPath(import.meta.url), 'Unable to perform database operations!')
}

app.use(cors({
  origin: process.env.WEB_APP_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}))

app.use(express.json());

app.use('/', homeRoute)
app.use('/bank', bankRoute)
app.use('/creditcard', creditCardRoute)
app.use('/stock', stockRoute)
app.use('/mutualfund', mutualFundRoute)
app.use('/misc', miscCategoryRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
  log.info(fileURLToPath(import.meta.url), 'API Server is up and running!')
})
