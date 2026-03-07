import { fileURLToPath } from 'url'
import DbConn from '../configs/DbConn.js'
import { errorJson } from '../utils/errorTemplate.js';

const getBank = (id) => {
  let sql = 'SELECT id, name, description FROM banks WHERE id = ?';

  return new Promise(resolve => {
    DbConn.conn.query(sql, [id], (err, data) => {
      let result = null
      if(err)
        result = errorJson(fileURLToPath(import.meta.url), 'Unable to fetch bank.', err)
      else
        result = data
      resolve(result)
    })
  })
}

const getBanks = () => {
  let sql = 'SELECT id, name, description FROM banks'

  return new Promise(resolve => {
    DbConn.conn.query(sql, (err, data) => {
      let result = null
      if(err)
        result = errorJson(fileURLToPath(import.meta.url), 'Unable to fetch banks.', err)
      else
        result = data
      resolve(result)
    })
  })
}

export {
  getBank,
  getBanks
}
