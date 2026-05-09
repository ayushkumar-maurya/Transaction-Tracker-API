import { fileURLToPath } from 'url'
import * as transactionRepository from '../repository/transactionRepository.js'
import ParentCategories from '../configs/ParentCategories.js'
import { notifyError } from '../utils/log.js'
import { getCategory } from './categoryService.js'

const getTransaction = async (reqData, parentName) => {
  if(reqData && reqData.id) {
    let result = await transactionRepository.getTransaction(reqData.id, ParentCategories.getId(parentName))
    if(result && result.id)
      return result
    return notifyError(fileURLToPath(import.meta.url), 'Unable to retrieve the transactions!')
  }
  return notifyError(fileURLToPath(import.meta.url), 'Please provide valid ID!')
}

const addTransaction = async (reqData, parentName) => {
  try {
    if(!reqData)
      throw new Error('Some error occurred. Please try again!')

    let categoryId = reqData.categoryId
    let date = reqData.date
    let description = reqData.description
    let deposit = reqData.deposit
    let withdrawal = reqData.withdrawal
    let remark = reqData.remark

    if(!categoryId)
      throw new Error('Please mention Category ID!')

    if(date && !(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date)))
      throw new Error('Please mention date in correct format i.e., YYYY-MM-DD!')

    if(description)
      description = description.trim()

    if(!deposit && !withdrawal)
      throw new Error('Please mention either deposit or withdrawal amount!')

    if(remark)
      remark = remark.trim()

    // Checking whether the category belongs to correct parent category.
    let category = await getCategory({ id: categoryId }, parentName)
    if(!(category && category.id))
      throw new Error('Incorrect data provided!')

    const result = await transactionRepository.addTransaction(categoryId, date, description, deposit, withdrawal, remark)
    if(result && result.insertId)
      return { insertedId: result.insertId }

    throw new Error('Some error occurred. Please try again!')
  }
  catch(err) {
    return notifyError(fileURLToPath(import.meta.url), err.message)
  }
}


const updateTransaction = async (reqData, parentName) => {
  try {
    if(!reqData)
      throw new Error('Some error occurred. Please try again!')

    let id = reqData.id
    let categoryId = reqData.categoryId
    let date = reqData.date
    let description = reqData.description
    let deposit = reqData.deposit
    let withdrawal = reqData.withdrawal
    let remark = reqData.remark

    if(!id)
      throw new Error('Please provide ID!')

    if(!categoryId)
      throw new Error('Please mention Category ID!')

    if(date && !(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date)))
      throw new Error('Please mention date in correct format i.e., YYYY-MM-DD!')

    if(description)
      description = description.trim()

    if(!deposit && !withdrawal)
      throw new Error('Please mention either deposit or withdrawal amount!')

    if(remark)
      remark = remark.trim()

    // Checking whether the category belongs to correct parent category.
    let category = await getCategory({ id: categoryId }, parentName)
    if(!(category && category.id))
      throw new Error('Incorrect data provided!')

    const result = await transactionRepository.updateTransaction(id, categoryId, date, description, deposit, withdrawal, remark)
    if(result && result.affectedRows)
      return { affectedRows: result.affectedRows }
    
    throw new Error('Some error occurred. Please try again!')
  }
  catch(err) {
    return notifyError(fileURLToPath(import.meta.url), err.message)
  }
}

const deleteTransaction = async (reqData, parentName) => {
  try {
    if(!reqData)
      throw new Error('Some error occurred. Please try again!')

    let id = reqData.id

    if(!id)
      throw new Error('Please provide ID!')

    // Checking whether the transaction belongs to correct parent category.
    let transaction = await transactionRepository.getTransaction(id, ParentCategories.getId(parentName))
    if(!(transaction && transaction.id))
      throw new Error('Incorrect data provided!')

    const result = await transactionRepository.deleteTransaction(id)
    if(result && result.affectedRows)
      return { affectedRows: result.affectedRows }
    
    throw new Error('Some error occurred. Please try again!')
  }
  catch(err) {
    return notifyError(fileURLToPath(import.meta.url), err.message)
  }
}

export {
  getTransaction,
  addTransaction,
  updateTransaction,
  deleteTransaction
}
