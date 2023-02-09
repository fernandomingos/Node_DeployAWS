'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/auth-services');

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/admin/:id', authService.authorize, controller.getById);
router.delete('/', controller.delete);
router.put('/update', controller.put);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshtoken);

module.exports = router;