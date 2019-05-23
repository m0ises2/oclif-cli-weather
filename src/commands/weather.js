const {Command, flags} = require('@oclif/command')
const request = require('request-promise')

class WeatherCommand extends Command {
  async run() {
    const {flags} = this.parse(WeatherCommand)
    try {
      const weatherResults = await request({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
          q: `${flags.city}`,
          APPID: flags.apiKey
        },
        json: true
      });
      this.log(`${flags.city} weather details: 
        Temp: ${weatherResults.main.temp}
        Description: ${weatherResults.weather[0].description}
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
