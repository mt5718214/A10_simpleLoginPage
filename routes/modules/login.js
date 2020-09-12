const express = require('express')
const route = express.Router()

const verifyUsersData = require('../../verifyUsersData')

route.get('/', (req, res) => {
  return res.render('index')
})

route.post('/login', (req, res) => {
  const userInfo = req.body
  const user = verifyUsersData(userInfo)
  console.log(user)
  res.redirect('/')
})

module.exports = route