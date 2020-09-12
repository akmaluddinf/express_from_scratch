const path = require('path')
const rootPath = path.resolve(__dirname + '/../')
const uploadPath = path.join(rootPath, 'uploads')

module.exports = {
    rootPath,
    uploadPath
}