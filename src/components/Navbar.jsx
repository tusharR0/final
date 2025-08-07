import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
 // if not already imported in your main App

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <span className="navbar-brand">Hakuna Matata</span>
    </div>
    <div className="navbar-right">
      <Link to="/">Home</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/education">Education</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/certificates">Certificates</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
