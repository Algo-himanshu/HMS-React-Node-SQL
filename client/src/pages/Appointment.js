import {React,useEffect,useState}from 'react'
import Navbar from "../component/Navbar";
import useAuth from '../func/useAuth';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import './CreateAppointment.css';
import './Appointment.css';

function Appointment() {
  const navigate=useNavigate();
  const { checkLoggedIn,redirectToLogin} = useAuth();
  useEffect(() => {
    if (!checkLoggedIn()) {
      redirectToLogin();
    }
  }, []);

  const { id } = useParams();
   
  const initialState = {
    name:'',age:'',gender:'Male',disease:'',contact:'',date:'',time:'',userid:window.sessionStorage.getItem('id')
  };

  const [state, setState] = useState(initialState);
  const { userid,name,age,gender,disease,contact,date,time} = state;

  const handleInputChange = (e) => {
    console.log(e.target.name,"  ",e.target.value);
  const { name, value } = e.target;
  setState({ ...state, [name]: value });
  console.log(state);
  
};



const handleSubmit = (e => {
    e.preventDefault();
    if(!name||!age||!disease||!contact||!date||!time){
        toast.error("Please Provide all the details");
        console.log(name,"-hi");
    }else {
        console.log(name,'---',age);
          axios.post("http://localhost:6969/api/appointment",   {
            id,userid,name,age,gender,disease,contact,date,time
        }).then(() => {
          toast.success("SAVED!!");
          navigate('/home');
        }).catch((err)=>console.log(err));
    }
})
 

  return (
    <div>
      <Navbar/>
      <div className="appointment-bg" />
      <div className="appointment-form-card">
        <div className="appointment-form-title">Appointment Form</div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-4">
              <label className="appointment-form-label">Name</label>
              <input type="text" name="name" onChange={handleInputChange} className="appointment-form-input" />
            </div>
            <div className="col-md-6 mb-4">
              <label className="appointment-form-label">Age</label>
              <input type="number" name="age" onChange={handleInputChange} className="appointment-form-input" />
            </div>
            <div className="col-md-12 mb-4">
              <label className="appointment-form-label">Gender</label>
              <div className="appointment-form-radio-group">
                <input type="radio" name="gender" value="Male" defaultChecked onChange={handleInputChange} />
                <span className="appointment-form-radio-label">Male</span>
                <input type="radio" name="gender" value="Female" onChange={handleInputChange} />
                <span className="appointment-form-radio-label">Female</span>
                <input type="radio" name="gender" value="Other" onChange={handleInputChange} />
                <span className="appointment-form-radio-label">Other</span>
              </div>
            </div>
            <div className="col-md-12 mb-4">
              <label className="appointment-form-label">Disease/Symptoms</label>
              <textarea name="disease" placeholder="Enter your problem" onChange={handleInputChange} className="appointment-form-textarea" />
            </div>
            <div className="col-md-12 mb-4">
              <label className="appointment-form-label">Phone Number</label>
              <input type="number" name="contact" className="appointment-form-input" onChange={handleInputChange} />
            </div>
            <div className="col-md-6 mb-4">
              <label className="appointment-form-label">Date (For Scheduling)</label>
              <input type="date" name="date" className="appointment-form-input" onChange={handleInputChange} />
            </div>
            <div className="col-md-6 mb-4">
              <label className="appointment-form-label">Time</label>
              <input type="time" name="time" className="appointment-form-input" onChange={handleInputChange} />
            </div>
          </div>
          <button className="appointment-form-submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Appointment