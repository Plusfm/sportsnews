import React from 'react';

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footerIcon">
     <span>
     <a href="https://www.facebook.com/yourfacebookpage" target="_blank">
      <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/facebook-logo.png" alt="facebook-logo"/>
      </a>
     </span>
     <a href="https://www.twitter.com/yourfacebookpage" target="_blank">
     <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/twitter-logo.png" alt="twitter-logo"/>
      </a>
      <a href="https://www.instagram.com/yourfacebookpage" target="_blank">
      <img width="34" height="34" src="https://img.icons8.com/3d-fluency/94/instagram-logo.png" alt="instagram-logo"/>
      </a>
      </div>
      <div className="footersecond">
      <p>2024 &copy; TEDSPORTNEWS. All Right Reserved. Published with TED..</p>
      </div>
    </div>
  );
};

export default Footer;
