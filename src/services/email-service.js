'use strict';
var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgrid);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'email@email.com',
        subject: subject,
        html: body
    })
}