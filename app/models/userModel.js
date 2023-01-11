const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  wallet: Number,
  created_At: { type: Date, default: Date.now() },
  updated_At: { type: Date, default: Date.now() }
})
const userModel = mongoose.model('User', userSchema)
module.exports = userModel
