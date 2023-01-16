const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
router.get('/', userController.userList)
router.post('/', userController.addUser)
router.get('/:id', userController.getUser)
router.delete('/:id', userController.deleteUser)
router.patch('/:id', userController.updateUser)
module.exports = router
