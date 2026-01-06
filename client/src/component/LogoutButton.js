import React from 'react'
import {useNavigate} from 'react-router-dom';

function LogoutButton() {
    const navigate=useNavigate();

const logout=(()=>{
    window.sessionStorage.clear();
    window.localStorage.setItem('loggedIn','false');
    setTimeout(() =>navigate("/"), 500);
});

      
  return (
    <div><input type='button' onClick={logout} value={"Logout"}/></div>
  )
}

export default LogoutButton;