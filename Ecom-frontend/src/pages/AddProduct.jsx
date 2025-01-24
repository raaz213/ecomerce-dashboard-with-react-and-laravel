import axios from 'axios';
import React, { useState } from 'react'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const[image,setImage] = useState('');
  const[description,setDescription] = useState('');
  const navigate = useNavigate();

  const addProduct=(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('description', description);
    axios.post('http://127.0.0.1:8000/api/add', formData)
    alert('data submitted');
    navigate('/');
  }
  return (
   <>
   <Header />
   <div className='col-sm-6 offset-sm-3'>
      <h1>Add Product</h1>
      <form onSubmit={addProduct}>
        <label>Product Name:</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} name="name" className='form-control'/>
        <br/>
        <label>Product Price:</label>
        <input type="number" onChange={(e)=>setPrice(e.target.value)} name="price" className='form-control'/>
        <br/>
        <label >Image</label>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])} name="image" className='form-control'/>
        <br/>
        <label>Product Description:</label>
        <textarea  onChange={(e)=>setDescription(e.target.value)} name="description" className='form-control'/>
        <br/>
        <input type="submit" className='btn btn-primary' value="Add Product" />
      </form>
    </div>
   </>
  )
}

export default AddProduct