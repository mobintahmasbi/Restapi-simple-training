const userGetHandler = (req, res) => {
  res.send({
    sucess: true,
    message: 'لیست کاربران با موفقیت نمایش داده شد'
  })
}
module.exports = {
  userGetHandler
}
