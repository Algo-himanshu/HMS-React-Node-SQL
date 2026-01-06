const bcrypt = require("bcryptjs");
const db = require('../config/database');
const { SALT_ROUNDS } = require('../config/constants');

// User Registration
const registerUser = (req, res) => {
    const { name, password, address, gender, email, contact } = req.body;
    
    bcrypt.hash(password, SALT_ROUNDS, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return res.status(500).json({ result: "Error hashing password" });
        }
        
        const insert = "INSERT INTO users(name,password,address,gender,email,contact) VALUES (?,?,?,?,?,?)";
        db.query(insert, [name, hash, address, gender, email, contact], (err, result) => {
            if (err) {
                console.error('Error registering user:', err);
                return res.status(500).json({ result: "Error registering user" });
            }
            res.status(201).json({ result: "User registered successfully", id: result.insertId });
        });
    });
};

// User Login
const loginUser = (req, res) => {
    const { name, password } = req.body;
    const login = "SELECT * FROM users WHERE name = ?";
    
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

// Get All Patients
const getAllPatients = (req, res) => {
    const get = "SELECT * FROM users";
    
    db.query(get, (error, result) => {
        if (error) {
            console.error('Error fetching patients:', error);
            return res.status(500).json({ result: "Error fetching patients" });
        }
        res.json(result);
    });
};

// Get Patient By ID
const getPatientById = (req, res) => {
    const id = req.params.id;
    const sqlGet = "SELECT * FROM users WHERE id = ?";
    
    db.query(sqlGet, [id], (err, result) => {
        if (err) {
            console.error('Error fetching patient:', err);
            return res.status(500).json({ result: "Error fetching patient" });
        }
        res.json(result);
    });
};

// Update Patient
const updatePatient = (req, res) => {
    const { id } = req.params;
    const { name, email, contact, address } = req.body;
    const sqlUpdate = "UPDATE users SET name=?,email=?,address=?,contact=? WHERE id = ?";
    
    db.query(sqlUpdate, [name, email, address, contact, id], (err, result) => {
        if (err) {
            console.error('Error updating patient:', err);
            return res.status(500).json({ result: "Error updating patient" });
        }
        res.json(result);
    });
};

// Delete Patient
const deletePatient = (req, res) => {
    const id = req.params.id;
    const remove = "DELETE FROM users WHERE id = ?";
    
    db.query(remove, [id], (err, result) => {
        if (err) {
            console.error('Error deleting patient:', err);
            return res.status(500).json({ result: "Error deleting patient" });
        }
        res.json({ result: "Patient deleted successfully" });
    });
};

module.exports = {
    registerUser,
    loginUser,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient
};
