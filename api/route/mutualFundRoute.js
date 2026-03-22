import express from 'express'
import * as mutualFundService from '../service/mutualFundService.js'

const router = express.Router()

router.get('/mutualfund', async (req, res) => {
  res.json(await mutualFundService.getMutualFund(req.body))
})

router.post('/mutualfund', async (req, res) => {
  res.json(await mutualFundService.addMutualFund(req.body))
})

router.put('/mutualfund', async (req, res) => {
  res.json(await mutualFundService.updateMutualFund(req.body))
})

router.delete('/mutualfund', async (req, res) => {
  res.json(await mutualFundService.deleteMutualFund(req.body))
})

router.get('/mutualfunds', async (req, res) => {
  res.json(await mutualFundService.getMutualFunds())
})

export default router
