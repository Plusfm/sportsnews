import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'

const Formpage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    description: '',
    type: '',
    group: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('Form Data:', formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tedsports.onrender.com/content', formData);
      console.log('Response:', response.data);
      alert(response.data.message);
      setFormData({
        title: '',
        category: '',
        image: '',
        description: '',
        type: '',
        group: '',
      });
    } catch (error) {
      alert('Failed to send message');
    }
  };

  return (
    <div className="form-container">
      <h4>USE THIS FORM TO SUBMIT YOUR SPORTS CONTENT</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">TITLE</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
        />

        <label htmlFor="category">CATEGORY</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select category</option>
          <option value="Football">FOOTBALL</option>
          <option value="American Football">AMERICAN FOOTBALL</option>
          <option value="Basket Ball">BASKET BALL</option>
          <option value="Boxing">BOXING</option>
          <option value="Volleyball">VOLLEY BALL</option>
          <option value="Track and Field">TRACK AND FIELD</option>
        </select>

        <label htmlFor="image">IMAGE</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="TYPE YOUR IMAGE URL HERE"
        />

        <label htmlFor="description">DESCRIPTION</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="TYPE YOUR DESCRIPTION HERE"
        />

        <label htmlFor="type">TYPE</label>
        <select
          name="type"
          id="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Select type</option>
          <option value="sports list">SPORTS LIST</option>
        </select>

        <label htmlFor="group">GROUP</label>
        <select
          name="group"
          id="group"
          value={formData.group}
          onChange={handleChange}
        >
          <option value="">Select group</option>
          <option value="team sports">TEAM SPORTS</option>
          <option value="Individual">INDIVIDUAL</option>
          <option value="Adventure">ADVENTURE</option>
          <option value="Unique Sports">UNIQUE SPORTS</option>
          <option value="combat Sports">COMBAT SPORTS</option>
          <option value="Racquet">RACQUET SPORTS</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formpage;
