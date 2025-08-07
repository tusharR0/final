import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../styles/Projects.css';

const projects = [
  {
    title: 'B2B Tender Management System',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    description:
      'A full-stack platform for companies to manage tenders, including authentication, file uploads, and proposal workflow.',
    image: '/tender.jpg',
    github: 'https://github.com/tusharR0/tender-platform',
  },
  {
    title: 'Password Manager',
    tech: ['React', 'Node.js', 'MongoDB'],
    description:
      'A secure password manager with login system and encryption using modern tech stack.',
    image: '/Auth.jpg',
    github: 'https://github.com/tusharR0/password-manager',
  },
  {
    title: 'Resume Website',
    tech: ['React', 'HTML', 'CSS'],
    description:
      'A clean and animated portfolio to showcase my education, skills, and experience.',
    image: '/wr-resumes-logo.webp',
    github: 'https://github.com/tusharR0/react-resume',
  },
];

const Projects = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <Navbar />

      <div className="projects-wrapper">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: '#f5fffa' },
            particles: {
              color: { value: '#00b894' },
              links: {
                color: '#00b894',
                distance: 110,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                outModes: 'bounce',
              },
              number: { value: 40 },
              opacity: { value: 0.2 },
              shape: { type: 'circle' },
              size: { value: { min: 1, max: 3 } },
            },
          }}
        />

        <motion.div
          className="projects-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <div className="section-underline"></div>

          <div className="projects-grid">
            {projects.map((proj, index) => (
              <motion.div
                className="project-card"
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="project-image"
                />
                <div className="project-details">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-description">{proj.description}</p>
                  <div className="tech-badges">
                    {proj.tech.map((tech, i) => (
                      <span key={i} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.github}
                    className="github-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    🔗 View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
