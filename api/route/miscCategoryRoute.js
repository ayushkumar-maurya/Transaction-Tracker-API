import express from 'express'
import * as miscCategoryService from '../service/miscCategoryService.js'

const router = express.Router()

router.get('/misccategory', async (req, res) => {
  res.json(await miscCategoryService.getMiscCategory(req.body))
})

router.post('/misccategory', async (req, res) => {
  res.json(await miscCategoryService.addMiscCategory(req.body))
})

router.put('/misccategory', async (req, res) => {
  res.json(await miscCategoryService.updateMiscCategory(req.body))
})

router.delete('/misccategory', async (req, res) => {
  res.json(await miscCategoryService.deleteMiscCategory(req.body))
})

router.get('/misccategories', async (req, res) => {
  res.json(await miscCategoryService.getMiscCategories())
})

router.get('/transaction', async (req, res) => {
  res.json(await miscCategoryService.getTransaction(req.body))
})

router.post('/transaction', async (req, res) => {
  res.json(await miscCategoryService.addTransaction(req.body))
})

router.put('/transaction', async (req, res) => {
  res.json(await miscCategoryService.updateTransaction(req.body))
})

router.delete('/transaction', async (req, res) => {
  res.json(await miscCategoryService.deleteTransaction(req.body))
})

router.get('/transactions', async (req, res) => {
  res.json(await miscCategoryService.getTransactions())
})

export default router
