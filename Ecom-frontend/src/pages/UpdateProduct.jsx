import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {
  const [data, setData] = useState({ name: '', price: '' });
  const [image, setImage] = useState(null); // Handle file input separately
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Fetch product details
    axios.get(`http://127.0.0.1:8000/api/edit/${id}`)
      .then(response => {
        setData({ name: response.data.name, price: response.data.price });
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    if (image) {
      formData.append('image', image);
    }

    axios.post(`http://127.0.0.1:8000/api/update/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <Header />
      <div className='col-sm-6 offset-sm-3'>
        <h1>Update Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name:</label>
            <input
              type="text"
              value={data.name}
              onChange={handleChange}
              name="name"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Product Price:</label>
            <input
              type="number"
              value={data.price}
              onChange={handleChange}
              name="price"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image:</label>
            <input
              type="file"
              onChange={handleFileChange}
              name="image"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-success">
            Update Product
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn btn-primary ms-3"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
