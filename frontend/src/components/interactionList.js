import React, { useEffect, useState } from 'react';
import API from '../api';
import './styles.css';

const InteractionList = ({ clientId }) => {
  const [interactions, setInteractions] = useState([]);

  useEffect(() => {
    API.get(`/interactions/${clientId}`)
      .then(res => setInteractions(res.data))
      .catch(err => console.error(err));
  }, [clientId]);

  return (
    <ul>
      {interactions.map(i => (
        <li key={i.id}>
          <strong>{i.type}</strong>: {i.notes} ({new Date(i.date).toLocaleString()})
        </li>
      ))}
    </ul>
  );
};

export default InteractionList;