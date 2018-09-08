'use strict'

const express = require('express')
const auth = require('../middlewares/auth')
const api = express.Router()

const userCtrl = require('../controllers/user')

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

module.exports = api
