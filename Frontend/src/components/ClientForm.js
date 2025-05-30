import React, { useState } from 'react';
import API from '../api';

const ClientForm = ({ onClientAdded }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post('/clients/', form)
      .then(() => {
        onClientAdded();
        setForm({ name: '', email: '', phone: '', company: '' });
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Client</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
      <button type="submit">Add Client</button>
    </form>
  );
};

export default ClientForm;