const usersRouter = require('./usersRouter')
const accountRouter = require('./accountRouter')

module.exports = (app) => {
  app.use('/api/v1/users', usersRouter)
  app.use('/api/v1/account', accountRouter)
}
