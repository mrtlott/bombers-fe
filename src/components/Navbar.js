import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={styles.navbar}>
    <div style={styles.navLinks}>
      <Link to="/" style={styles.link}>
        Home
      </Link>
      <Link to="/roster" style={styles.link}>
        Roster
      </Link>
      <Link to="/TeamPhotos" style={styles.link}>
        TeamPhotos
      </Link>
      <Link to="/TeamInfo" style={styles.link}>
        TeamInfo
      </Link>
      <Link to="/Schedule" style={styles.link}>
        Schedule
      </Link>
    </div>
  </nav>
);

const styles = {
  navbar: {
    padding: "1rem 2rem",
    background: "#333", // Dark background for contrast
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-around",
    width: "250px", // Flex evenly
  },
  link: {
    color: "#fff",
    textDecoration: "none", // Removes the underline from links
    padding: "0.5rem 1rem",
    borderRadius: "4px", // Soft corners
    transition: "background-color 0.3s ease",
  },
  linkHover: {
    backgroundColor: "#555", // Light hover effect
  },
};

export default Navbar;
