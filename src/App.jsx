import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import StickyNavbar from "./Components/StickyNavbar";
import Homepage from "./Pages/Homepage";
import Blog from './Pages/BlogPage';
import About from "./Pages/AboutPage"; // Import other pages as needed
import Contact from "./Pages/ContactusPage"; // Import other pages as needed
import Service from "./Pages/ServicePage"; // Import other pages as needed

function App() {


  return (
    <Router>
      <StickyNavbar className="mx-auto"/>
      <Routes>
        <Route path="/" element={<Navigate to='/home' replace/>} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      
    </Router>
  );
}

export default App;
