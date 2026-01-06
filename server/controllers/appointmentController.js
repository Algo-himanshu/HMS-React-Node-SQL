const db = require('../config/database');
const { APPOINTMENT_STATUS } = require('../config/constants');

// Create Appointment
const createAppointment = (req, res) => {
    const { id, userid, name, age, gender, disease, contact, date, time } = req.body;
    const insert = "INSERT INTO appointment(doctorid,userid,name,age,gender,disease,contact,date,time,status) VALUES (?,?,?,?,?,?,?,?,?,?)";
    
    db.query(insert, [id, userid, name, age, gender, disease, contact, date, time, APPOINTMENT_STATUS.NOT_APPROVED], (err, result) => {
        if (err) {
            console.error('Error creating appointment:', err);
            return res.status(500).json({ result: "Error creating appointment" });
        }
        res.status(201).json({ result: "Appointment created successfully", id: result.insertId });
    });
};

// Get All Appointments
const getAllAppointments = (req, res) => {
    const sqlGet = "SELECT * FROM appointment";
    
    db.query(sqlGet, (err, result) => {
        if (err) {
            console.error('Error fetching appointments:', err);
            return res.status(500).json({ result: "Error fetching appointments" });
        }
        res.json(result);
    });
};

// Get Appointments By Doctor ID
const getAppointmentsByDoctorId = (req, res) => {
    const id = req.params.id;
    const sqlGet = "SELECT * FROM appointment WHERE doctorid = ? ORDER BY id DESC";
    
    db.query(sqlGet, [id], (err, result) => {
        if (err) {
            console.error('Error fetching appointments:', err);
            return res.status(500).json({ result: "Error fetching appointments" });
        }
        res.json(result);
    });
};

// Get Appointments By User ID
const getAppointmentsByUserId = (req, res) => {
    const userid = req.params.id;
    const sqlGet = "SELECT * FROM appointment WHERE userid = ? ORDER BY id DESC";
    
    db.query(sqlGet, [userid], (err, result) => {
        if (err) {
            console.error('Error fetching appointments:', err);
            return res.status(500).json({ result: "Error fetching appointments" });
        }
        res.json(result);
    });
};

// Get Appointment By ID
const getAppointmentById = (req, res) => {
    const id = req.params.id;
    const sqlGet = "SELECT * FROM appointment WHERE id = ?";
    
    db.query(sqlGet, [id], (err, result) => {
        if (err) {
            console.error('Error fetching appointment:', err);
            return res.status(500).json({ result: "Error fetching appointment" });
        }
        res.json(result);
    });
};

// Update Appointment
const updateAppointment = (req, res) => {
    const { id } = req.params;
    const { date, time } = req.body;
    const sqlUpdate = "UPDATE appointment SET date=?,time=?,status = ? WHERE id = ?";
    
    db.query(sqlUpdate, [date, time, APPOINTMENT_STATUS.UPDATED, id], (err, result) => {
        if (err) {
            console.error('Error updating appointment:', err);
            return res.status(500).json({ result: "Error updating appointment" });
        }
        res.json(result);
    });
};

// Accept Appointment
const acceptAppointment = (req, res) => {
    const id = req.params.id;
    const query = "UPDATE appointment SET status = ? WHERE id = ?";
    
    db.query(query, [APPOINTMENT_STATUS.ACCEPTED, id], (err, result) => {
        if (err) {
            console.error('Error accepting appointment:', err);
            return res.status(500).json({ result: "Error accepting appointment" });
        }
        res.json(result);
    });
};

// Decline Appointment
const declineAppointment = (req, res) => {
    const id = req.params.id;
    const query = "UPDATE appointment SET status = ? WHERE id = ?";
    
    db.query(query, [APPOINTMENT_STATUS.DECLINED, id], (err, result) => {
        if (err) {
            console.error('Error declining appointment:', err);
            return res.status(500).json({ result: "Error declining appointment" });
        }
        res.json(result);
    });
};

// Mark Appointment as Done
const doneAppointment = (req, res) => {
    const id = req.params.id;
    const query = "UPDATE appointment SET status = ? WHERE id = ?";
    
    db.query(query, [APPOINTMENT_STATUS.DONE, id], (err, result) => {
        if (err) {
            console.error('Error updating appointment status:', err);
            return res.status(500).json({ result: "Error updating appointment status" });
        }
        res.json(result);
    });
};

// Delete Appointment
const deleteAppointment = (req, res) => {
    const id = req.params.id;
    const remove = "DELETE FROM appointment WHERE id = ?";
    
    db.query(remove, [id], (err, result) => {
        if (err) {
            console.error('Error deleting appointment:', err);
            return res.status(500).json({ result: "Error deleting appointment" });
        }
        res.json({ result: "Appointment deleted successfully" });
    });
};

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointmentsByDoctorId,
    getAppointmentsByUserId,
    getAppointmentById,
    updateAppointment,
    acceptAppointment,
    declineAppointment,
    doneAppointment,
    deleteAppointment
};
