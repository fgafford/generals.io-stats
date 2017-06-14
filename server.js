const express = require('express')
var app = express()

// Users
const USERS = {
  '[Bot] Curly-pi': require('./test/gameRecords/Curly-Pi.json') , 
  '[Bot] lmat': null
}

/*
 * Simulate username query endpoint
 */
app.get('/api/validateUsername', (req, res, next) => {
  const user = req.query.u;
  if(user){
    res.send(!!USERS[user]);
  } else {
    res.send(false);
  }
})

/*
 * Simulate replays endpoint
 */
app.get('/api/replaysForUsername?', (req, res, next) => {
  const user = req.query.u

  if(user && !!USERS[user]){
    const offset = req.query.offset || 0;
    const count = req.query.count || 20;

    res.send(USERS[user].slice(offset, count));
  } else {
    res.send(false);
  }
})


app.use( '/',express.static('dist'))

app.listen(3000, function () {
  console.log('Demo running at: http://localhost:3000/')
})

