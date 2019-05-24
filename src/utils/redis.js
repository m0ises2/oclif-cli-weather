const redis = require('redis')

async function getRedisConnection(port, host, password = null) {
  return new Promise((resolve, reject) => {
    const redisOpts = {
      port,
      host,
    }

    if (password) redisOpts.password = password

    const client = redis.createClient(redisOpts);
    client
      .on('ready', () => {
        resolve(client);
      })
      .on('error', error => {
        reject({ error });
      });
  });
}

module.exports = {
  getRedisConnection
}