import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import TeamPhotos from "./pages/TeamPhotos";
import TeamInfo from "./pages/TeamInfo";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/TeamPhotos" element={<TeamPhotos />} />
          <Route path="/TeamInfo" element={<TeamInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
