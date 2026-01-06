const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const { validateDoctorRegistration } = require('../middleware/validation');

// Doctor Registration
router.post('/DoctorRegister', validateDoctorRegistration, doctorController.registerDoctor);

// Doctor Login
router.post('/doctorLogin', doctorController.loginDoctor);

// Get All Doctors
router.get('/getDoctors', doctorController.getAllDoctors);

// Get Doctor By ID
router.get('/getDoctor/:id', doctorController.getDoctorById);

// Update Doctor
router.put('/updateDoctor/:id', doctorController.updateDoctor);

// Delete Doctor
router.delete('/removeDoctor/:id', doctorController.deleteDoctor);

module.exports = router;
