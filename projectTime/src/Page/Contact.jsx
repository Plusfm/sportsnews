import React, { useState } from 'react';
import axios from 'axios';
import Basketplay from '../assets/Basketplay.jpg';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isloading, setIsloading] = useState(false)
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('Form Data:', formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tedsports.onrender.com/contact', formData);
      console.log('Response:', response.data);
      setIsloading(true)
      alert(response.data.message);
      if(alert){
       const timer = setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
      },11000)
     clearTimeout(()=>timer)
    }
      // 
    } catch (error) {
      alert('Failed to send message');
    }
  };
  if (isloading){
   const second_timer = setTimeout(()=>{
      setIsloading(false)
    }, 10000)
    clearTimeout(()=>second_timer)
   }
  return (
    <section id="contact" className="contact">
      <h2 className='contactfont'>Contact</h2>
      <p>Get in touch with us to learn more </p>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true"> 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Basketplay}  style={{height:"800px"}} className="d-block w-100 object-fit-cover" alt="..."/>
    </div>
  </div>
</div>
<div className='contactwrap'>  
<p  className='contactpara'> Ted Sports News comes with a built-in contact form, that you can use with Formspree service to handle up to 50 submissions per month for free. You could also easily switch to another contact form service if you want.</p>

      <form style={{marginTop:"15px"}} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          size='40'
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
           size='400'
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className='btn'>
        <button type="submit" className="cta-btn">Send Message</button>
        </div>
      </form>
      </div>
      <div>
       <h3 style={{display:isloading?"block":"none"}}> {`Name: ${formData.name}`}</h3> 
       <h3  style={{display:isloading?"block":"none"}}> {`Email: ${formData.email}`}</h3> 
       <h3  style={{display:isloading?"block":"none"}}> {`Message: ${formData.message}`}</h3> 
      </div>
    </section>
  );
};

export default Contact;
