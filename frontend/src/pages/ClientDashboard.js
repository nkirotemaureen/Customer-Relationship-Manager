import React, { useEffect, useState } from 'react';
import ClientCard from '../components/ClientCard';
import ClientForm from '../components/ClientForm';
import api from '../api/axios';

function ClientDashboard() {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    const res = await api.get('/clients/');
    setClients(res.data);
  };

  const addClient = async (client) => {
    const res = await api.post('/clients/', client);
    setClients([...clients, res.data]);
  };

  const deleteClient = async (id) => {
    await api.delete(`/clients/${id}`);
    setClients(clients.filter(c => c.id !== id));
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <h2>Client Dashboard</h2>
      <ClientForm onAddClient={addClient} />
      <div className="card-grid">
        {clients.map(client => (
          <ClientCard key={client.id} {...client} onDelete={() => deleteClient(client.id)} />
        ))}
      </div>
    </div>
  );
}

export default ClientDashboard;