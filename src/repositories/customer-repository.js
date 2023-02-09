'use strict'

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.authenticate = async (data) => {
    const res = Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.getById = async (id) => {
    var res = Customer.findById(id);
    return res;
}

exports.get = async () => {
    var res = Customer.find();
    return res;
}

exports.post = async (data) => {
    var customer = new Customer(data)
    await customer.save();
}

exports.delete = async (id) => {
    await Customer.findByIdAndRemove(id);
}

exports.put = async (data) => {
    await Customer
        .findByIdAndUpdate(data.id, {
            $set: {
                name : data.name,
                lastname : data.lastname,
                email : data.email,
                password : data.password
            }
        });
}