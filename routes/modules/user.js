const express = require('express')
const route = express.Router()

route.get('/:userName', (req, res) => {
  const user = req.params.userName
  res.render('user', { user })
})

module.exports = route