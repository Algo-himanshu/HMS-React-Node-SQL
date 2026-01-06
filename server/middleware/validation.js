// Validation middleware for user registration
const validateUserRegistration = (req, res, next) => {
    const { name, password, address, gender, email, contact } = req.body;
    
    if (!name || !password || !address || !gender || !email || !contact) {
        return res.status(400).json({ result: "All fields are required" });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ result: "Password must be at least 6 characters" });
    }
    
    next();
};

// Validation middleware for doctor registration
const validateDoctorRegistration = (req, res, next) => {
    const { name, password, specialisation, gender, email, contact } = req.body;
    
    if (!name || !password || !specialisation || !gender || !email || !contact) {
        return res.status(400).json({ result: "All required fields must be provided" });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ result: "Password must be at least 6 characters" });
    }
    
    next();
};

// Validation middleware for appointment creation
const validateAppointment = (req, res, next) => {
    const { id, userid, name, age, gender, disease, contact, date, time } = req.body;
    
    if (!id || !userid || !name || !age || !gender || !disease || !contact || !date || !time) {
        return res.status(400).json({ result: "All fields are required" });
    }
    
    next();
};

module.exports = {
    validateUserRegistration,
    validateDoctorRegistration,
    validateAppointment
};
