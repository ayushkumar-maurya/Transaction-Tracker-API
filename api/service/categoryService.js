import { fileURLToPath } from 'url'
import * as categoryRepository from '../repository/categoryRepository.js'
import ParentCategories from '../configs/ParentCategories.js'
import { notifyError } from '../utils/log.js'

const getCategory = async (reqData, parentName) => {
  if(reqData && reqData.id) {
    let result = await categoryRepository.getCategory(reqData.id, ParentCategories.getId(parentName))
    if(result && result.id)
      return result
    return notifyError(fileURLToPath(import.meta.url), 'Unable to retrieve the details!')
  }
  return notifyError(fileURLToPath(import.meta.url), 'Please provide valid ID!')
}

const addCategory = async (reqData, parentName) => {
  try {
    if(!reqData)
      throw new Error('Some error occurred. Please try again!')

    let name = reqData.name
    let description = reqData.description

    if(!name)
      throw new Error('Please enter the name!')
    name = name.trim()
    if(name.length === 0)
      throw new Error('Please enter valid name!')

    if(description)
      description = description.trim()

    const existingCategory = await categoryRepository.getCategoryFromName(name, ParentCategories.getId(parentName))
    if(existingCategory && existingCategory.name)
      throw new Error(`${name} already exists!`)

    const result = await categoryRepository.addCategory(ParentCategories.getId(parentName), name, description)
    if(result && result.insertId)
      return { insertedId: result.insertId }
    
    throw new Error('Some error occurred. Please try again!')
  }
  catch(err) {
    return notifyError(fileURLToPath(import.meta.url), err.message)
  }
}

const updateCategory = async (reqData, parentName) => {
  try {
    if(!reqData)
      throw new Error('Some error occurred. Please try again!')

    let id = reqData.id
    let name = reqData.name
    let description = reqData.description

    if(!id)
      throw new Error('Please provide ID!')

    if(!name)
      throw new Error('Please enter the name!')
    name = name.trim()
    if(name.length === 0)
      throw new Error('Please enter valid name!')

    if(description)
      description = description.trim()

    const existingCategory = await categoryRepository.getCategoryFromName(name, ParentCategories.getId(parentName))
    if(existingCategory && existingCategory.id !== id && existingCategory.name)
      throw new Error(`${name} already exists!`)

    const result = await categoryRepository.updateCategory(id, ParentCategories.getId(parentName), name, description)
    if(result && result.affectedRows)
      return { affectedRows: result.affectedRows }
    
    throw new Error('Some error occurred. Please try again!')
  }
  catch(err) {
    return notifyError(fileURLToPath(import.meta.url), err.message)
  }
}

const deleteCategory = async (reqData, parentName) => {
  try {
    if(!reqData)
      throw new Error('Some error occurred. Please try again!')

    let id = reqData.id

    if(!id)
      throw new Error('Please provide ID!')

    const result = await categoryRepository.deleteCategory(id, ParentCategories.getId(parentName))
    if(result && result.affectedRows)
      return { affectedRows: result.affectedRows }
    
    throw new Error('Some error occurred. Please try again!')
  }
  catch(err) {
    return notifyError(fileURLToPath(import.meta.url), err.message)
  }
}

const getCategories = async (parentName) => {
  return await categoryRepository.getCategories(ParentCategories.getId(parentName))
}

export {
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories
}
