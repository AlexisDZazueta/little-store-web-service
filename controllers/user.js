'use strict'

const User = require('../models/user')
const service = require('../services')

signUp = (req, res) => {
  const user = new User({
    email: req.body.email,
    pass: req.body.pass,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })

  user.save(err => {
    if (err) {
      return res.status(500).send({ 
        message: `Server error: ${err}` 
      })
    }

    res.status(201).send({ 
      message: `You have sign up successfully`, 
      token: service.createToken(user)
    })
  })
}

signIn = (req, res) => {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) {
      return res.status(500).send({
        message: `Server error: ${err}`
      })
    }
    if (!user) {
      return res.status(404).send({
        message: `User not found or not exist`
      })
    }

    req.user = user
    res.status(200).send({
      message: `You have sign in successfully`, 
      token: service.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}