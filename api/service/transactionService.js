import { fileURLToPath } from 'url'
import * as transactionRepository from '../repository/transactionRepository.js'
import ParentCategories from '../configs/ParentCategories.js'
import { notifyError } from '../utils/log.js'

const getTransaction = async (reqData, parentName) => {
  if(reqData && reqData.id) {
    let result = await transactionRepository.getTransaction(reqData.id, ParentCategories.getId(parentName))
    if(result && result.id)
      return result
    return notifyError(fileURLToPath(import.meta.url), 'Unable to retrieve the transactions!')
  }
  return notifyError(fileURLToPath(import.meta.url), 'Please provide valid ID!')
}

export {
  getTransaction
}
