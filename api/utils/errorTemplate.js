import { error as logError } from './log.js'

const errorJson = (loc, ...msgs) => {
  logError(loc, ...msgs)
  return { error: msgs[0] }
}

export { errorJson }