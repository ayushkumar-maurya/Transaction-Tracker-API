import mysql from 'mysql2'
import { fileURLToPath } from 'url'
import * as log from '../utils/log.js'

class DbConn {
  static conn = null

  static init() {
    const info = {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }

    const tempConn = mysql.createConnection(info)

    tempConn.connect(err => {
      if(err)
        log.error(fileURLToPath(import.meta.url), 'Database connection unsuccessful!', err)
      else
        log.info(fileURLToPath(import.meta.url), 'Database connected successfully!')
    })

    DbConn.conn = tempConn
  }
}

export default DbConn
