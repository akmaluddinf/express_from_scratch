const express = require('express')
const app = express()
const config = require('./config')
const login = (req, res) => res.send('login')
const dashboard = (req, res) => res.send('dashboard')
const checkIsLoggedIn = require('./lib/checkIsLoggedIn')

app.get('/', (req, res) => res.redirect('/login'))
app.get('/login', login)
app.get('/dashboard', checkIsLoggedIn, dashboard)

app.listen(config.port, () => {})