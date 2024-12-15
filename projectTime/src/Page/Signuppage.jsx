import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios';
import "./Signup.css";
import { Link } from 'react-router-dom';

const Signuppage = () => {
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
      const response = await axios.post('https://tedsports.onrender.com/signup', formData);
      console.log('Response:', response.data);
      alert(response.data.message);
      if(response){
        window.location.href = "/login";
      }
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <div className="form-container">
      <h4>WELCOME TO TED SPORTS NEWS SIGN UP PAGE</h4>
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
        <Link  style={{textDecoration:"none"}}to='/login'>Have an account? Login here</Link>
      </form>
    </div>
  );
};

export default Signuppage;
