require('dotenv').config();
const express = require('express');
const configureMiddleware = require('./config/middleware');

// Import Routes
const userRoutes = require('./routes/userRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const adminRoutes = require('./routes/adminRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
const port = process.env.PORT || 6969;

// Configure Middleware
configureMiddleware(app);

// API Routes
app.use('/api', userRoutes);
app.use('/api', doctorRoutes);
app.use('/api', adminRoutes);
app.use('/api', appointmentRoutes);

// Health Check Route
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Start Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
