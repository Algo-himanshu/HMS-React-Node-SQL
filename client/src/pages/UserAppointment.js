import "bootstrap/dist/css/bootstrap.min.css";
import React , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { ToastContainer , toast} from 'react-toastify';
import axios from "axios";
import useAuth from '../func/useAuth';
import Navbar from "../component/Navbar";
import {moment} from "moment";
import './CardList.css';

let id = window.sessionStorage.getItem('id');

function UserAppointment() {
  
    const { checkLoggedIn,redirectToLogin} = useAuth();
    const [data,setData]=useState([]);

    const loadData = async () => {
        console.log(id);
    const response = await axios.get(`http://localhost:6969/api/userAppointment/${id}`);
    setData(response.data);
    console.log(response.data);
    };
    
    useEffect(()=>{
      if (!checkLoggedIn()) {
        redirectToLogin();
      }
      loadData();
    },[]);
    
      return (
    <div>
      <Navbar />
      <div className="card-list-bg" />
      <div className="card-list-header">My Appointments</div>
      <div className="card-list-container">
        {data.map((item, idx) => (
          <div className="card-list-card" key={item.id}>
            <div className="card-list-card-title">{item.name} (#{idx+1})</div>
            <div className="card-list-card-info"><b>Doctor ID:</b> {item.doctorid}</div>
            <div className="card-list-card-info"><b>Age:</b> {item.age}</div>
            <div className="card-list-card-info"><b>Gender:</b> {item.gender}</div>
            <div className="card-list-card-info"><b>Disease:</b> {item.disease}</div>
            <div className="card-list-card-info"><b>Contact:</b> {item.contact}</div>
            <div className="card-list-card-info"><b>Date:</b> {item.date}</div>
            <div className="card-list-card-info"><b>Time:</b> {item.time}</div>
            <div className="card-list-card-info"><b>Status:</b> {item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
    export default UserAppointment;