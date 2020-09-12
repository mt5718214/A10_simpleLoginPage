const express = require('express')
const route = express.Router()

const login = require('./modules/login')
const user = require('./modules/user')

route.use('/', login)
route.use('/user', user)


module.exports = route