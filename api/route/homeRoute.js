import express from 'express'
import * as homeService from '../service/homeService.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(homeService.home())
})

export default router
