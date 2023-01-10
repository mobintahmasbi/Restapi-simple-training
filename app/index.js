const express = require('express')
const app = express()
const boot = require('./middlewares')
boot(app)
module.exports = (port) => {
  app.listen(port, () => {
    console.log(`app is runnig on port ${port}`)
  })
}
