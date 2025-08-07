import React from 'react';
import Navbar from '../components/Navbar'; // ✅ Ensure Navbar is imported correctly
import '../styles/Contact.css';
 // ✅ Your styling

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="contact-container">
       
        <div className="green-underline" />

        <div className="social-float-container">
  <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-128.png" alt="LinkedIn" className="social-float icon1" />
  <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-128.png" alt="GitHub" className="social-float icon2" />
  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-128.png" alt="Twitter" className="social-float icon3" />
  <img src="https://cdn-icons-png.freepik.com/128/2504/2504957.png" alt="Instagram" className="social-float icon4" />
</div>
    <div className="contact-section">
      <h1>Contact Me</h1>

      <div className="contact-info">
        <div className="contact-item">
          <img src="https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/address_location_pin-128.png" alt="Location" className="icon pulse" />
          <span>Kalmeshwar, Nagpur 441501</span>
        </div>

        <div className="contact-item">
          <img src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Email-Letter-Mail-128.png" alt="Email" className="icon pulse" />
          <span>tusharraut704@gmail.com</span>
        </div>

        <div className="contact-item">
          <a href="https://www.linkedin.com/in/tushar-raut-b88374258/" target="_blank" rel="noreferrer">
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-128.png" alt="LinkedIn" className="icon float" />
          </a>
          <span>LinkedIn</span>
        </div>
        

        <div className="contact-item">
          <a href="https://github.com/tusharR0" target="_blank" rel="noreferrer">
            <img src="https://cdn1.iconfinder.com/data/icons/business-strategy-22/64/Business_and_management_icons-11-128.png" alt="GitHub" className="icon float" />
          </a>
          <span>GitHub</span>
        </div>
      </div>
    </div>
        <div className="social-float-container">
  <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-128.png" alt="LinkedIn" className="social-float icon1" />
  <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-128.png" alt="GitHub" className="social-float icon2" />
  <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-twitter-128.png" alt="Twitter" className="social-float icon3" />
  <img src="https://cdn-icons-png.freepik.com/128/2504/2504957.png" alt="Instagram" className="social-float icon4" />
</div>

      </div>
    </>
  );
};

export default Contact;
