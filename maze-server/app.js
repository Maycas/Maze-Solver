/**
 * Required External Modules
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const solverApi = require('./routes/solverAPI')

/**
 * App Variables
 */
const app = express()
const port = process.env.PORT || '8080'

/**
 *  App Configuration
 */
app.set('port', port)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(morgan('dev'))

/**
 * Routes Definitions
 */
app.use('/', solverApi)

// catch 404 and forward to global error handler
app.use((req, res, next) => {
  let err = new Error('File Not Found')
  err.status = 404
  next(err)
})

// Express's global error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  if (err.errors) {
    // Errors coming from Mongoose
    res.json(err)
  } else {
    // Errors coming from middleware
    res.json({
      _message: err.message,
      status: err.status
    })
  }
})
/**
 * Server Activation
 */
const server = app.listen(app.get('port'), () => {
  console.log('Express running in: ' + 'http://localhost:' + server.address().port)
})

module.exports = server
