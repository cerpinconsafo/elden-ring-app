import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bosses = () => {
  const [bosses, setBosses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBoss, setSelectedBoss] = useState('');

  useEffect(() => {
    const fetchBosses = async () => {
      try {
        const response = await axios.get('https://eldenring.fanapis.com/api/bosses');
        setBosses(response.data.data);
      } catch (error) {
        console.error('Error fetching bosses:', error);
      }
    };

    fetchBosses();
  }, []);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
  };

  const handleBossSelect = (event) => {
    setSelectedBoss(event.target.value);
  };

  const filteredBosses = bosses.filter((boss) =>
    boss.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Elden Ring Bosses</h1>
      <label htmlFor="bossInput">Search Boss:</label>
      <input
        type="text"
        id="bossInput"
        placeholder="Type boss name..."
        onChange={handleInputChange}
        value={searchTerm}
      />
      {filteredBosses.length > 0 ? (
        <select value={selectedBoss} onChange={handleBossSelect}>
          <option value="">Select a boss...</option>
          {filteredBosses.map((boss) => (
            <option key={boss.id} value={boss.name}>
              {boss.name}
            </option>
          ))}
        </select>
      ) : (
        <p>No bosses found.</p>
      )}
    </div>
  );
};

export default Bosses;
