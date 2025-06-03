



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Roster from './pages/Roster';
import TeamPhotos from './pages/TeamPhotos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/TeamPhotos" element={<TeamPhotos/>}/>
      </Routes>
    </Router>
  );
}

export default App;
