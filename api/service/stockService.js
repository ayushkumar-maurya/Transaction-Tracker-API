import * as categoryService from './categoryService.js'
import * as transactionService from './transactionService.js'

const serviceName = 'STOCK'

const getStock = async (reqData) => {
  return await categoryService.getCategory(reqData, serviceName)
}

const addStock = async (reqData) => {
  return await categoryService.addCategory(reqData, serviceName)
}

const updateStock = async (reqData) => {
  return await categoryService.updateCategory(reqData, serviceName)
}

const deleteStock = async (reqData) => {
  return await categoryService.deleteCategory(reqData, serviceName)
}

const getStocks = async () => {
  return await categoryService.getCategories(serviceName)
}

const getTransaction = async (reqData) => {
  return await transactionService.getTransaction(reqData, serviceName)
}

const addTransaction = async (reqData) => {
  return await transactionService.addTransaction(reqData, serviceName)
}

const updateTransaction = async (reqData) => {
  return await transactionService.updateTransaction(reqData, serviceName)
}

const deleteTransaction = async (reqData) => {
  return await transactionService.deleteTransaction(reqData, serviceName)
}

const getTransactions = async () => {
  return await transactionService.getTransactions(serviceName)
}

export {
  getStock,
  addStock,
  updateStock,
  deleteStock,
  getStocks,
  getTransaction,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactions
}
