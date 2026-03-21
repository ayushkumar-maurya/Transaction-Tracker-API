import * as categoryService from './categoryService.js'

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

export {
  getBank,
  addBank,
  updateBank,
  deleteBank,
  getBanks
}
