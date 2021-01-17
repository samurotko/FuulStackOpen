require('dotenv').config()

let PORT = process.env.PORT
let MONGO_URL = process.env.MONGO_URL
let SECRET = process.env.SECRET

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}


module.exports = {
  MONGO_URL,
  PORT,
  SECRET
}