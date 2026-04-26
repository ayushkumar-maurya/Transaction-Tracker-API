import { fileURLToPath } from 'url'
import DbConn from '../configs/DbConn.js'
import * as log from '../utils/log.js'

const getTransaction = (id, parentId) => {
  const sql = `
    SELECT
      t.id,
      t.category_id,
      c.name AS category_name,
      t.date,
      t.description,
      t.deposit,
      t.withdrawal,
      t.remark,
      t.created_at
    FROM transactions t
    INNER JOIN categories c
    ON t.category_id = c.id
    WHERE t.id = ?
    AND c.parent_id = ?;
  `

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

export {
  getTransaction
}
