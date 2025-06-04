import React, { useState } from 'react';

function TicketForm({ onAddTicket }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [clientName, setClientName] = useState('');
  const [status, setStatus] = useState('Open');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !clientName) return;

    const newTicket = { title, description, clientName, status };
    onAddTicket(newTicket);

    setTitle('');
    setDescription('');
    setClientName('');
    setStatus('Open');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Create Support Ticket</h3>
      <input
        type="text"
        placeholder="Ticket Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option>
      </select>
      <button type="submit" className="button">Add Ticket</button>
    </form>
  );
}

export default TicketForm;