import React, { useEffect, useState } from 'react';
import API from '../api';

const InteractionList = ({ clientId }) => {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    API.get(`/interactions/${clientId}`)
      .then(res => setInteractions(res.data))
      .catch(err => console.error(err));
  }, [clientId]);

  return (
    <ul>
      {interactions.map(inter => (
        <li key={inter.id}>
          <strong>{inter.type}</strong>: {inter.notes} ({new Date(inter.date).toLocaleString()})
        </li>
      ))}
    </ul>
  );
};

export default InteractionList;