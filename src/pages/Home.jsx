// // src/pages/Home.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; // optional styling file
// import Logo from '../public/bomberslogo.png'

// const Home = () => {
//   return (
//     <div className="home-container">
//       <header className="home-header">
//         <img src={Logo} alt="Team Logo" className="team-logo" />
//         <h1>🔥 The Bombers Football Team 🔥</h1>
//         <p className="slogan">"Built For Glory, Playing With Heart"</p>
//       </header>

//       <section className="next-game">
//         <h2>🏈 Next Game 🏈</h2>
//         <p><strong>Vs:</strong> UNKNOW </p>
//         <p><strong>Date:</strong> june 29, 2025</p>
//         <p><strong>Location:</strong> UNKNOW </p>
//       </section>

//       <section className="call-to-action">
//         <Link to="/roster">
//           <button className="view-roster-btn">View Team Roster</button>
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default Home;










// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // optional styling file
import Logo from '../public/bomberslogo.png';
import styles from './Roster.css';

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
        <p><strong>Vs:</strong> UNKNOWN</p>
        <p><strong>Date:</strong> June 29, 2025</p>
        <p><strong>Location:</strong> UNKNOWN</p>
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
      </section>
    </div>
  );
};

export default Home;


