import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import patient from "../content/patientProfile.jpg"
import doctor from "../content/doctorProfile.jpg"
import admin from "../content/adminProfile.jpg"
import '../pages/LandingPage.css';

function LandingPage() {
  return (
    <>
      <div className="landing-page-bg" />
      <div className="landing-page-container">
        <div className="card mb-3 mx-2" style={{ width: '18rem' }}>
          <img className="card-img-top" src={doctor} alt="Doctor" />
          <div className="card-body text-center">
            <Link className='card-link' to="/doctorLogin"><h5 className="card-title">Doctor</h5></Link>
          </div>
        </div>
        <div className="card mb-3 mx-2" style={{ width: '25rem' }}>
          <img className="card-img-top" src={patient} alt="Patient" />
          <div className="card-body text-center">
            <Link className='card-link' to="/login"><h5 className="card-title">Patient</h5></Link>
          </div>
        </div>
        <div className="card mb-3 mx-2" style={{ width: '18rem' }}>
          <img className="card-img-top" src={admin} alt="Admin" />
          <div className="card-body text-center">
            <Link className='card-link' to="/adminLogin"><h5 className="card-title">Admin</h5></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;
