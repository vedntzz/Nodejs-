const mongoose = require('mongoose')

let Customer = mongoose.model('Customer', {
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    address: {
        type: String,
        required: false,
    }
})

module.exports = Customer;