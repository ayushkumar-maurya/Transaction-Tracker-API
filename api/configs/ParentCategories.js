import { fileURLToPath } from 'url'
import DbConn from './DbConn.js'
import * as log from '../utils/log.js'

class ParentCategories {
  static parentCategories = {}

  static init() {
    const sql = 'SELECT id, name FROM parent_categories'

    return new Promise((resolve, reject) => {
      DbConn.conn.query(sql, (err, data) => {
        if(err) {
          log.error(fileURLToPath(import.meta.url), 'Unable to fetch parent categories!', err)
          reject()
        }
        else {
          if(data) {
            for(let rec of data)
              ParentCategories.parentCategories[rec.name] = rec.id
            log.info(fileURLToPath(import.meta.url), 'Fetched parent categories successfully!')
          }
          resolve()
        }
      })
    })
  }
}

export default ParentCategories
