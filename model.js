const mongoose = require('mongoose')

const {{name}}Schema = mongoose.Schema({
    key: { type: String }
})

module.exports = mongoose.model('{{name_upper_first}}', {{name}}Schema)