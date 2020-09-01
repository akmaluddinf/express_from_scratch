const checkIsLoggedIn = (req, res, next) => {
    isLoggedIn = req.session.user
    
    if(isLoggedIn) next()
    else res.redirect('/login')
}

module.exports = checkIsLoggedIn