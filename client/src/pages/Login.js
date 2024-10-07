import React, { useState } from 'react'
import axios from 'axios';
import '../css/Login.css';
import { useNavigate, Link } from 'react-router-dom';

import umakLogo from '../images/umakLogo.png';

function Login() {
  let navigate = useNavigate();

  const [id, setId] = useState(""); 
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 

  const login = () => {
    const data = {id: id, password: password};
    axios.post("http://localhost:3308/auth/login", data).then((response) => {
      console.log(response.data);
      navigate('/home');
    }).catch((error) => {
      if(error.response) alert(error);  // Server responded with a status code outside the range of 2xx
      if(error.request) alert('Error: No response from the server. Please try again later.'); // Request was made but no response was received
    });
  };

  return (
    <div className='login-container'>
      <div className='login-modal'>
        <div className='logo'>
          <div className='image'>
            <Link to='/'><img src={umakLogo}/></Link>
          </div>
          <div className='text'><p>Login to ThesHub</p></div>
        </div>
        <div className='field'>
          <label>ID</label>
          <input type='text' className='login-id' placeholder='Enter id'
            onChange={(event) => {setId(event.target.value)}}
          />
        </div>

        <div className='field'>
          <label>Password</label>
          <input type='password' className='login-password' placeholder='Enter password'
            onChange={(event) => {setPassword(event.target.value)}}
          />
        </div>

        <div className='loginBtnContainer'>
          <button onClick={login} className='loginBtn'>Login</button>
        </div>

        <div className='sign-up'>
          <p>Don't have an account? <Link to="/registration" className='register-nav'>Sign up here</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Login
