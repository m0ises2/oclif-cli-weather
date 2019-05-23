const {Command, flags} = require('@oclif/command')

class Byecommand extends Command {
  async run() {
    const {flags} = this.parse(Byecommand)
    const name = flags.name || 'world'
    const lastname = flags.lastname || 'Fuck'
    this.log(`Bye ${name} ${lastname} from .\\src\\commands\\hello.js`)
  }
}

Byecommand.description = `Describe the command here
...
Extra documentation goes here
`

Byecommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
  lastname: flags.string({char: 'l', description: 'lastname to print'}),
}

module.exports = Byecommand
