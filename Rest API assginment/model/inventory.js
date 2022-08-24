const mongoose = require('mongoose')

const inventory = mongoose.model('inventory', {
    name: {
        type:String,
        require: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})


module.exports = inventory;