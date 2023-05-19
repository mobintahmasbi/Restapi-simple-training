const express = require('express')
const { register, login } = require('../controllers/account')

const accountRouter = express.Router()

accountRouter.post('/', register)
accountRouter.get('/', login)

module.exports = accountRouter
