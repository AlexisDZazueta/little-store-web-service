'use strict'

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
}, { timestamps: true })

UserSchema.pre('save', next => {
  let user = this

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.pass, salt, null, (err, hash) => {
      if (err) {
        return next(err)
      }

      user.pass = hash
      next()
    })
  })
})