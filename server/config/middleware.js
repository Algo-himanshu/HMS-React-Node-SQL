const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const configureMiddleware = (app) => {
    // Body Parser
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    // Cookie Parser
    app.use(cookieParser());
    
    // CORS Configuration
    app.use(cors({
        origin: process.env.CLIENT_URL || "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }));
    
    // Session Configuration
    app.use(session({
        key: "userId",
        secret: process.env.SESSION_SECRET || "MiaKhalifa",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24 * 1000, // 24 hours in milliseconds
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        },
    }));
};

module.exports = configureMiddleware;
