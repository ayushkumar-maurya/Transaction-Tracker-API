import { fileURLToPath } from 'url'
import chalk from 'chalk'

const handleLog = (type, loc, ...msgs) => {
  console.log(`\n[${type}] Transaction Tracker API: ${loc}`)
  for(let msg of msgs)
    console.log(msg)
   console.log()
}

const info = (loc, ...msgs) => {
  handleLog('INFO', loc, ...msgs)
}

const error = (loc, ...msgs) => {
  handleLog(chalk.red('ERROR'), loc, ...msgs)
}

export { info, error, fileURLToPath }
