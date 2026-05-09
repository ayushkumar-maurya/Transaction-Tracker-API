import * as categoryService from './categoryService.js'
import * as transactionService from './transactionService.js'

const serviceName = 'MUTUAL_FUND'

const getMutualFund = async (reqData) => {
  return await categoryService.getCategory(reqData, serviceName)
}

const addMutualFund = async (reqData) => {
  return await categoryService.addCategory(reqData, serviceName)
}

const updateMutualFund = async (reqData) => {
  return await categoryService.updateCategory(reqData, serviceName)
}

const deleteMutualFund = async (reqData) => {
  return await categoryService.deleteCategory(reqData, serviceName)
}

const getMutualFunds = async () => {
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
  getMutualFund,
  addMutualFund,
  updateMutualFund,
  deleteMutualFund,
  getMutualFunds,
  getTransaction,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactions
}
