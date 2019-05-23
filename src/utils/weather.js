const request = require('request-promise')

async function getWeather(city, apiKey) {
    return request({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        qs: {
            q: `${city}`,
            APPID: apiKey
        },
        json: true
    });
}

module.exports = {
    getWeather
}
