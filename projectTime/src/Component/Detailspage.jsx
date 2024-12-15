import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Detailpage.css';

const Detailspage = () => {
  const { id } = useParams(); 
  const [newdata, setNewData] = useState();
  const navigate = useNavigate();

  const options = {year:"numeric", month:"short",day:"numeric"}
const dateformat = new Intl.DateTimeFormat("en-US",options)
  
  useEffect(() => {
    const fetchNewsId = async () => {
  
      try {
        const response = await fetch(`http://localhost:4000/content/${id}`);
        const data = await response.json();
        
        setNewData(data.content); 
      } catch (err) {
        console.error(err);
        navigate('/404');
      }
    };
    fetchNewsId();
  }, [id, navigate]);
  
  return (
    <div>
         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={newdata?.image}  style={{height:"800px"}} className="d-block w-100 object-fit-cover" alt="..."/>
    </div>
  </div>

</div>

      <div className="container blogcontainer">
        <div>
             <h2 style={{textAlign:"center"}}>{newdata?.title}</h2>
             <p style={{textAlign:"center"}}>{newdata?.createdAt && dateformat.format(new Date(newdata?.createdAt))}</p>
             <p>{newdata?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detailspage;
