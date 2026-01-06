const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUserRegistration } = require('../middleware/validation');

// User Registration
router.post('/register', validateUserRegistration, userController.registerUser);

// User Login
router.post('/login', userController.loginUser);

// Get All Patients
router.get('/getPatient', userController.getAllPatients);

// Get Patient By ID
router.get('/getPatient/:id', userController.getPatientById);

// Update Patient
router.put('/updatePatient/:id', userController.updatePatient);

// Delete Patient
router.delete('/remove/:id', userController.deletePatient);

module.exports = router;
