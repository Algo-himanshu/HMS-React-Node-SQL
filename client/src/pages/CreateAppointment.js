import "bootstrap/dist/css/bootstrap.min.css";
import React , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { ToastContainer , toast} from 'react-toastify';
import axios from "axios";
import AdminNavbar from '../component/AdminNavbar'
import useAuth from '../func/useAuth';
import Navbar from "../component/Navbar";
import './CreateAppointment.css';

function CreateAppointment() {
  const { checkLoggedIn,redirectToLogin} = useAuth();
  const [data,setData]=useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:6969/api/getDoctors");
    setData(response.data);
  };

  useEffect(()=>{
    if (!checkLoggedIn()) {
      redirectToLogin();
    }
    loadData();
  },[]);

  return (
    <div>
      <Navbar/>
      <div className="create-appointment-bg" />
      <div className="create-appointment-header">Doctors Info</div>
      <div className="create-appointment-card-list">
        {data.map((item) => (
          <div className="create-appointment-card" key={item.id}>
            <img
              className="create-appointment-card-img"
              src={require(`../content/${item.profile}`)}
              alt="profile"
            />
            <div className="create-appointment-card-body">
              <div className="create-appointment-card-title">{item.name}</div>
              <div className="create-appointment-card-info"><b>Gender:</b> {item.gender}</div>
              <div className="create-appointment-card-info"><b>Specialisation:</b> {item.specialisation}</div>
              <div className="create-appointment-card-info"><b>Email:</b> {item.email}</div>
              <div className="create-appointment-card-info"><b>Contact:</b> {item.contact}</div>
              <div className="create-appointment-card-action">
                <Link to={`/createAppointment/${item.id}`}>
                  <button className="btn">Add Appointment</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CreateAppointment;