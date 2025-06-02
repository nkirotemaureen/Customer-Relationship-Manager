import React, { useState } from 'react';
import API from '../api';
import './styles.css';

const InteractionForm = ({ clientId, onInteractionAdded }) => {
  const [form, setForm] = useState({ type: '', notes: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    API.post('/interactions/', { ...form, client_id: clientId })
      .then(() => {
        setForm({ type: '', notes: '' });
        onInteractionAdded();
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Interaction</h4>
      <input name="type" placeholder="Type" value={form.type} onChange={handleChange} required />
      <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
      <button type="submit">Add Interaction</button>
    </form>
  );
};

export default InteractionForm;