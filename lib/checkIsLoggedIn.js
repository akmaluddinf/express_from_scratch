const checkIsLoggedIn = (req, res, next) => {
    isLoggedIn = true
    if(isLoggedIn) next()
    else res.redirect('/login')
}

module.exports = checkIsLoggedIn