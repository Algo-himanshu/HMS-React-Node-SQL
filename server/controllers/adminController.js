const db = require('../config/database');

// Admin Login
const loginAdmin = (req, res) => {
    const { name, password } = req.body;
    const login = "SELECT * FROM admin WHERE name = ?";
    
    db.query(login, [name], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ result: "Database error" });
        }
        
        if (result.length > 0) {
            req.session.user = result;
            
            if (password == result[0].password) {
                res.json(req.session.user);
            } else {
                res.json({ result: "Wrong Password" });
            }
        } else {
            res.json({ result: "Wrong Username" });
        }
    });
};

module.exports = {
    loginAdmin
};
