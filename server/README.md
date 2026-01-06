# Hospital Management System - Backend

## Project Structure

```
server/
├── config/
│   ├── database.js          # Database connection configuration
│   ├── constants.js          # Application constants (salt rounds, statuses, etc.)
│   └── middleware.js         # Middleware configuration (CORS, sessions, etc.)
├── controllers/
│   ├── adminController.js    # Admin-related business logic
│   ├── appointmentController.js  # Appointment-related business logic
│   ├── doctorController.js  # Doctor-related business logic
│   └── userController.js     # User/Patient-related business logic
├── middleware/
│   ├── auth.js              # Authentication middleware
│   └── validation.js        # Request validation middleware
├── routes/
│   ├── adminRoutes.js       # Admin API routes
│   ├── appointmentRoutes.js # Appointment API routes
│   ├── doctorRoutes.js     # Doctor API routes
│   └── userRoutes.js        # User/Patient API routes
├── db.js                    # Legacy database file (deprecated)
├── server.js                # Main application entry point
└── package.json
```

## Architecture

### Separation of Concerns

- **Routes**: Define API endpoints and map them to controllers
- **Controllers**: Handle business logic and database operations
- **Middleware**: Handle authentication, validation, and cross-cutting concerns
- **Config**: Centralized configuration for database, constants, and middleware

### API Endpoints

#### User Routes (`/api`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /getPatient` - Get all patients
- `GET /getPatient/:id` - Get patient by ID
- `PUT /updatePatient/:id` - Update patient
- `DELETE /remove/:id` - Delete patient

#### Doctor Routes (`/api`)
- `POST /DoctorRegister` - Doctor registration
- `POST /doctorLogin` - Doctor login
- `GET /getDoctors` - Get all doctors
- `GET /getDoctor/:id` - Get doctor by ID
- `PUT /updateDoctor/:id` - Update doctor
- `DELETE /removeDoctor/:id` - Delete doctor

#### Admin Routes (`/api`)
- `POST /admin/login` - Admin login

#### Appointment Routes (`/api`)
- `POST /appointment` - Create appointment
- `GET /getAppointment` - Get all appointments
- `GET /getAppointment/:id` - Get appointments by doctor ID
- `GET /userAppointment/:id` - Get appointments by user ID
- `GET /getUpdateAppointment/:id` - Get appointment by ID for update
- `PUT /getUpdateAppointment/:id` - Update appointment
- `PUT /acceptAppointment/:id` - Accept appointment
- `PUT /declineAppointment/:id` - Decline appointment
- `PUT /doneAppointment/:id` - Mark appointment as done
- `DELETE /removeAppointment/:id` - Delete appointment

## Environment Variables

Create a `.env` file in the server directory:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=hospital management system
PORT=6969
SESSION_SECRET=your_secret_key_here
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

## Running the Server

```bash
npm install
npm start
```

The server will start on port 6969 (or the port specified in `.env`).

## Features

- ✅ Structured MVC architecture
- ✅ Separation of concerns
- ✅ Input validation middleware
- ✅ Error handling
- ✅ Session management
- ✅ SQL injection protection (parameterized queries)
- ✅ CORS configuration
- ✅ Environment-based configuration
