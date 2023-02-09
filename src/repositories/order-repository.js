'use strict'

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async () => {
    var res = Order
        .find({}, 'number status')
        .populate('customer', 'name lastname')
        .populate('items.product', 'description price');
    return res;
}

exports.post = async (data) => {
    var order = new Order(data);
    await order.save();
}