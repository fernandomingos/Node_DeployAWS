'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    var res = Product
        .find({
            isAvaiable: true
        }, 'description price');
    return res;
}

exports.getById = async (id) => {
    var res = Product
        .findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    var res = Product
        .find({
            tag
        },
            'description price tags');
    return res;
}

exports.post = async (req) => {
    var product = new Product()
    product.description = req.body.description;
    product.price = req.body.price;
    product.tags = req.body.tags;

    await product.save();
}

exports.put = async (req) => {
    await Product
        .findByIdAndUpdate(req.body.id, {
            $set: {
                description: req.body.description,
                price: req.body.price,
                isAvaiable: req.body.isAvaiable,
                tags: req.params.tags
            }
        });
}

exports.delete = async (id) => {
    await Product
        .findByIdAndRemove(id);
}