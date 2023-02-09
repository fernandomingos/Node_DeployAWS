'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-services');

router.get('/', controller.get);
router.get('/admin/:id', controller.getById);
router.get('/tags', controller.getByTag);
router.post('/', authService.isAdmin, controller.post);
router.put('/update', authService.isAdmin, controller.put);
router.delete('/', authService.isAdmin, controller.delete);

module.exports = router;