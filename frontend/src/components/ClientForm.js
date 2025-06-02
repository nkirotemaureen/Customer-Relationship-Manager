import React, { useState } from 'react';
import API from '../api';
import './styles.css';

const ClientForm = ({ onClientAdded }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    API.post('/clients/', form)
      .then(() => {
        setForm({ name: '', email: '', phone: '', company: '' });
        onClientAdded();
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Client</h3>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
      <button type="submit">Add Client</button>
    </form>
  );
};

export default ClientForm;