const mongoose = require('mongoose')
const { MONGO_HOST, MONGO_PORT, MONGO_DBNAME } = process.env
mongoose.connection.on('error', (error) => {
  console.log('conection to mongodb makes trouble', error.message)
})
mongoose.set('strictQuery', false)
const startmongo = () => {
  mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`)
}
module.exports = startmongo
