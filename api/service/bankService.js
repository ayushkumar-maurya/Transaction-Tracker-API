import { fileURLToPath } from 'url'
import * as bankRepository from '../repository/bankRepository.js'
import { errorPromise } from '../utils/errorTemplate.js'

const getBank = async (reqData) => {
  if(reqData && reqData.id)
    return await bankRepository.getBank(reqData.id)
  return await errorPromise(fileURLToPath(import.meta.url), 'Please provide valid Bank ID.')
}

const addBank = async (reqData) => {
  let errorMsg = 'Unable to add bank.'

  if(reqData) {
    let name = null
    let description = null

    if(reqData.name)
      name = reqData.name.trim()
    if(reqData.description)
      description = reqData.description.trim()

    if(name) {
      const existingBank = await bankRepository.getBankFromName(name)
      if(!existingBank) {
        const result = await bankRepository.addBank({ name, description })
        if(result.insertId)
          return { insertedId: result.insertId }
        else if(result.error)
          return result
      }
      else if(existingBank.name)
        errorMsg = `Bank with name ${name} already exists.`
    }
    else
      errorMsg = 'Please provide valid Bank name.'
  }

  return await errorPromise(fileURLToPath(import.meta.url), errorMsg)
}

const getBanks = async () => {
  return await bankRepository.getBanks()
}

export {
  getBank,
  addBank,
  getBanks
}
