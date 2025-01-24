import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/view')
    .then(response => {
      setData(response.data);
      })
      .catch(error => {
        console.error(error);
        });
  },[]);
  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (!isConfirmed) 
      return;
    axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
    .then(() => {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      })
      .catch(error => {
        console.error(error);
        });
        }
  return (
    <div>
      <Header />
      <h1>Product Lists</h1>
    <div className="row gap-4 m-4">
    {
      data.map((item) => {
        return (
          <div key={item.id} className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" style={{ height: "200px", objectFit: "cover" }}  src={`http://localhost:8000/${item.image}`} alt="Card image" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">Rs.{item.price}</p>
              <Link to={`/edit/${item.id}`}  className="btn btn-success">Edit</Link>
              <button onClick={()=>handleDelete(item.id)} className="btn btn-danger ms-4">Delete</button>
            </div>
          </div>
        );
      })
     }
    </div>
    </div>
  );
};

export default Home;
