const mongoose = require('mongoose')

const ItemModel = new mongoose.Schema({
    name: { type: String }
})

module.exports = mongoose.model('ItemModel', ItemModel)