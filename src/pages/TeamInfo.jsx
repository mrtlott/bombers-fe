import React from "react";
import { Link } from "react-router-dom";
import "./TeamInfo.css";

const TeamSection = () => {
  return (
    <div className="container">
      <p>PHONE NUMBER 516-592-3007</p>
      <p>contact infoamation </p>
      <a href="mailto:FarmersBombers@outlook.com">FarmersBombers@outlook.com</a>
      <a href="https://liffl.com" target="_blank" rel="noopener noreferrer">
        <p> The League Website</p>
      </a>

      <Link to="/TeamEmails"></Link> {/* email-js use library for email execution */}

      <a
        href="https://www.instagram.com/dabom_bers/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Team Instagram</p>
      </a>
    </div>
  );
};

export default TeamSection;
