import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';

const Search = () => {
    const[data,setData] = useState([]);
   
    function searchProduct(key){
        console.log(key);
            axios.get(`http://127.0.0.1:8000/api/search/${key}`)
            .then(response => {
              setData(response.data);
              })
              .catch(error => {
                console.error(error);
                });
    }
  return (
    <div>
        <Header search={searchProduct}/>
        <h1>Search Product</h1>
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
            </div>
          </div>
        );
      })
     }
    </div>
    </div>
  )
}

export default Search