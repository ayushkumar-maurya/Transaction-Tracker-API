import mysql from 'mysql2'
import * as log from '../utils/log.js'

class Conn {
  static dbConn = null

  static initConn() {
    const configInfo = {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }

    const tempConn = mysql.createConnection(configInfo)

    tempConn.connect(err => {
      if(err)
        log.error(log.fileURLToPath(import.meta.url), 'Database connection unsuccessful!', err)
      else
        log.info(log.fileURLToPath(import.meta.url), 'Database connected successfully!')
    })

    Conn.dbConn = tempConn
  }
}

export default Conn
