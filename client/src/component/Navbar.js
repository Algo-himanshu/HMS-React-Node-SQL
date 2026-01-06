import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import './NavbarModern.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg hms-navbar">
      <Link className="navbar-brand" to="/home">
        <img src={require('../content/logo.svg')} alt="" style={{height:'2.2rem',marginRight:'0.5rem'}} />HMS
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/createAppointment" className="nav-link">Create Appointment</Link>
          </li>
          <li className="nav-item">
            <Link to="/userAppointment/:id" className="nav-link">My Appointment</Link>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
