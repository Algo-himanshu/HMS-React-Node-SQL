import {React,useEffect,useState} from 'react'
import AdminNavbar from '../component/AdminNavbar'
import useAuth from '../func/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';
import './CardList.css';

function AdminAppointment() {
const { checkLoggedIn,redirectToLogin} = useAuth();
const [data,setData]=useState([]);

const loadData = async () => {
const response = await axios.get("http://localhost:6969/api/getAppointment");
setData(response.data);
console.log(response.data);
};

useEffect(() => {
  if (!checkLoggedIn()) {
    redirectToLogin();
  }
  loadData();
}, []);

const deleteUser = id =>{
  if(window.confirm("Are you Sure You Want To Delete User?")){
    axios.delete(`http://localhost:6969/api/removeAppointment/${id}`);
    toast.success("User Deleted");
    setTimeout(()=>loadData(),500);
  }
}

return (
  <div>
    <AdminNavbar/>
    <div className="card-list-bg" />
    <div className="card-list-header">Appointments</div>
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
          <div className="card-list-card-action">
            <button className="btn btn-danger" onClick={() => deleteUser(item.id)}>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default AdminAppointment;