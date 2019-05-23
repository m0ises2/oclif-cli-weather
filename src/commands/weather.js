const {Command, flags} = require('@oclif/command')
const {getWeather} = require('../utils/weather');
const chalk = require('chalk');

class WeatherCommand extends Command {
  async run() {
    const {flags} = this.parse(WeatherCommand)
    try {
      const weatherResults = await getWeather(flags.city, flags.apiKey)
      
      this.log(`The weather in ${chalk.bold.green(flags.city)} is: 
        Temp: ${chalk.bold.yellow(weatherResults.main.temp)}
        Description: ${chalk.bold.yellow(weatherResults.weather[0].description)}
      `);
    } catch (error) {
      this.error(error.error.message)
    }
  }
}

WeatherCommand.description = `Get weather for a given city

Extra documentation goes here
`

WeatherCommand.flags = {
  city: flags.string({char: 'c', description: 'The city to look for the forecast'}),
  apiKey: flags.string({description: 'apiKey need for weatherAPI'}),
}

module.exports = WeatherCommand
