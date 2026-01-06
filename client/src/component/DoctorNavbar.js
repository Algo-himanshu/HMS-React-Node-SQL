import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './NavbarModern.css';

function DoctorNavbar() {
  return (
    <nav className="navbar navbar-expand-lg hms-navbar">
      <Link className="navbar-brand" to="/doctorAppointment">
        <img src={require('../content/logo.svg')} alt="" style={{height:'2.2rem',marginRight:'0.5rem'}} />HMS
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/doctorAppointment" className="nav-link">Appointment</Link>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default DoctorNavbar;