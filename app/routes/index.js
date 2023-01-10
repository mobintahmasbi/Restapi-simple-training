const usersRouter = require('./usersRouter')
module.exports = (app) => {
  app.use('/api/v1/users', usersRouter)
}
