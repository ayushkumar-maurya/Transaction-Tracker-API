import * as categoryService from './categoryService.js'

const serviceName = 'MISC'

const getMiscCategory = async (reqData) => {
  return await categoryService.getCategory(reqData, serviceName)
}

const addMiscCategory = async (reqData) => {
  return await categoryService.addCategory(reqData, serviceName)
}

const updateMiscCategory = async (reqData) => {
  return await categoryService.updateCategory(reqData, serviceName)
}

const deleteMiscCategory = async (reqData) => {
  return await categoryService.deleteCategory(reqData, serviceName)
}

const getMiscCategories = async () => {
  return await categoryService.getCategories(serviceName)
}

export {
  getMiscCategory,
  addMiscCategory,
  updateMiscCategory,
  deleteMiscCategory,
  getMiscCategories
}
