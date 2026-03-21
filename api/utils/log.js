import chalk from 'chalk'

const handleLog = (type, loc, ...msgs) => {
  const part1 = type
  const part2 = chalk.hex('#C792EA')('Transaction Tracker API:')
  const part3 = chalk.hex('#ECC48D')(loc)

  console.log(`${part1} ${part2} ${part3}`)
  for(let msg of msgs)
    console.log(chalk.hex('#D7DBE0')(msg))
}

const info = (loc, ...msgs) => {
  handleLog(chalk.hex('#22DA6E')('[INFO]'), loc, ...msgs)
}

const error = (loc, ...msgs) => {
  handleLog(chalk.hex('#EF5350')('[ERROR]'), loc, ...msgs)
}

const notifyError = (loc, ...msgs) => {
  error(loc, ...msgs)
  return { error: msgs[0] }
}

export { info, error, notifyError }
