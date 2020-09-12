const express = require('express')
const route = express.Router()

const verifyUsersData = require('../../verifyUsersData')

route.get('/', (req, res) => {
  return res.render('index')
})

route.post('/login', (req, res) => {
  const userInfo = req.body
  const user = verifyUsersData(userInfo)
  res.redirect(`/user/${user.firstName}`)
})

module.exports = route