import { error as logError } from './log.js'

const errorJson = (loc, ...msgs) => {
  logError(loc, ...msgs)
  return { error: msgs[0] }
}

const errorPromise = (loc, ...msgs) => {
  logError(loc, ...msgs)
  return new Promise(resolve => {
    resolve({ error: msgs[0] })
  })
}

export { errorJson, errorPromise }