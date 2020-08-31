const express = require('express')
const app = express()
const config = require('./config')
const login = (req, res) => res.send('login')
const dashboard = (req, res) => res.send('dashboard')
const checkIsLoggedIn = require('./lib/checkIsLoggedIn')
const checkDb = require('./routes/checkDb')

app.get('/', (req, res) => res.redirect('/login'))
app.get('/login', login)
app.get('/dashboard', checkIsLoggedIn, dashboard)

app.get('/check-db', checkDb)

const portfinder = require('portfinder');

portfinder.getPortPromise({
    port: config.port
})
    .then((port) => {
        app.listen(config.port, () => { })
    })
    .catch((err) => console.log(err))