import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Homepage from './components/pages/Homepage.jsx';

export default function App() {
  return (
    <Router>
      <div className="app-shell">
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/markets" element={<div>Markets Page</div>} />
            <Route path="/produce" element={<div>Produce Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}