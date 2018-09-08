'use strict'

const express = require('express')
const auth = require('../middlewares/auth')
const api = express.Router()

const userCtrl = require('../controllers/user')

api.get('/users', auth, userCtrl.getUsers)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

module.exports = api
