const checkConnection = require('../lib/checkConnection')

const checkDb = async(req, res) => {
    checkConnection(res)
}

module.exports = checkDb