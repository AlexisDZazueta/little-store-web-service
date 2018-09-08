'use strict'

const User = require('../models/user')
const service = require('../services')

const getUsers = (req, res) => {
  User.find({ }, (err, users) => {
    if (err) {
      return res.status(500).send({
        message: `Server error ${err}`
      })
    }
    if (users.length <= 0) {
      return res.status(404).send({
        message: `There are no users`
      })
    }

    res.status(200).send({
      users
    })
  })
}

const signUp = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })

  user.save(err => {
    if (err) {
      return res.status(500).send({ 
        status: 500,
        message: `Server error: ${err}` 
      })
    }

    res.status(201).send({ 
      status: 201,
      message: `You have sign up successfully`, 
      token: service.createToken(user)
    })
  })
}

const signIn = (req, res) => {
  User.find({ email: req.body.email, password: req.body.password }, (err, user) => {
    if (err) {
      return res.status(500).send({
        status: 500,
        message: `Server error: ${err}`
      })
    }
    if (user.length <= 0) {
      return res.status(404).send({
        status: 404,
        message: `User not found or not exist`
      })
    }

    req.user = user
    res.status(200).send({
      status: 200,
      message: `You have sign in successfully`, 
      token: service.createToken(user)
    })
  })
}

module.exports = {
  getUsers,
  signUp,
  signIn
}