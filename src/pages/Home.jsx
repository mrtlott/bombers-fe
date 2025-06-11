import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // optional styling file
import Logo from "../public/bomberslogo.png";
import styles from "./Roster.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={Logo} alt="Team Logo" className="team-logo" />
        <h1>🔥 The Bombers Football Team 🔥</h1>
        <p className="slogan">"Built For Glory, Playing With Heart"</p>
      </header>

      <section className="next-game">
        <h2>🏈 Next Game 🏈</h2>
        <p>
          <strong>Vs:</strong> UNKNOWN
        </p>
        <p>
          <strong>Date:</strong> June 29, 2025
        </p>
        <p>
          <strong>Location:</strong> UNKNOWN
        </p>
      </section>

      <section className="call-to-action">
        <Link to="/roster">
          <button className="view-roster-btn">View Team Roster</button>
        </Link>
      </section>

      {/* ✅ New Section: Team Photo Link */}
      <section className="team-photo-section">
        <h2>📸 Team Moments</h2>
        <Link to="/TeamPhotos">
          <img
            src="/images/team-photo.jpg"
            alt="Team Photo"
            className="team-photo"
          />
        </Link>
        <Link to="https://liffl.com">
          <p>League Website</p>
        </Link>
      </section>
    </div>
  );

  const generateFootballs = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 3 + Math.random() * 2;
      return (
        <img
          key={i}
          src="/football.png"
          alt=""
          className="football"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
  };

  const Home = () => {
    return (
      <div className="home-container">
        <div className="football-container">{generateFootballs(20)}</div>
        <h1 className="home-title">Farmers Bombers</h1>
        <p className="home-subtitle">Official Team Site</p>
        <button
          className="home-button"
          onClick={() => (window.location.href = "/TeamEmails")}
        >
          View Team Emails
        </button>
      </div>
    );
  };
};

export default Home;
