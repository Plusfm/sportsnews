import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios';
import "./Login.css";

const Loginpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('Form Data:', formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', formData);
      console.log('Response:', response.data);
      alert(response.data.message);
      if(response){
        window.location.href = "/form";
      }
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    } catch (error) {
      alert('Failed to send message,check your network connection');
    }
  };

  return (
    <div className="form-container">
      <h4>WELCOME TO TED SPORTS NEWS LOGIN PAGE</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="full_name">NAME</label>
        <input
          type="text"
          id="full_name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Type your full name here"
        />
        <label htmlFor="email_data">E-MAIL</label>
        <input
          type="email"
          id="email_data"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Type your email here"
        />
        <label htmlFor="password_data">PASSWORD</label>
        <input
          type="password"
          id="password_data"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
  

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Loginpage;
