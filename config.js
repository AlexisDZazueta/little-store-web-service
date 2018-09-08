'use strict'

module.exports = {
  port: process.env.PORT,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/little-store',
  SECRET_TOKEN: '4471E5F03FA855443EC0D5C7C1649BC1'
}
