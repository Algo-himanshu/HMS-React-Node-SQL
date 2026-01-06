import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './NavbarModern.css';

function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg hms-navbar">
      <Link className="navbar-brand" to="/dashboard">
        <img src={require('../content/logo.svg')} alt="" style={{height:'2.2rem',marginRight:'0.5rem'}} />HMS
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/manageDoctors" className="nav-link">Manage Doctors</Link>
          </li>
          <li className="nav-item">
            <Link to="/adminDoctorReg" className="nav-link">Doctor Registration</Link>
          </li>
          <li className="nav-item">
            <Link to="/adminAppointment" className="nav-link">Appointments</Link>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminNavbar;