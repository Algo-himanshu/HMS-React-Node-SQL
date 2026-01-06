// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.user) {
        return next();
    }
    return res.status(401).json({ result: "Unauthorized" });
};

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
    if (req.session && req.session.user && req.session.user[0]) {
        // Assuming admin table structure - adjust based on your needs
        return next();
    }
    return res.status(403).json({ result: "Forbidden - Admin access required" });
};

module.exports = {
    isAuthenticated,
    isAdmin
};
