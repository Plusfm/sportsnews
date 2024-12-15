import React from 'react';
import './About.css'

const Aboutus = () => {
  return (
    <section id="contact" className="contact">
      <h2>About Me</h2>
      <div className='aboutContainer'>
        <img src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=" alt="" />
        <h1 className='author_name' >John Dave</h1>
        <p className='author_description' > My name is John Dave. I'm a freelance sports news reporter based in new york. 
          I like being free and enjoying every moment.
          </p> 
      </div>
      <div className='author-social'>
            <div className='aboutlink'>
     <a href="https://www.facebook.com/yourfacebookpage" target="_blank">
      <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/facebook-logo.png" alt="facebook-logo"/>
      </a>
     </div>
     <div className='aboutlink'>
     <a href="https://www.twitter.com/yourfacebookpage" target="_blank">
     <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/twitter-logo.png" alt="twitter-logo"/>
      </a>
      </div>
      <div className='aboutlink'>
      <a href="https://www.instagram.com/yourfacebookpage" target="_blank">
      <img width="44" height="44" src="https://img.icons8.com/3d-fluency/94/instagram-logo.png" alt="instagram-logo"/>
      </a>
      </div>
      </div>
      <p>TED Sports  News is a top of the line service that offers sports news We aim to transform the industry by 
        increasing our great service delivery to client, stakeholders and investors. With zero downtimes, affordable costs, 
        security and carefully sifted data. We are doing this by providing sports news of
         not just football but of other sports in order to offer the world a cumulative 
         experience of livescore and updated news. TED Sports News provides these services for free at present, with a strong and unwavering presence that assures you of our stability. 
          Our site is easy to navigate with a great user-friendly interface. It is also light 
        therefore enabling you to easily implement them onto your platform or start reading news on the go.</p>
    </section>
  );
};

export default Aboutus;
