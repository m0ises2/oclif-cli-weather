const {Command, flags} = require('@oclif/command')
const {getRedisConnection} = require('../../utils/redis')
const chalk = require('chalk')

class ClearCommand extends Command {
  async run() {
    const {flags} = this.parse(ClearCommand)
    const {host, port, password} = flags

    try {
      const con = await getRedisConnection(port, host, password || null)

      await con.flushdb()

      this.log(`${chalk.bold.green('Cleared')}`)

      process.exit()
    } catch (error) {
      this.error(`${chalk.bold.red(error.message? error.message : error.error.message)}`)
    }
  }
}

ClearCommand.description = `Helps to flush all keys from redis
...
Extra documentation goes here
`

ClearCommand.flags = {
  host: flags.string({required: true, description: 'Redis host'}),
  port: flags.string({required:true, description: 'Redis port'}),
  password: flags.string({description: 'Redis password'}),
}

module.exports = ClearCommand
