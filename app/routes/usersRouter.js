const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
router.get('/', userController.userList)
router.post('/', userController.addUser)
router.get('/:id', userController.getUser)
module.exports = router
