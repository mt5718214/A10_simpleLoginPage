const express = require('express')
const route = express.Router()

const login = require('./modules/login')

route.use('/', login)

module.exports = route