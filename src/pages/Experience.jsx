import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <>
      <Navbar />

      <motion.div
        className="experience-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
     

        <div className="experience-title">
          
          <div className="gradient-underline" />
        </div>

        <div className="content-wrapper">
          {/* Gradient overlays */}
          <div className="gradient-bg gradient-bg1" />
          <div className="gradient-bg gradient-bg2" />

          {/* 🔹 Up Hill Internship */}
          <motion.section
            className="internship-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="logo-text-group">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAaVBMVEVDe+P///85duKDo+o/eeOjvvGnwvK7z/Q2dOLt8vz7/P7z9v1UheVGfePG1/Zjjuacte7a4vhokufS3ffN2Pbd5/mbufCuxvOzyvPB0/WNquyPsO7o7fslbeFPgeSDqOx7nul0megZaOC9bRdYAAAFIElEQVR4nO2aa7eiIBRAE49X8pHPMvPd//+RIygqaJOYdmetYX8yKN0BngPo6aRQKBQKhUKhUCgUCoVCoVC8AzDG8Je6r8qwy5aVXzkYLdUhzzf009e1cBhrhCicXxo7EamyjOLLTrWldVi6aIWcvK9LvmoFIXNqrUJ+YKEyH+p+vmmFIm0k4oYVnK6TuuyL4yrUppSTpgIccHWPr1mFPndhfdJU+KLxLNwIxzg1P9x1/fG6hSk4aXa4FDT2BsK6vvEtNUjhH9GJ9O7xVhDqul4vj6nCX3DS8vJV3N8LFFZEanr3xawlsL7kpGlndKwVeBXFX4hTY0AViQ7tQAirSrCymn5E4fCFErF6mbl3cPKy7NFR+V08CureCXn2ayktOSwwoNZppKqMxHh4fc8g91XfddwPSjjgZDPqvlv45LKEf4gVOL6o5Nd9OwHK3zgdYwWlf/NvPBWrxOlbJ02rdx9XbTsJRjejYlcp4hVO08i/k9MpM0SnzO0rF5PLAra3qxW4viHw47PKIlnnRKz2jKIomzndWEbD2VqnNg26OwbR7EfEYKcvJJw07XraywplyUyKdcTrhLdMsFPCQdk9EXGYUyPnRNLgLk6V6HRP2GwSeWdJJ00zdwiiqDLvAubg5Mg77ZEGcW0KUqbJQjO47xLeMv6HPYgbU+QyOKFtTp+uu1CYik7pcEZuRSrHJ2kQhZdU4JKxoFyIKzwJhunqBifvIhLf2NnwfbtTi7Mx4YCTik6RMaymjI+ctLOzKYhCeYlFp/vQTlLJZQl7S8KB0oxEzGGy8mKFJ0MgLwXoEghKQcr+HG4+d9qSBuF+DQQiNgywJ5vwlrlL3oLYFJ2ukTMkl12UNNk0iG75VYQlPCjfr1zWcpOwgmbu5A3JZUsSfoXEBnJxzwXOw0oEz7bFPmL9rP0pOuU1+0cgPav7O+s3ZAqbV7LHTd7PoyZPvjqyP+3zFHuy4sar11PrsL21UkU0tbKn+zh4cQdxO+tzIH5Y9oDFTV/3HlPx+tmCGwxWVsr/7IOp3RLNeimAXLMoWixEEsD7xU6pOEVSSReOLB/EPm+nD3sp2ZLTYiicLEkqtPSrAhp9D7yn9PSTPHF99SOE0Q4cveevUCgUCsVqXML8g8uAccH9+pvzM81/sR7wyIL4h63zjHatfC374n4BbzrdPKiM2k8m2+YnX0yAfJMckd01VJGjZpJ50YOcvJafHtCHwZd++oXoUzMqNZ0KmbSxSvKI9tpfoSDlMZANQHJE/lU3o+fe8KAl8pue3Ss/6VyKm50n6I2U8QtS9IWfZSn4tlTQ1HVDi87FPyN1KQDQk65o2tH6j3QfHf/Y6PuPSgUYKM9fbKmZ1NULKc7vST0RwgXXfcO69fcGuv54PC7cQOc4VmohePIhwcdflaKv0gRM6rIslQ7B02LbM4feffTRov3s0iaQrQPbFaVMNKaZ0qHAkS11AjqOu0f8QO+pCJjUOW5JE69PyF2cohHh2DjV79bFJOVC98YISa6dVFoQATZ1+V5E71tHi8vns6TD3PKAi1MD66TqAvcA03yOJWvp39a0z+fu7qJPBrZLDXuVdghiiS6xk8dtjOVd+22WGmlALHnI7ORNnlkH3Rskx0hJtNQJ0KPXumZ9v3eXingp4plPpaLh7kuWpYQnqhIt1dKqhLoeumj8FQlGJf8tGqDYHxnryRENc67DMS+RXkOIm200GglMi8Z6/mhkuUShUCgUCoVCoVAoFAqFQvH/8geSMIGuMwmSDAAAAABJRU5ErkJggg==" alt="Up Hill Logo" className="internship-logo" />
              <div>
                <h3>Up Hill Pvt. Ltd – Software Development Intern</h3>
                <h4>Duration: 1 Month</h4>
              </div>
            </div>
            <ul>
              <li>Developed a B2B Tender Management System using React, Node, and MySQL.</li>
              <li>Secure login, analytics dashboard, and bidding flow implemented.</li>
              <li>Worked collaboratively using GitHub, Figma, and Agile practices.</li>
            </ul>
            <img src="/Developer activity-bro.png" alt="Internship" className="internship-img" />
          </motion.section>

          {/* 🔹 AI/ML Internship */}
          <motion.section
            className="internship-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="logo-text-group">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAABmUlEQVR4AazSIayjQBCA4fG2prYGn+ZMHa7BrTeYylUoDGoVigRXh0LUrSVBra3DIhvcmhVr/zsI7+7d3WvO3G/nGzHJCP/of4MwDcMU3oKlkKvWmRTL12AQ4wF8I+MXIBqZ2JvFhD/BeBQHI/jeBp5ydL+D+qQ0Sy75faj1E/T10H4G9TmenngZL53L1ATPJCb1LzBIiBIZVXpomV9AkBDEfoAg6zZgu/LRpqzJwlP8DoyGKAFgVuqsPHiJoMsdyAs4OQCf3vMS6BXwWpWAy5zOXZ+xVmQ3C1Gm8aaH67ABc0qG/sKp34RfgLLgWz0kUq2gE6mZL8wys+cOkfNII9IhQXzZrgB7JGSXqwpBJjgPtMav4yPlfQPkDeamDbpmA03Fwcty+AkWiV1Vd9uJK6grZNlAywZQti/r3uZ8BkFC1eygMysw7Q6MCRIEI/IBXLkCPQL7FTUC2MQ9NmDTRhetGjZQu8RGNoDNUgtglMpzpQzAI1WPv7567vofdfPbtx91VValdm8BsdBFGXkPGO3gvo/6eZMAAACqCkFc1TZTXAAAAABJRU5ErkJggg==" alt="AI Logo" className="internship-logo" />
              <div>
                <h3>AI & ML Virtual Internship</h3>
                <h4>Duration: 10 Weeks</h4>
              </div>
            </div>
            <ul>
              <li>Processed datasets and built ML models using TensorFlow and Python.</li>
              <li>Built CNNs, image classifiers, and NLP-based sentiment analysis tools.</li>
              <li>Team collaboration via GitHub with weekly checkpoints.</li>
            </ul>
            <img src="/Chat bot-bro.png" alt="AI Internship" className="internship-img" />
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
