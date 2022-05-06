const mongoose = require('mongoose');

const coffee = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: String
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'categories'
    },
    images: [String]
}, { timestamps: true })

const Coffee = mongoose.model('coffees', coffee);

module.exports = Coffee