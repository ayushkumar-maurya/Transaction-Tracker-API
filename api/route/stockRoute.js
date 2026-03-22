import express from 'express'
import * as stockService from '../service/stockService.js'

const router = express.Router()

router.get('/stock', async (req, res) => {
  res.json(await stockService.getStock(req.body))
})

router.post('/stock', async (req, res) => {
  res.json(await stockService.addStock(req.body))
})

router.put('/stock', async (req, res) => {
  res.json(await stockService.updateStock(req.body))
})

router.delete('/stock', async (req, res) => {
  res.json(await stockService.deleteStock(req.body))
})

router.get('/stocks', async (req, res) => {
  res.json(await stockService.getStocks())
})

export default router
