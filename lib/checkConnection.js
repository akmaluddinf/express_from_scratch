const db = require('../models')

const checkConnection = async(res) => {
    try {
        await db.sequelize.authenticate()
        res.send('connected')
    } catch (e) {
        res.send('fail to connect')
    } 
}

module.exports = checkConnection