const bcrypt = require('bcrypt')
const get = (req, res) => res.render('pages/login')
const db = require('../models')

const post = async(req, res) => {
    const { name, password } = req.body
    const user = await db.User.findOne({ where: { name }})
    if(user && bcrypt.compareSync(password, user.password))
        req.session.user = user,
        req.session.save(() => res.redirect('/dashboard'))
    else{
        res.redirect('/login')
    }
}

module.exports = {
    get,
    post
}