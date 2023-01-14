/* eslint-disable camelcase */
const UserModel = require('../models/userModel')
const _ = require('lodash')
const userList = async (req, res) => {
  try {
    let filter = {}
    if (_.has(req.query, 'fields')) {
      filter = req.query.fields.split(',').reduce((total, currentvalue) => {
        return { [currentvalue]: 1, ...total }
      }, {})
    }
    const users = await UserModel.find({}, filter)
    res.send({
      sucess: true,
      message: 'لیست کاربران با موفقیت نمایش داده شد',
      data: {
        users
      }
    })
  } catch (error) {
    console.log(error.message)
  }
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
