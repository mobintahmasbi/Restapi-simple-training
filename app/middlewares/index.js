const bdp = require('body-parser')
const corse = require('cors')
const auth = require('./athorize')

module.exports = (app) => {
  app.use('/api/v1/users', auth)
  app.use(corse())
  app.use(bdp.json())
}
