import { fileURLToPath } from 'url'
import * as bankRepository from '../repository/bankRepository.js'
import { errorPromise } from '../utils/errorTemplate.js'

const getBank = async (reqData) => {
  if(reqData && reqData.id)
    return await bankRepository.getBank(reqData.id)
  return await errorPromise(fileURLToPath(import.meta.url), 'Please provide valid Bank ID.')
}

const getBanks = async () => {
  return await bankRepository.getBanks()
}

export {
  getBank,
  getBanks
}
