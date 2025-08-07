import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  </BrowserRouter>
  
)