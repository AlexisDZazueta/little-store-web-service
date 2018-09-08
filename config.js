'use strict'

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/little-store',
  SECRET_TOKEN: '4471E5F03FA855443EC0D5C7C1649BC1',
  ACCOUNT_SID: 'AC9a8369d0b287fb8f05f45543a1a547b0',
  AUTH_TOKEN: '9a5eb296bb0d9a767cf771ba82f8e868'
}
