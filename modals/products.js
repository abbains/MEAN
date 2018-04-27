const mongoose = require('mongoose');

const schema = mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    productdescription: {
        type: String,
        required: true
    }
});

const product = module.exports = mongoose.model('product', schema);