'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    description: {
        type: String,
        require: [true, 'O campo description é obrigatório!'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'O campo price é obrigatório!'],
    },
    isAvaiable: {
        type: Boolean,
        require: false,
        default: true
    },
    tags: [{
        type: String,
        require: [true, 'O campo tags é obrigatório!'],
    }]
});

module.exports = mongoose.model('Product', schema);