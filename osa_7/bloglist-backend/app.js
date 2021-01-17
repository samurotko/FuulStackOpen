
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')
const middlewares  = require('./middlewares');
const notesRouter = require('./controllers/blogs')
const config = require('./utils/config')
const logger = require('./utils/logger')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const mongoUrl = config.MONGO_URL
logger.info('connecting to', mongoUrl, typeof mongoUrl)
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(result => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message)
  })




const app = express()
app.use(express.json())
app.use(cors())
app.use(middlewares.tokenExtractor)
app.use('/api/blogs', notesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testroter')
  app.use('/api/testing', testingRouter)
}





module.exports=app