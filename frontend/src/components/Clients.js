import React, { useEffect, useState } from 'react';
import { getClients, createClient } from '../api/Clients';

function Clients() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    try {
      const data = await getClients();
      setClients(data);
    } catch (err) {
      console.error('Error loading clients:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newClient = { name, email };
      console.log('Submitting client:', newClient);
      await createClient(newClient);
      setName('');
      setEmail('');
      loadClients();
    } catch (err) {
      console.error('Error creating client:', err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Clients</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Client name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Client email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Client</button>
      </form>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.name} - {client.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;