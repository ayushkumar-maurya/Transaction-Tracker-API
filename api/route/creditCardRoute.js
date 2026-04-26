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

export default router
