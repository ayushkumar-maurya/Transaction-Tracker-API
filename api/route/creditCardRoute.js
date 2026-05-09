import express from 'express'
import * as creditCardService from '../service/creditCardService.js'

const router = express.Router()

router.get('/creditcard', async (req, res) => {
  res.json(await creditCardService.getCreditCard(req.body))
})

router.post('/creditcard', async (req, res) => {
  res.json(await creditCardService.addCreditCard(req.body))
})

router.put('/creditcard', async (req, res) => {
  res.json(await creditCardService.updateCreditCard(req.body))
})

router.delete('/creditcard', async (req, res) => {
  res.json(await creditCardService.deleteCreditCard(req.body))
})

router.get('/creditcards', async (req, res) => {
  res.json(await creditCardService.getCreditCards())
})

router.get('/transaction', async (req, res) => {
  res.json(await creditCardService.getTransaction(req.body))
})

router.post('/transaction', async (req, res) => {
  res.json(await creditCardService.addTransaction(req.body))
})

router.put('/transaction', async (req, res) => {
  res.json(await creditCardService.updateTransaction(req.body))
})

router.delete('/transaction', async (req, res) => {
  res.json(await creditCardService.deleteTransaction(req.body))
})

router.get('/transactions', async (req, res) => {
  res.json(await creditCardService.getTransactions())
})

export default router
