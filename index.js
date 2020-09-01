const express = require('express')
const app = express()
const config = require('./config')
const morgan = require('morgan')
const checkDb = require('./routes/checkDb')
const bodyParser = require('body-parser')
const portfinder = require('portfinder')
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true}))

//express session 
const session = require('express-session')
const sessionStore = require('express-session-sequelize')
const SessionStore = sessionStore(session.Store)
const db = require('./models')
const sequelizeSessionStore = new SessionStore({
    db: db.sequelize,
})
app.use(session({
    secret: 'anystringvalue',
    store: sequelizeSessionStore,
    saveUninitialized: true,
    cookie: { secure: 'auto' },
    resave: false
}))

//express session end


//view engine start
const expressHbs = require('express-hbs')
const path = require('path')
const rootPath = path.resolve(__dirname)
const viewsPath = path.join(rootPath, 'views')

app.engine('hbs', expressHbs.express4({
  partialsDir: path.join(viewsPath, 'components'),
  layoutsDir: path.join(viewsPath, 'layouts'),
  defaultLayout: path.join(viewsPath, 'layouts', 'default.hbs'),
}))
app.set('view engine', 'hbs');
app.set('views', viewsPath);
//view engine end

//Route Start
const checkIsLogin = require('./lib/checkIsLoggedIn')
const login = require('./routes/login')
const logOut = require('./lib/logOut')

app.get('/', (req, res) => res.redirect('/login'))
app.get('/login', login.get)
app.post('/login', login.post)
app.get('/logout', logOut)
app.get('/dashboard', checkIsLogin, (req, res) => res.render('pages/dashboard'))
app.get('/check-db', checkDb)
//Route End

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
