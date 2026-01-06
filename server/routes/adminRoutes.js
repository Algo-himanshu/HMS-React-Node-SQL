const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin Login
router.post('/admin/login', adminController.loginAdmin);

module.exports = router;
