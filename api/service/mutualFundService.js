import * as categoryService from './categoryService.js'

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

export {
  getMutualFund,
  addMutualFund,
  updateMutualFund,
  deleteMutualFund,
  getMutualFunds
}
