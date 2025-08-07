import React from 'react';
import Navbar from '../components/Navbar';
import ProfileSection from '../components/ProfileSection';



const Home = () => (
  <>
    <Navbar />
   
    <div className="home-container">
      <div className="home-left">
         <div className='green-sel'></div>
          <div className='green-sel2'></div>
          <div className='green-sel3'></div>
          <div className='green-sel4'></div>
          <div className='green-sel5'></div>
          <div className='green-sel6'></div>
          <div className='green-sel7'></div>
     
          
        <h1>
          Hello, I’m <span className="highlight">Tushar Raut</span>
        </h1>
        <p>
          A passionate developer eager to grow, learn and build useful applications that solve real-world problems.
        </p>
        
        <div class="tech-logos">
  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="React" class="tech-logo react" />
  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-256.png" alt="Node.js" class="tech-logo nodejs" />
  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-256.png" alt="MongoDB" class="tech-logo mongo" />
  <img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-128.png" alt="Git" class="tech-logo git" />
  <img src="https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/github-128.png" alt="GitHub" class="tech-logo github" />
  <img src="https://cdn4.iconfinder.com/data/icons/programing/52/API__setting__configuration__option__config-128.png" alt="API" class="tech-logo api" />
</div>

      </div>
      
      <div className="home-right">
  <div className="hero-wrapper">
   
     <div className="hero-ellipse"></div>
    <div className="hero-bg primary-bg"></div>
    <div className="hero-bg secondary-bg"></div>
   <img src="/my-removebg-preview.png" alt="Hero" className="hero-image" />

  </div>
</div>
</div>

    <div className="profile-wrapper">
       
          <div className='green-sel2'></div>
          <div className='green-sel3'></div>
          <div className='green-sel4'></div>
          <div className='green-sel5'></div>
          <div className='green-sel6'></div>
          <div className='green-sel7'></div>
 
  <ProfileSection />
  
          
</div>
    <div className='green-sel8'></div>



    
  </>
);

export default Home;

