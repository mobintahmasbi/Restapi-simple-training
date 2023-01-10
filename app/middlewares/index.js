const bdp = require('body-parser')
const corse = require('cors')
module.exports = (app) => {
  app.use(corse())
  app.use(bdp.json())
}
