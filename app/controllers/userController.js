/* eslint-disable camelcase */
const UserModel = require('../models/userModel')
const userList = (req, res) => {
  res.send({
    sucess: true,
    message: 'لیست کاربران با موفقیت نمایش داده شد'
  })
}
const addUser = async (req, res, next) => {
  try {
    const { first_name, last_name, phone, email } = req.body
    const newUser = new UserModel({
      first_name,
      last_name,
      phone,
      email
    })
    await newUser.save()
    res.send({
      sucess: true,
      message: 'کاربر با موفقیت ایجاد شد',
      userId: newUser._id
    })
  } catch (error) {
    console.log(error.message)
  }
}
module.exports = {
  userList,
  addUser
}
