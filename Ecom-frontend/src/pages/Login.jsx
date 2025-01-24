import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';

const Login = () => {
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      navigate('/add')
    }
  },[]);
  const login=(e)=>{
    e.preventDefault();
    const data = {email,password};
    axios.post('http://127.0.0.1:8000/api/login',data).then(()=>{
      localStorage.setItem('user-info',JSON.stringify(data))
      navigate('/add')
    })
    // navigate('/add');
  }
  return (
   <>
  <Header />
  <div className="col-sm-6 offset-sm-3 mt-4">
    <h1>Login</h1>
    <form onSubmit={login}>
      <div className="mb-3">
        <label className="fs-4 fw-bold">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="fs-4 fw-bold">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Login
      </button>
    </form>
  </div>
   </>
   
  )
}

export default Login