const express = require('express')
var app = express()

app.use( '/',express.static('src/html'))

app.listen(3000, function () {
  console.log('Demo running at: http://localhost:3000/')
})

