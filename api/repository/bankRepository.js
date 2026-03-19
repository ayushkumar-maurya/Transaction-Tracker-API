import { fileURLToPath } from 'url'
import DbConn from '../configs/DbConn.js'
import { errorJson } from '../utils/errorTemplate.js';

const getBank = id => {
  let sql = 'SELECT id, name, description FROM banks WHERE id = ?';

  return new Promise(resolve => {
    DbConn.conn.query(sql, [id], (err, data) => {
      let result = null
      if(err)
        result = errorJson(fileURLToPath(import.meta.url), 'Unable to fetch bank!', err)
      else if(data.length > 0)
        result = data[0]
      resolve(result)
    })
  })
}

const getBankFromName = name => {
  let sql = 'SELECT id, name FROM banks WHERE name = ?';

  return new Promise(resolve => {
    DbConn.conn.query(sql, [name], (err, data) => {
      let result = null
      if(err)
        result = errorJson(fileURLToPath(import.meta.url), 'Unable to fetch bank!', err)
      else if(data.length > 0)
        result = data[0]
      resolve(result)
    })
  })
}

const addBank = ({ name, description }) => {
  let sql = 'INSERT INTO banks (name, description) VALUES (?, ?)';

  return new Promise(resolve => {
    DbConn.conn.query(sql, [name, description], (err, data) => {
      let result = null
      if(err)
        result = errorJson(fileURLToPath(import.meta.url), 'Unable to add bank!', err)
      else
        result = data
      resolve(result)
    })
  })
}

const updateBank = ({ id, name, description }) => {
  let sql = 'UPDATE banks SET name = ?, description = ? WHERE id = ?';

  return new Promise(resolve => {
    DbConn.conn.query(sql, [name, description, id], (err, data) => {
      let result = null
      if(err)
        result = errorJson(fileURLToPath(import.meta.url), 'Unable to update bank!', err)
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
        result = errorJson(fileURLToPath(import.meta.url), 'Unable to fetch banks!', err)
      else
        result = data
      resolve(result)
    })
  })
}

export {
  getBank,
  getBankFromName,
  addBank,
  updateBank,
  getBanks
}
