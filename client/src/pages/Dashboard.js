import "bootstrap/dist/css/bootstrap.min.css";
import React , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import { ToastContainer , toast} from 'react-toastify';
import axios from "axios";
import AdminNavbar from '../component/AdminNavbar'
import useAuth from '../func/useAuth';
import './CardList.css';

const Dashboard = () => {
  
const { checkLoggedIn,redirectToLogin} = useAuth();
const [data,setData]=useState([]);

const loadData = async () => {
const response = await axios.get("http://localhost:6969/api/getPatient");
setData(response.data);
console.log(response.data);
};

useEffect(()=>{
  
  if (!checkLoggedIn()) {
    redirectToLogin();
  }loadData();
},[]);

const deleteUser = id =>{
  if(window.confirm("Are you Sure You Want To Delete User?")){
    axios.delete(`http://localhost:6969/api/remove/${id}`);
    toast.success("User Deleted");
    setTimeout(()=>loadData(),500);
  }
}

  return (
    <div>
      <AdminNavbar/>
      <div className="card-list-bg" />
      <div className="card-list-header">Patients Info</div>
      <div className="card-list-container">
        {data.map((item, idx) => (
          <div className="card-list-card" key={item.id}>
            <div className="card-list-card-title">{item.name} (#{idx+1})</div>
            <div className="card-list-card-info"><b>Gender:</b> {item.gender}</div>
            <div className="card-list-card-info"><b>Address:</b> {item.address}</div>
            <div className="card-list-card-info"><b>Email:</b> {item.email}</div>
            <div className="card-list-card-info"><b>Contact:</b> {item.contact}</div>
            <div className="card-list-card-action">
              <Link to={`/updatePatient/${item.id}`}><button className="btn">Edit</button></Link>
              <button className="btn btn-danger" onClick={()=>deleteUser(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;