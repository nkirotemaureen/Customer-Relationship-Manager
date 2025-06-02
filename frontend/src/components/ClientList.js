import React, { useEffect, useState } from 'react';
import API from '../api';
import InteractionList from './interactionList';
import InteractionForm from './InteractionForm';
import './styles.css';

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  const fetchClients = () => {
    API.get('/clients/')
      .then(res => setClients(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client.id} onClick={() => setSelectedClient(client)}>
            {client.name} ({client.company})
          </li>
        ))}
      </ul>

      {selectedClient && (
        <div>
          <h3>Interactions for {selectedClient.name}</h3>
          <InteractionList clientId={selectedClient.id} />
          <InteractionForm clientId={selectedClient.id} onInteractionAdded={fetchClients} />
        </div>
      )}
    </div>
  );
};

export default ClientList;