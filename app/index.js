const express = require('express')
const app = express()
const boot = require('./middlewares')
const router = require('./routes')
boot(app)
router(app)
require('./middlewares/404')(app)
module.exports = (port) => {
  app.listen(port, () => {
    console.log(`app is runnig on port ${port}`)
  })
}
