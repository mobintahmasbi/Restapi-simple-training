const bdp = require('body-parser')
const corse = require('cors')
const cookieParser = require('cookie-parser')
const authorize = require('./authorize')

module.exports = (app) => {
  app.use(corse())
  app.use(bdp.json())
  app.use(cookieParser())
  app.use('/api/v1/users', authorize)
}
