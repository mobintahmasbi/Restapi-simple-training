const jwt = require('jsonwebtoken')
const privateKey =
  'yeki bod yeki nabod gheir az khodaye mehrabon hichkas nabod'

const auth = (req, res, next) => {
  try {
    const { token } = req.cookies
    if (token === undefined || token === null) {
      return res.send('you have to send token with cookie')
    }
    jwt.verify(token, privateKey)
    next()
  } catch (e) {
    return res.send('invalid token')
  }
}

module.exports = auth
