import React, { useEffect, useState } from 'react';
import PlayerCard from '../components/PlayersCard'; // Make sure this path is correct
import './Roster.css';

const Roster = () => {
  const [players, setPlayers] = useState([]);
  // const api = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    fetch(`http://localhost:3000/transactions`)
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error("Failed to fetch roster:", err));
  }, []);

  return (
    <div className='roster-container' style={{ padding: '2rem' }}>
      <h1>Team Roster</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Roster;
