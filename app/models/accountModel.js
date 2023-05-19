const { model, Schema } = require('mongoose')

const accountSchema = new Schema({
  userName: { type: String, required: true, min: 6, max: 20, unique: true },
  password: { type: String, required: true, min: 8, max: 20 }
})

module.exports = model('Account', accountSchema)
