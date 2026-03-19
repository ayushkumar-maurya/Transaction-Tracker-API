import express from 'express'
import * as bankService from '../service/bankService.js'

const router = express.Router()

router.get('/bank', async (req, res) => {
  res.json(await bankService.getBank(req.body))
})

router.post('/bank', async (req, res) => {
  res.json(await bankService.addBank(req.body))
})

router.put('/bank', async (req, res) => {
  res.json(await bankService.updateBank(req.body))
})

router.get('/banks', async (req, res) => {
  res.json(await bankService.getBanks())
})

export default router
