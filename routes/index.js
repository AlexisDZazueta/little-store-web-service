'use strict'

const express = require('express')
const auth = require('../middlewares/auth')
const api = express.Router()

const userCtrl = require('../controllers/user')
const layoutCtrl = require('../controllers/layout')

api.get('/users', auth, userCtrl.getUsers)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)

api.get('/layouts', layoutCtrl.getLayouts)
api.get('/layout/:layoutId', layoutCtrl.getLayout)
api.post('/layout', layoutCtrl.generateLayout)

module.exports = api
