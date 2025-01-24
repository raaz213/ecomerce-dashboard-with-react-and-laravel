import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Register = () => {
  useEffect(() => {
    if (localStorage.getItem('user-info') ) {
      navigate("/add")
      }
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault(); // Prevent form submission behavior
    let data = { name, email, password };
    axios.post("http://127.0.0.1:8000/api/register", data).then(() => {
      localStorage.setItem('user-info',JSON.stringify(data))
      navigate('/add')
    }).catch((error)=>console.log(error));
  };
  return (
    <>
  <Header/>
  <div className="col-sm-6 offset-sm-3 mt-4">
      <h1>Register</h1>
      <form onSubmit={register}>
        <div className="mb-3">
          <label className="fs-4 fw-bold">Username:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="username"
            className="form-control"
          />
        </div>

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
          Register
        </button>
      </form>
    </div>
    </>
   
  );
};

export default Register;
