import DbConn from '../configs/DbConn.js'
import * as log from '../utils/log.js'


const getBanks = async () => {
  let sql = 'SELECT id, name, description FROM banks'

  let records = await new Promise(resolve => {
    let result = null

    DbConn.conn.query(sql, (err, data) => {
      if(err)
        log.error(log.fileURLToPath(import.meta.url), err)
      else
        result = data
      resolve(result)
    })
  })

  return records
}

export {
  getBanks
}
