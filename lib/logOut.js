const logOut = (req, res) => {
    //req.session.user = undefined
    //req.session.save(() => res.redirect('/login'))
    req.session.destroy(() => res.redirect('/login'))
}

module.exports = logOut