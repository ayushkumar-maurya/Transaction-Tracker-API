import * as categoryService from './categoryService.js'
import * as transactionService from './transactionService.js'

const serviceName = 'BANK'

const getBank = async (reqData) => {
  return await categoryService.getCategory(reqData, serviceName)
}

const addBank = async (reqData) => {
  return await categoryService.addCategory(reqData, serviceName)
}

const updateBank = async (reqData) => {
  return await categoryService.updateCategory(reqData, serviceName)
}

const deleteBank = async (reqData) => {
  return await categoryService.deleteCategory(reqData, serviceName)
}

const getBanks = async () => {
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

export {
  getBank,
  addBank,
  updateBank,
  deleteBank,
  getBanks,
  getTransaction,
  addTransaction,
  updateTransaction,
  deleteTransaction
}
