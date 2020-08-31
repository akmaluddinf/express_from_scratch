const db = require('../models')

const checkDb = (req, res) => {
    db.sequelize.authenticate().then(
        () => res.send('connected'),
        () => res.send('error')
    )
}

module.exports = checkDb