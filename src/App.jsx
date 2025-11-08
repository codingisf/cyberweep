import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import StickyNavbar from "./Components/StickyNavbar";
import Homepage from "./Pages/Homepage";
import Blog from './Pages/BlogPage';
import About from "./Pages/AboutPage"; 
import Contact from "./Pages/ContactusPage"; 
import Training from "./Pages/TrainingPage"; 
import Service from "./Pages/ServicePage"; 
import Blog1 from "./Pages/Blog/blog1"; 
import Blog2 from "./Pages/Blog/Blog2"; 
import Blog3 from "./Pages/Blog/blog3"; 
import Blog4 from "./Pages/Blog/blog4"; 

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
        <Route path="/training" element={<Training />} />
        <Route path="/blog/blog1" element={<Blog1 />} />
        <Route path="/blog/blog2" element={<Blog2 />} />
        <Route path="/blog/blog3" element={<Blog3 />} />
        <Route path="/blog/blog4" element={<Blog4 />} />
      </Routes>
      
    </Router>
  );
}

export default App;
