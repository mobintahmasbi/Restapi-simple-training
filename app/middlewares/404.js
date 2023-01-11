module.exports = (app) => {
  app.use((req, res) => {
    res.send({
      statusCode: 404,
      en_massege: "we couldn't find that resource",
      fa_message: 'آدرس مورد نظر یافت نشد'
    })
  })
}
