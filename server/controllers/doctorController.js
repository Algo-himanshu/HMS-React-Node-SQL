const bcrypt = require('bcrypt');
const db = require('../config/database');
const { SALT_ROUNDS } = require('../config/constants');

// Doctor Registration
const registerDoctor = (req, res) => {
    const { name, password, specialisation, gender, email, contact, profile } = req.body;
    
    bcrypt.hash(password, SALT_ROUNDS, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ result: "Error hashing password" });
        }
        
        const insert = "INSERT INTO doctor(name,password,specialisation,gender,email,contact,profile) VALUES (?,?,?,?,?,?,?)";
        db.query(insert, [name, hash, specialisation, gender, email, contact, profile], (err, result) => {
            if (err) {
                console.error('Error registering doctor:', err);
                return res.status(500).json({ result: "Error registering doctor" });
            }
            res.status(201).json({ result: "Doctor registered successfully", id: result.insertId });
        });
    });
};

// Doctor Login
const loginDoctor = (req, res) => {
    const { name, password } = req.body;
    const login = "SELECT * FROM doctor WHERE name = ?";
    
    db.query(login, [name], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ result: "Database error" });
        }
        
        if (result.length > 0) {
            req.session.user = result;
            console.log("---", req.session.user);
            
            bcrypt.compare(password, result[0].password, (err, test) => {
                if (err) {
                    console.error('Error comparing password:', err);
                    return res.status(500).json({ result: "Error comparing password" });
                }
                
                if (test) {
                    res.json(req.session.user);
                } else {
                    res.json({ result: "Wrong Password" });
                }
            });
        } else {
            res.json({ result: "Wrong Username" });
        }
    });
};

// Get All Doctors
const getAllDoctors = (req, res) => {
    const get = "SELECT * FROM doctor";
    
    db.query(get, (error, result) => {
        if (error) {
            console.error('Error fetching doctors:', error);
            return res.status(500).json({ result: "Error fetching doctors" });
        }
        res.json(result);
    });
};

// Get Doctor By ID
const getDoctorById = (req, res) => {
    const id = req.params.id;
    const sqlGet = "SELECT * FROM doctor WHERE id = ?";
    
    db.query(sqlGet, [id], (err, result) => {
        if (err) {
            console.error('Error fetching doctor:', err);
            return res.status(500).json({ result: "Error fetching doctor" });
        }
        res.json(result);
    });
};

// Update Doctor
const updateDoctor = (req, res) => {
    const { id } = req.params;
    const { name, email, contact, specialisation } = req.body;
    const sqlUpdate = "UPDATE doctor SET name=?,email=?,specialisation=?,contact=? WHERE id = ?";
    
    db.query(sqlUpdate, [name, email, specialisation, contact, id], (err, result) => {
        if (err) {
            console.error('Error updating doctor:', err);
            return res.status(500).json({ result: "Error updating doctor" });
        }
        res.json(result);
    });
};

// Delete Doctor
const deleteDoctor = (req, res) => {
    const id = req.params.id;
    const remove = "DELETE FROM doctor WHERE id = ?";
    
    db.query(remove, [id], (err, result) => {
        if (err) {
            console.error('Error deleting doctor:', err);
            return res.status(500).json({ result: "Error deleting doctor" });
        }
        res.json({ result: "Doctor deleted successfully" });
    });
};

module.exports = {
    registerDoctor,
    loginDoctor,
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
};
