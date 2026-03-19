import { fileURLToPath } from 'url'
import * as bankRepository from '../repository/bankRepository.js'
import { errorJson } from '../utils/errorTemplate.js'

const getBank = async (reqData) => {
  if(reqData && reqData.id)
    return await bankRepository.getBank(reqData.id)
  return errorJson(fileURLToPath(import.meta.url), 'Please provide valid Bank ID!')
}

const addBank = async (reqData) => {
  try {
    if(!reqData)
      throw new Error('Some error occurred while adding Bank. Please try again!')

    let name = reqData.name
    let description = reqData.description

    if(!name)
      throw new Error('Please enter bank name!')
    name = name.trim()
    if(name.length === 0)
      throw new Error('Please enter valid bank name!')

    if(description)
      description = description.trim()

    const existingBank = await bankRepository.getBankFromName(name)
    if(existingBank && existingBank.name)
      throw new Error(`Bank with name ${name} already exists!`)

    const result = await bankRepository.addBank({ name, description })
    if(result && result.insertId)
      return { insertedId: result.insertId }
    
    throw new Error('Some error occurred while adding Bank. Please try again!')
  }
  catch(err) {
    return errorJson(fileURLToPath(import.meta.url), err.message)
  }
}

const updateBank = async (reqData) => {
  try {
    if(!reqData)
      throw new Error('Some error occurred while updating Bank. Please try again!')

    let id = reqData.id
    let name = reqData.name
    let description = reqData.description

    if(!id)
      throw new Error('Please provide Bank ID!')

    if(!name)
      throw new Error('Please enter bank name!')
    name = name.trim()
    if(name.length === 0)
      throw new Error('Please enter valid bank name!')

    if(description)
      description = description.trim()

    const currBank = await bankRepository.getBank(id)
    if(!(currBank && currBank.id))
      throw new Error(`Bank does not exist to update!`)

    const existingBank = await bankRepository.getBankFromName(name)
    if(existingBank && existingBank.id !== id && existingBank.name)
      throw new Error(`Bank with name ${name} already exists!`)

    const result = await bankRepository.updateBank({ id, name, description })
    if(result && result.affectedRows)
      return { affectedRows: result.affectedRows }
    
    throw new Error('Some error occurred while updating Bank. Please try again!')
  }
  catch(err) {
    return errorJson(fileURLToPath(import.meta.url), err.message)
  }
}

const getBanks = async () => {
  return await bankRepository.getBanks()
}

export {
  getBank,
  addBank,
  updateBank,
  getBanks
}
