'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.set('useCreateIndex', true)
mongoose.connect(config.db, { useNewUrlParser: true }, (err, res) => {
  if (err) {
    return console.log(`Database connection: ${err}`)
  }

  console.log('Connection successful')
  
  app.listen(config.port, () => {
    console.log(`API Rest running on port: ${config.port}`)
  })
})
