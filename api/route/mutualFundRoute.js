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

router.get('/transaction', async (req, res) => {
  res.json(await mutualFundService.getTransaction(req.body))
})

router.post('/transaction', async (req, res) => {
  res.json(await mutualFundService.addTransaction(req.body))
})

router.put('/transaction', async (req, res) => {
  res.json(await mutualFundService.updateTransaction(req.body))
})

router.delete('/transaction', async (req, res) => {
  res.json(await mutualFundService.deleteTransaction(req.body))
})

router.get('/transactions', async (req, res) => {
  res.json(await mutualFundService.getTransactions())
})

export default router
