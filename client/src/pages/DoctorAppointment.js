import "bootstrap/dist/css/bootstrap.min.css";
import React , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { ToastContainer , toast} from 'react-toastify';
import axios from "axios";
import useAuth from '../func/useAuth';
import DoctorNavbar from "../component/DoctorNavbar";
import './CardList.css';

const id=sessionStorage.getItem('id');
function DoctorAppointment() {
    
  
    const { checkLoggedIn,redirectToLogin} = useAuth();
    const [data,setData]=useState([]);

    const loadData = async () => {
    const response = await axios.get(`http://localhost:6969/api/getAppointment/${id}`);
    setData(response.data);
    };
    
    useEffect(()=>{
      if (!checkLoggedIn()) {
        redirectToLogin();
      }
      loadData();
    },[]);

    const acceptAppointment = async(id) =>{
        await axios.put(`http://localhost:6969/api/acceptAppointment/${id}`);
        loadData();
    }

    const declineAppointment = async(id) =>{
        await axios.put(`http://localhost:6969/api/declineAppointment/${id}`);
        loadData();
    }

    const doneAppointment = async(id) =>{
        await axios.put(`http://localhost:6969/api/doneAppointment/${id}`);
        loadData();
    }
    


    
      return (
    <div>
      <DoctorNavbar />
      <div className="card-list-bg" />
      <div className="card-list-header">Appointments</div>
      <div className="card-list-container">
        {data.map((item) => (
          <div className="card-list-card" key={item.id}>
            <div className="card-list-card-title">{item.name}</div>
            <div className="card-list-card-info"><b>Gender:</b> {item.gender}</div>
            <div className="card-list-card-info"><b>Age:</b> {item.age}</div>
            <div className="card-list-card-info"><b>Disease:</b> {item.disease}</div>
            <div className="card-list-card-info"><b>Contact:</b> {item.contact}</div>
            <div className="card-list-card-info"><b>Date:</b> {item.date}</div>
            <div className="card-list-card-info"><b>Time:</b> {item.time}</div>
            <div className="card-list-card-info"><b>Status:</b> {item.status}</div>
            <div className="card-list-card-action">
              <Link to={`/updateAppointment/${item.id}`}><button className="btn">Update</button></Link>
              <button className="btn btn-success" onClick={() => acceptAppointment(item.id)}>Accept</button>
              <button className="btn btn-danger" onClick={() => declineAppointment(item.id)}>Decline</button>
              <button className="btn btn-secondary" onClick={() => doneAppointment(item.id)}>Done</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
    export default DoctorAppointment;
