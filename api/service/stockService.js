import * as categoryService from './categoryService.js'

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

export {
  getStock,
  addStock,
  updateStock,
  deleteStock,
  getStocks
}
