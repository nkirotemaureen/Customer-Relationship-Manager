import React, { useState } from 'react';

function ClientForm({ onAddClient }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const newClient = { name, email, phone };
    onAddClient(newClient);

    // Reset fields
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add New Client</h3>
      <input
        type="text"
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Client Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit" className="button">Add Client</button>
    </form>
  );
}

export default ClientForm;