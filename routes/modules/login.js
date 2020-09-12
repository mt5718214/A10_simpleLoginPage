const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
  return res.render('index')
})

route.post('/login', (req, res) => {
  const userInfo = req.body
  console.log(userInfo)
  res.redirect('/')
})

module.exports = route