const massive = require('massive')

module.exports = massive(process.env.CONNECTION_STRING)
  