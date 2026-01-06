const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const { validateAppointment } = require('../middleware/validation');

// Create Appointment
router.post('/appointment', validateAppointment, appointmentController.createAppointment);

// Get All Appointments (must come before /getAppointment/:id to avoid route conflict)
router.get('/getAppointment', appointmentController.getAllAppointments);

// Get Appointments By Doctor ID
router.get('/getAppointment/:id', appointmentController.getAppointmentsByDoctorId);

// Get Appointments By User ID
router.get('/userAppointment/:id', appointmentController.getAppointmentsByUserId);

// Get Appointment By ID (for update)
router.get('/getUpdateAppointment/:id', appointmentController.getAppointmentById);

// Update Appointment
router.put('/getUpdateAppointment/:id', appointmentController.updateAppointment);

// Accept Appointment
router.put('/acceptAppointment/:id', appointmentController.acceptAppointment);

// Decline Appointment
router.put('/declineAppointment/:id', appointmentController.declineAppointment);

// Mark Appointment as Done
router.put('/doneAppointment/:id', appointmentController.doneAppointment);

// Delete Appointment
router.delete('/removeAppointment/:id', appointmentController.deleteAppointment);

module.exports = router;
