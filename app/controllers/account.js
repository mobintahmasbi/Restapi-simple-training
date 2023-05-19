const Account = require('../models/accountModel')
const jwt = require('jsonwebtoken')
const privateKey = 'yeki bod yeki nabod gheir az khodaye mehrabon hichkas nabod'

const register = async (req, res, next) => {
  try {
    const { userName, password } = req.body
    const result = await Account.create({
      userName,
      password
    })
    res.send({
      userName: result.userName,
      password: result.password
    })
  } catch (e) {
    console.log(e.message)
    res.send('something went wrong!!!')
  }
}

const login = async (req, res, next) => {
  try {
    const { userName, password } = req.body
    const result = await Account.find({
      userName,
      password
    })
    if (result === []) {
      return res.send('userName or password!!!')
    }
    const token = jwt.sign({
      objectId: result[0]._id.toString(),
      userName,
      password
    }, privateKey)
    res.send({
      token,
      msg: 'send the token in cookie for working with api'
    })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = { register, login }
