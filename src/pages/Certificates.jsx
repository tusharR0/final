import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Certificates.css';

const certificates = [
  {
    title: 'JavaScript',
    iframeSrc: 'https://www.hackerrank.com/certificates/iframe/59b320d4dfbc',
    link: 'https://www.hackerrank.com/certificates/59b320d4dfbc',
  },
  {
    title: 'SQL',
    iframeSrc: 'https://www.hackerrank.com/certificates/iframe/6f882416d227',
    link: 'https://www.hackerrank.com/certificates/6f882416d227',
  },
];

const Certificates = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.slide-in').forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Navbar />
      <section className="certificates-section">
        <div className="background-bubbles">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} style={{ '--i': i + 1 }}></span>
          ))}
        </div>

        <div className="certificates-container">
          <div className="certificates-title">
           
            <div className="gradient-underline"></div>
          </div>

          <div className="certificates-grid">
            {certificates.map((cert, idx) => (
              <div className="certificate-card" key={idx}>
                <h2>{cert.title}</h2>
                <div className="cert-embed">
                  <iframe
                    src={cert.iframeSrc}
                    className="slide-in"
                    loading="lazy"
                    title={cert.title}
                  ></iframe>
                </div>
                <p className="cert-link">
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    Open Certificate in New Tab ↗
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
