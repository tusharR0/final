import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Education.css';

const Education = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.edu-section').forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />
      <section className="education-container floating-circles">
        <div className="green-overlay-1"></div>
        <div className="green-overlay-2"></div>
        <div className="green-overlay-3"></div>

        <div className="edu-title">
          
          <div className="green-underline"></div>
        </div>

        <div className="edu-wrapper">
          <div className="edu-section fade-in">
            <div className="edu-content">
              <img src="/sb j.png" alt="sb" className="sb logo" />


              <a
                className="edu-link"
                href="https://sbjain.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>SB Jain Institute of Technology, Management & Research</h2>↗
              </a>
              <p>Bachelor of Engineering in Information Technology (2021–2025)</p>
              <section className="intro-section" fade-in>
  <h2>Technical Proficiencies</h2>
  <p>
    Throughout my academic and personal projects, I've built a solid foundation in key areas of computer science.
    Below is an overview of the domains I have strong expertise in.
  </p>
</section>

              <div className="grid-container">
  <div className="grid-item"  style={{ animationDelay: '2s' }}>
    <h3>DSA</h3>
    <p>Designed and solved 300+ problems on LeetCode and GFG, mastering core logic-building skills.</p>
  </div>
  <div className="grid-item"  style={{ animationDelay: '4s' }}>
    <h3>DBMS & OS</h3>
    <p>Understood indexing, transactions, joins, and key concepts like scheduling and memory management.</p>
  </div>
  <div className="grid-item"  style={{ animationDelay: '6s' }}>
    <h3>Fullstack Development</h3>
    <p>Built responsive apps using React, Node.js, MySQL, and REST APIs.</p>
  </div>
  <div className="grid-item"  style={{ animationDelay: '7s' }}>
    <h3>Cloud</h3>
    <p>Learned cloud deployment and compute/storage operations on AWS/GCP.</p>
  </div>
</div>

            </div>

            <div className="edu-illustration">
              <img
                src="\boy on graduation-amico.png"
                alt="Graduation Illustration"
                className="storyset-edu-img"
              />
              {/* You can also download and place a local image in /public/images/ if preferred */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
