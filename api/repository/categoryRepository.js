import { fileURLToPath } from 'url'
import DbConn from '../configs/DbConn.js'
import * as log from '../utils/log.js'

const getCategory = (id, parentId) => {
  const sql = 'SELECT id, name, description FROM categories WHERE id = ? AND parent_id = ?'

  return new Promise(resolve => {
    DbConn.conn.query(sql, [id, parentId], (err, data) => {
      let result = null
      if(err)
        result = log.error(fileURLToPath(import.meta.url), err)
      else if(data.length > 0)
        result = data[0]
      resolve(result)
    })
  })
}

const getCategoryFromName = (name, parentId) => {
  const sql = 'SELECT id, name FROM categories WHERE name = ? AND parent_id = ?'

  return new Promise(resolve => {
    DbConn.conn.query(sql, [name, parentId], (err, data) => {
      let result = null
      if(err)
        result = log.error(fileURLToPath(import.meta.url), err)
      else if(data.length > 0)
        result = data[0]
      resolve(result)
    })
  })
}

const addCategory = (parentId, name, description) => {
  const sql = 'INSERT INTO categories (parent_id, name, description) VALUES (?, ?, ?)'

  return new Promise(resolve => {
    DbConn.conn.query(sql, [parentId, name, description], (err, data) => {
      let result = null
      if(err)
        result = log.error(fileURLToPath(import.meta.url), err)
      else
        result = data
      resolve(result)
    })
  })
}

const updateCategory = (id, parentId, name, description) => {
  const sql = 'UPDATE categories SET name = ?, description = ? WHERE id = ? AND parent_id = ?'

  return new Promise(resolve => {
    DbConn.conn.query(sql, [name, description, id, parentId], (err, data) => {
      let result = null
      if(err)
        result = log.error(fileURLToPath(import.meta.url), err)
      else
        result = data
      resolve(result)
    })
  })
}

const deleteCategory = (id, parentId) => {
  const sql = 'DELETE FROM categories WHERE id = ? AND parent_id = ?'

  return new Promise(resolve => {
    DbConn.conn.query(sql, [id, parentId], (err, data) => {
      let result = null
      if(err)
        result = log.error(fileURLToPath(import.meta.url), err)
      else
        result = data
      resolve(result)
    })
  })
}

const getCategories = parentId => {
  const sql = 'SELECT id, name, description FROM categories WHERE parent_id = ? ORDER BY name'

  return new Promise(resolve => {
    DbConn.conn.query(sql, [parentId], (err, data) => {
      let result = null
      if(err)
        result = log.error(fileURLToPath(import.meta.url), err)
      else
        result = data
      resolve(result)
    })
  })
}

export {
  getCategory,
  getCategoryFromName,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories
}
