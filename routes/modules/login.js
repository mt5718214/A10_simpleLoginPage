const express = require('express')
const route = express.Router()

const verifyUsersData = require('../../verifyUsersData')

let fail = false

route.get('/', (req, res) => {
  return res.render('index', { fail: fail })
})

route.post('/login', (req, res) => {
  const userInfo = req.body
  const user = verifyUsersData(userInfo)
  if (user) {
    res.redirect(`/user/${user.firstName}`)
  } else {
    fail = true
    res.redirect('/')
  }
})

module.exports = route