import express from 'express'
import * as bankService from '../service/bankService.js'

const router = express.Router()

router.get('/banks', async (req, res) => {
  res.json(await bankService.getBanks())
})

export default router
