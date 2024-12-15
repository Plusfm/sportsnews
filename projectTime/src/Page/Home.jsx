import React from 'react';
import Basketplayer from '../assets/Basketplayer.jpg'
import american from '../assets/american.jpg'
import soccerss from '../assets/soccerss.jpg'
import Allnews from '../Component/Allnews';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
<div>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={soccerss}  style={{height:"800px"}} className="d-block w-100 object-fit-cover" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>FOOTBALL</h5>
        <p>Get daily news on football.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Basketplayer}  style={{height:"800px"}} className="d-block w-100 object-fit-cover" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>BASKET BALL</h5>
        <p>Basket news on the go</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={american}  style={{height:"800px"}} className="d-block w-100 object-fit-cover" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>AMERICAN FOOTBALL</h5>
        <p>This is it, get latest update on American Football news.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

<div>
<Allnews/>
</div>
</div>



</div>
    
  );
};

export default Home;
