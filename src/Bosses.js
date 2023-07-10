import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bosses = () => {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    const fetchBosses = async () => {
      try {
        const response = await axios.get(
          'https://eldenring.fanapis.com/api/bosses'
        );
        setBosses(response.data);
      } catch (error) {
        console.error('Error fetching bosses:', error);
      }
    };

    fetchBosses();
  }, []);

  return (
    <div>
      <h1>Elden Ring Bosses</h1>
      <ul>
        {bosses.map((boss) => (
          <li key={boss.id}>{boss.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bosses;
