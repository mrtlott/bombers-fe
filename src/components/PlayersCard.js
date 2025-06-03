import React from 'react';


const PlayerCard = ({ player }) => (
  <div style={styles.card}>
    <h3>{player.name}</h3>
    <p><strong>Position:</strong> {player.position}</p>
    <p><strong>Height:</strong> {player.height}</p>
    <p><strong>Weight:</strong> {player.weight}</p>
    <p><strong>Number:</strong> #{player.number}</p>
  </div>
);

const styles = {
  card: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '200px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }
};

export default PlayerCard;
