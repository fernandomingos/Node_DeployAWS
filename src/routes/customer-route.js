'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/auth-services');

router.get('/', controller.get);
router.post('/', controller.post);
router.get('/admin/:id', controller.getById);
router.delete('/', authService.authorize, controller.delete);
router.put('/update', authService.authorize, controller.put);
router.post('/authenticate', controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshtoken);

module.exports = router;