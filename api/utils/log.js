import chalk from 'chalk'

const handleLog = (type, loc, ...msgs) => {
  console.log(chalk.yellow('-------------------------START-------------------------'))
  console.log(`[${type}] Transaction Tracker API: ${loc}`)
  for(let msg of msgs)
    console.log(msg)
  console.log(chalk.yellow('--------------------------END--------------------------'))
}

const info = (loc, ...msgs) => {
  handleLog(chalk.green('INFO'), loc, ...msgs)
}

const error = (loc, ...msgs) => {
  handleLog(chalk.red('ERROR'), loc, ...msgs)
}

export { info, error }
