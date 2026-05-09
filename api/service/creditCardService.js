import * as categoryService from './categoryService.js'
import * as transactionService from './transactionService.js'

const serviceName = 'CREDIT_CARD'

const getCreditCard = async (reqData) => {
  return await categoryService.getCategory(reqData, serviceName)
}

const addCreditCard = async (reqData) => {
  return await categoryService.addCategory(reqData, serviceName)
}

const updateCreditCard = async (reqData) => {
  return await categoryService.updateCategory(reqData, serviceName)
}

const deleteCreditCard = async (reqData) => {
  return await categoryService.deleteCategory(reqData, serviceName)
}

const getCreditCards = async () => {
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
  getCreditCard,
  addCreditCard,
  updateCreditCard,
  deleteCreditCard,
  getCreditCards,
  getTransaction,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactions
}
