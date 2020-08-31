const express = require('express')
const app = express()
const config = require('./config')
const login = (req, res) => res.send('login')
const dashboard = (req, res) => res.send('dashboard')
const checkIsLoggedIn = require('./lib/checkIsLoggedIn')
const checkDb = require('./routes/checkDb')
const portfinder = require('portfinder');
const morgan = require('morgan')

app.use(morgan('combined'))

app.get('/', (req, res) => res.redirect('/login'))
app.get('/login', login)
app.get('/dashboard', checkIsLoggedIn, dashboard)

app.get('/check-db', checkDb)


portfinder.getPortPromise({
    port: config.port
})
    .then((port) => {
        app.listen(port, () => { })
    })
    .catch((err) => console.log(err))

const run = async () => {
    try {
        const port = await portfinder.getPortPromise({
            port: config.port
        })
        app.listen(port, ()=> console.log(`listen on port ${port}`))
    } catch (error) {
        console.log(e)
    }
}
run()
