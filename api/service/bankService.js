import * as bankRepository from '../repository/bankRepository.js'

const getBanks = async () => {
  return await bankRepository.getBanks()
}

export {
  getBanks
}
