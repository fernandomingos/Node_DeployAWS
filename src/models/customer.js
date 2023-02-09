'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    name: {
        type: String,
        require: [true, 'O campo name é obrigatório!'],
        trim: true
    },
    lastname: {
        type: String,
        required: [true, 'O campo lastname é obrigatório!'],
        trim: true
    },
    email: {
        type: String,
        require: [true, 'O campo email é obrigatório!']
    },
    password: {
        type: String,
        require: [true, 'O campo password é obrigatório!']
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }]
});

module.exports = mongoose.model('Customer', schema);