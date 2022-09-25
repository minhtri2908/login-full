import './Login.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import { useEffect, useState } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const Login_default = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log({ email, password });

  const handleEmail = (e) => {
    setUsername(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleApi = (e) => {
    e.preventDefault();
    console.log({ email, password })
    axios.post('/api/users/signin', {
      email: email,
      password: password,
    })
      .then(function (response) {
        console.log(response);
        navigate('/home');
        alert('success')
      })
      .catch(function (error) {
        console.log(error);
        alert('service error')
      });
  }

  return (
    <div className="App">
      <div className="body">
        <div className="contmain">
          <h2>Login</h2>
          <form action="">
            <div className="contuser">
              <input

                type="text"
                value={email}
                onChange={handleEmail}
                name required
              />
              <label>User name</label>
            </div>
            <div className="contuser">
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                name required
              />
              <label>Password</label>
            </div>
            <div className='sel'>
              <FormControlLabel
                style={{ color: "white" }} control={<Checkbox style={{ color: "white" }} />} label="Remember me "
              />
              <p href='#'> Forgot password ?</p>
            </div>
            <button onClick={handleApi}>
              <a>
                <span />
                <span />
                <span />
                <span />
                Sign In
              </a>
            </button>
            <div className='register'>
              <a href="/register">DON'T HAVE AN ACCOUNT? REGISTER  </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login_default;
