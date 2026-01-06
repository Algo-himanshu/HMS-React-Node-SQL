import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import LandingPage from "./pages/LandingPage";
import DoctorLogin from "./pages/DoctorLogin";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AdminDoctorReg from "./pages/AdminDoctorReg";
import AdminAppointment from "./pages/AdminAppointment";
import ManageDoctor from "./pages/ManageDoctor";
import UpdatePatient from "./pages/UpdatePatient";
import UpdateDoctor from "./pages/UpdateDoctor";
import CreateAppointment from "./pages/CreateAppointment";
import DoctorAppointment from "./pages/DoctorAppointment";
import UpdateAppointment from "./pages/UpdateAppointment";
import UserAppointment from "./pages/UserAppointment";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <ToastContainer position="top-center"/>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/createAppointment" element={<CreateAppointment />}></Route>
          <Route path="/createAppointment/:id" element={<Appointment />}></Route>
          <Route path="/userAppointment/:id" element={<UserAppointment />}></Route>


          <Route path="/adminLogin" element={<AdminLogin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/manageDoctors" element={<ManageDoctor />}></Route>
          <Route path="/updatePatient/:id" element={<UpdatePatient />}></Route>
          <Route path="/updateDoctor/:id" element={<UpdateDoctor />}></Route>
          <Route path="/adminDoctorReg" element={<AdminDoctorReg />}></Route>
          <Route path="/adminAppointment" element={<AdminAppointment />}></Route>


          <Route path="/doctorLogin" element={<DoctorLogin />}></Route>
          <Route path="/doctorAppointment" element={<DoctorAppointment />}></Route>
          <Route path="/updateAppointment/:id" element={<UpdateAppointment />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
